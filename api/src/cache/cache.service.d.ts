import { Cache } from 'cache-manager';
export declare class CacheService {
    private readonly cacheManager;
    constructor(cacheManager: Cache);
    get(key: string): Promise<string>;
    set(key: string, value: string | number, ttl: number): Promise<void>;
    del(key: string): Promise<void>;
}
