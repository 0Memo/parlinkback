"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const user_group_service_1 = require("./user-group.service");
describe('UserGroupService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [user_group_service_1.UserGroupService],
        }).compile();
        service = module.get(user_group_service_1.UserGroupService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=user-group.service.spec.js.map