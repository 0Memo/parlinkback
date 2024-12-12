"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const subCategory_controller_1 = require("./subCategory.controller");
const subCategory_service_1 = require("./subCategory.service");
describe('SubCategoryController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [subCategory_controller_1.SubCategoryController],
            providers: [subCategory_service_1.SubCategoryService],
        }).compile();
        controller = module.get(subCategory_controller_1.SubCategoryController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=subCategory.controller.spec.js.map