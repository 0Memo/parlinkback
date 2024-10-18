/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { CacheService } from './cache.service';
import { redisStore } from 'cache-manager-redis-yet';

// const redisUrl = process.env.REDIS_URL;
@Module({
    imports: [
        CacheModule.registerAsync({
            useFactory: async () => ({                
                store: await redisStore({
                    url: process.env.REDIS_URL,
                    ttl: 600,
                    socket: {
                        tls: true,
                        rejectUnauthorized: false, // Ignore self-signed certificate issues
                    },
                }),
            }),
        }),
    ],
    providers: [CacheService],
    exports: [CacheService],
})
export class AppCacheModule {}