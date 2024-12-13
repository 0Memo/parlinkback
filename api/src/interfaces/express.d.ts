import { Request } from 'express';
declare module 'express' {
    interface Request {
        user?: {
            sub: number;
            email: string;
        };
        refresh_token: string;
    }
}
export { Request };
