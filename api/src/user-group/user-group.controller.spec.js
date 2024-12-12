"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const user_group_controller_1 = require("./user-group.controller");
const user_group_service_1 = require("./user-group.service");
describe('UserGroupController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [user_group_controller_1.UserGroupController],
            providers: [user_group_service_1.UserGroupService],
        }).compile();
        controller = module.get(user_group_controller_1.UserGroupController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=user-group.controller.spec.js.map