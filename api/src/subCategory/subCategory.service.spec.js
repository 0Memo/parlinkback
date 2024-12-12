"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const subCategory_service_1 = require("./subCategory.service");
describe('SubCategoryService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [subCategory_service_1.SubCategoryService],
        }).compile();
        service = module.get(subCategory_service_1.SubCategoryService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=subCategory.service.spec.js.map