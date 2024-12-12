import { HttpException, HttpStatus } from "@nestjs/common";
export declare class CustomException extends HttpException {
    code: string;
    constructor(message: string, status: HttpStatus, code: string);
}
