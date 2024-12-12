"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const category_controller_1 = require("./category.controller");
const category_service_1 = require("./category.service");
describe('CategoryController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [category_controller_1.CategoryController],
            providers: [category_service_1.CategoryService],
        }).compile();
        controller = module.get(category_controller_1.CategoryController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=category.controller.spec.js.map