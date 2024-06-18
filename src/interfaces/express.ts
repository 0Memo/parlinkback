/* eslint-disable prettier/prettier */
import { Request } from 'express';

declare module 'express' {
    export interface Request {
        user?: { sub: number, email: string};
        refreshToken: string;
    }
}

export { Request };