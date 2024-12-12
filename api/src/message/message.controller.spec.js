"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const message_controller_1 = require("./message.controller");
const message_service_1 = require("./message.service");
describe('MessageController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [message_controller_1.MessageController],
            providers: [message_service_1.MessageService],
        }).compile();
        controller = module.get(message_controller_1.MessageController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=message.controller.spec.js.map