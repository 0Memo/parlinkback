"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const ad_controller_1 = require("./ad.controller");
const ad_service_1 = require("./ad.service");
describe('AdController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [ad_controller_1.AdController],
            providers: [ad_service_1.AdService],
        }).compile();
        controller = module.get(ad_controller_1.AdController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=ad.controller.spec.js.map