"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const subject_service_1 = require("./subject.service");
describe('SubjectService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [subject_service_1.SubjectService],
        }).compile();
        service = module.get(subject_service_1.SubjectService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=subject.service.spec.js.map