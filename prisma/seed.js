"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fr_1 = require("@faker-js/faker/locale/fr");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const generateRandomRole = () => {
    const roles = Object.values(client_1.UserRole);
    return fr_1.faker.helpers.arrayElement(roles);
};
const generateRandomStatus = () => {
    const statuses = Object.values(client_1.UserStatus);
    return fr_1.faker.helpers.arrayElement(statuses);
};
const generateUserAdStatus = () => {
    const statuses = Object.values(client_1.UserAdStatus);
    return fr_1.faker.helpers.arrayElement(statuses);
};
const generateUniqueNames = (count, generator) => {
    const names = new Set();
    while (names.size < count) {
        names.add(generator());
    }
    return Array.from(names);
};
const categoryNames = ['Covoiturage', 'Soutien', 'Garderie', 'Sortie'];
const subCategoriesMap = {
    'Covoiturage': ['Musées et centres d\'expositions', 'Zoos et aquariums', 'Parcs et jardins', 'Camps de vacances'],
    'Soutien': ['Mathématiques', 'Enseignement moral et civique', 'Histoire-géographie', 'Technologie'],
    'Garderie': ['La garde à domicile partagée', 'La crèche familiale', 'L\'assistance maternelle', 'La garde à domicile'],
    'Sortie': ['Piscine', 'Promenade', 'Ressources', 'Parc']
};
const generateUsers = (count) => {
    const users = [];
    for (let i = 0; i < count; i++) {
        users.push({
            id: fr_1.faker.string.uuid(),
            firstName: fr_1.faker.person.firstName(),
            lastName: fr_1.faker.person.lastName(),
            email: fr_1.faker.internet.email(),
            role: generateRandomRole(),
            status: generateRandomStatus(),
            password: fr_1.faker.internet.password(),
            createdAt: new Date(),
            updatedAt: new Date(),
        });
    }
    return users;
};
const generateProfiles = (userId) => ({
    id: fr_1.faker.string.uuid(),
    phone: fr_1.faker.phone.number(),
    city: fr_1.faker.location.city(),
    postalCode: fr_1.faker.location.zipCode(),
    address: fr_1.faker.location.streetAddress(),
    profilePicture: fr_1.faker.image.avatar().slice(0, 50),
    createdAt: new Date(),
    updatedAt: new Date(),
    userId,
});
const generateCategories = async () => {
    const categoryMap = new Map();
    for (const name of categoryNames) {
        const existingCategory = await prisma.category.findUnique({
            where: { name },
        });
        if (!existingCategory) {
            const createdCategory = await prisma.category.create({
                data: {
                    id: fr_1.faker.string.uuid(),
                    name,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            });
            categoryMap.set(name, createdCategory.id);
        }
        else {
            categoryMap.set(name, existingCategory.id);
        }
    }
    return categoryNames.map(name => categoryMap.get(name));
};
const generateSubCategories = async (categoryMap) => {
    const subCategories = [];
    for (const [categoryName, subCategoryNames] of Object.entries(subCategoriesMap)) {
        const categoryId = categoryMap.get(categoryName);
        for (const subCategoryName of subCategoryNames) {
            subCategories.push({
                id: fr_1.faker.string.uuid(),
                name: subCategoryName,
                createdAt: new Date(),
                updatedAt: new Date(),
                categoryId,
            });
        }
    }
    return subCategories;
};
const generateAds = async (userId, categoryIds, subCategoryIds, count) => {
    const ads = [];
    for (let i = 0; i < count; i++) {
        const adId = fr_1.faker.string.uuid();
        const startTime = fr_1.faker.date.future();
        const endTime = new Date(startTime.getTime() + 60 * 60 * 1000);
        try {
            const createdAd = await prisma.ad.create({
                data: {
                    id: adId,
                    title: fr_1.faker.lorem.words(5).slice(0, 50),
                    description: fr_1.faker.lorem.paragraph(),
                    startTime: startTime,
                    endTime: endTime,
                    duration: 1,
                    address: fr_1.faker.location.streetAddress(),
                    postalCode: fr_1.faker.location.zipCode(),
                    city: fr_1.faker.location.city(),
                    country: 'France',
                    attendees: fr_1.faker.number.int({ min: 0, max: 100 }),
                    transport: fr_1.faker.helpers.arrayElement(['car', 'van']),
                    conform: fr_1.faker.datatype.boolean(),
                    status: fr_1.faker.helpers.arrayElement(['cancel', 'report']),
                    adPicture: fr_1.faker.image.url().slice(0, 50),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    userId,
                    categoryId: fr_1.faker.helpers.arrayElement(categoryIds),
                    subCategoryId: fr_1.faker.helpers.arrayElement(subCategoryIds),
                },
            });
            ads.push(createdAd);
        }
        catch (error) {
            console.error('Error creating ad:', error);
        }
    }
    return ads;
};
const generateFiles = (userId, count) => {
    const files = [];
    for (let i = 0; i < count; i++) {
        files.push({
            id: fr_1.faker.string.uuid(),
            filePath: fr_1.faker.system.filePath(),
            fileType: fr_1.faker.helpers.arrayElement(['jpg', 'png']),
            createdAt: new Date(),
            updatedAt: new Date(),
            userId,
        });
    }
    return files;
};
const generateMessages = (userId, count) => {
    const messages = [];
    for (let i = 0; i < count; i++) {
        messages.push({
            id: fr_1.faker.string.uuid(),
            text: fr_1.faker.lorem.words(5).slice(0, 50),
            conform: fr_1.faker.datatype.boolean(),
            createdAt: new Date(),
            updatedAt: new Date(),
            userId,
        });
    }
    return messages;
};
const generateSubjects = (count) => {
    const uniqueNames = generateUniqueNames(count, () => fr_1.faker.lorem.words(2));
    const subjects = uniqueNames.map(name => ({
        id: fr_1.faker.string.uuid(),
        name,
        createdAt: new Date(),
        updatedAt: new Date(),
    }));
    return subjects;
};
const generateChildren = (count) => {
    const children = [];
    for (let i = 0; i < count; i++) {
        children.push({
            id: fr_1.faker.string.uuid(),
            firstName: fr_1.faker.person.firstName(),
            lastName: fr_1.faker.person.lastName(),
            school: fr_1.faker.commerce.department(),
            class: fr_1.faker.helpers.arrayElement(['A', 'B', 'C']),
            createdAt: new Date(),
            updatedAt: new Date(),
        });
    }
    return children;
};
const generateUserHasSubjects = (userId, subjectIds) => {
    const userHasSubjects = [];
    for (const subjectId of subjectIds) {
        userHasSubjects.push({
            userId,
            subjectId,
        });
    }
    return userHasSubjects;
};
const generateUserHasChildren = (userId, childIds) => {
    const result = [];
    childIds.forEach(childId => {
        const pair = { userId: userId, childId: childId };
        result.push(pair);
    });
    return result;
};
const generateUserHasAds = (userId, adIds) => {
    const userHasAds = [];
    for (const adId of adIds) {
        userHasAds.push({
            userId,
            adId,
            userAttendees: fr_1.faker.number.int({ min: 0, max: 6 }),
            status: generateUserAdStatus(),
            createdAt: new Date(),
            updatedAt: new Date(),
        });
    }
    return userHasAds;
};
const generateAdHasFiles = (adId, fileIds) => {
    const adHasFiles = [];
    for (const fileId of fileIds) {
        adHasFiles.push({
            adId,
            fileId,
        });
    }
    return adHasFiles;
};
const seed = async () => {
    try {
        console.log('En cours de génération...');
        const categoryIds = await generateCategories();
        const categoryMap = new Map();
        for (let i = 0; i < categoryNames.length; i++) {
            categoryMap.set(categoryNames[i], categoryIds[i]);
        }
        const subCategories = await generateSubCategories(categoryMap);
        await Promise.all(subCategories.map(subCategory => prisma.subCategory.create({ data: subCategory })));
        const subjects = generateSubjects(5);
        const createdSubjects = await Promise.all(subjects.map(subject => prisma.subject.create({ data: subject })));
        const children = generateChildren(5);
        const createdChildren = await Promise.all(children.map(child => prisma.child.create({ data: child })));
        const users = generateUsers(10);
        for (const user of users) {
            const createdUser = await prisma.user.create({ data: user });
            const profile = generateProfiles(createdUser.id);
            await prisma.profile.create({ data: profile });
            const ads = await generateAds(createdUser.id, categoryIds, subCategories.map(sub => sub.id), 3);
            const adIds = ads.map(ad => ad.id);
            for (const ad of ads) {
                const files = generateFiles(createdUser.id, 2);
                const createdFiles = await Promise.all(files.map(file => prisma.file.create({ data: file })));
                const adHasFiles = generateAdHasFiles(ad.id, createdFiles.map(file => file.id));
                await Promise.all(adHasFiles.map(adHasFile => prisma.adHasFile.create({ data: adHasFile })));
            }
            const messages = generateMessages(createdUser.id, 3);
            for (const message of messages) {
                await prisma.message.create({ data: message });
            }
            const userChildren = createdChildren.map(child => ({
                userId: createdUser.id,
                childId: child.id,
            }));
            await prisma.userHasChildren.createMany({ data: userChildren });
            const userHasSubjects = generateUserHasSubjects(createdUser.id, createdSubjects.map(subject => subject.id));
            await prisma.userHasSubjects.createMany({ data: userHasSubjects });
            const userHasAds = generateUserHasAds(createdUser.id, adIds);
            await prisma.userHasAds.createMany({ data: userHasAds });
            const userHasChildren = generateUserHasChildren(createdUser.id, createdChildren.map(child => child.id));
            for (const relation of userHasChildren) {
                await prisma.userHasChildren.upsert({
                    where: { userId_childId: { userId: relation.userId, childId: relation.childId } },
                    update: {},
                    create: relation,
                });
            }
        }
        console.log('Données générées!');
    }
    catch (error) {
        console.error('Erreur lors de la génération des données:', error);
    }
};
seed()
    .catch((error) => console.error(error))
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map