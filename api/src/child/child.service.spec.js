"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const child_service_1 = require("./child.service");
describe('ChildService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [child_service_1.ChildService],
        }).compile();
        service = module.get(child_service_1.ChildService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=child.service.spec.js.map