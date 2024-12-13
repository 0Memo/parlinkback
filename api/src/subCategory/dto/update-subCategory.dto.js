"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSubCategoryDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_subCategory_dto_1 = require("./create-subCategory.dto");
class UpdateSubCategoryDto extends (0, swagger_1.PartialType)(create_subCategory_dto_1.CreateSubCategoryDto) {
}
exports.UpdateSubCategoryDto = UpdateSubCategoryDto;
//# sourceMappingURL=update-subCategory.dto.js.map