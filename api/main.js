"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = bootstrap;
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const compression_1 = __importDefault(require("compression"));
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const helmet_1 = __importDefault(require("helmet"));
const redis = __importStar(require("redis"));
let redisClient;
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: 'https://parlink.vercel.app',
        methods: ['GET', 'HEAD', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Origin', 'X-Requested-With', 'Accept', 'Authorization', 'refresh_token'],
        exposedHeaders: ['Authorization'],
        credentials: true,
    });
    console.log('CORS configured.');
    redisClient = redis.createClient({
        url: process.env.REDIS_URL,
        socket: {
            tls: true,
            reconnectStrategy: () => 1000,
            connectTimeout: 10000,
        },
    });
    await redisClient.connect();
    if (process.env.NODE_ENV === 'production') {
        console.log('Production mode detected.');
    }
    app.useGlobalPipes(new common_1.ValidationPipe());
    console.log('Global validation pipe configured.');
    app.use((0, compression_1.default)());
    app.use((0, helmet_1.default)());
    console.log('Helmet configured.');
    const config = new swagger_1.DocumentBuilder()
        .setTitle('alt-bootcamp')
        .setDescription('The alt-bootcamp API description')
        .setVersion('0.1')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    console.log('Swagger documentation configured.');
    app.enableShutdownHooks();
    app.getHttpAdapter().getInstance().on('close', async () => {
        if (redisClient.isOpen) {
            await redisClient.disconnect();
            console.log('Redis client disconnected successfully.');
        }
    });
    app.getHttpAdapter().get('/health', (_, res) => res.send('OK'));
    await app.listen(process.env.PORT || 3000);
    console.log(`L'application écoute sur le port: ${await app.getUrl()}`);
}
//# sourceMappingURL=main.js.map