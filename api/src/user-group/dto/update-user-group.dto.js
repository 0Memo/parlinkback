"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserGroupDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_user_group_dto_1 = require("./create-user-group.dto");
class UpdateUserGroupDto extends (0, swagger_1.PartialType)(create_user_group_dto_1.CreateUserGroupDto) {
}
exports.UpdateUserGroupDto = UpdateUserGroupDto;
//# sourceMappingURL=update-user-group.dto.js.map