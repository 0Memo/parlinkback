"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const child_controller_1 = require("./child.controller");
const child_service_1 = require("./child.service");
describe('ChildController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [child_controller_1.ChildController],
            providers: [child_service_1.ChildService],
        }).compile();
        controller = module.get(child_controller_1.ChildController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=child.controller.spec.js.map