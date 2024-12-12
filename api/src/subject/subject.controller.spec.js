"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const subject_controller_1 = require("./subject.controller");
const subject_service_1 = require("./subject.service");
describe('SubjectController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [subject_controller_1.SubjectController],
            providers: [subject_service_1.SubjectService],
        }).compile();
        controller = module.get(subject_controller_1.SubjectController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=subject.controller.spec.js.map