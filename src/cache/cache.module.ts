/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { CacheService } from './cache.service';
import { redisStore } from 'cache-manager-redis-yet';

@Module({
    imports: [
        CacheModule.registerAsync({
            useFactory: async () => {
                try {
                    const store = await redisStore({
                        url: process.env.REDIS_URL,
                        ttl: 600,
                        socket: {
                            tls: false,
                            connectTimeout: 30000,
                        },
                    });

                    return { store };
                } catch (error) {
                    console.error('Redis connection error:', error);
                    throw error;
                }
            },
        }),
    ],
    providers: [CacheService],
    exports: [CacheService],
})
export class AppCacheModule {}