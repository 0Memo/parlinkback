import { ExceptionFilter, ArgumentsHost } from '@nestjs/common';
import { CustomException } from '../exceptions/custom.exception';
export declare class CustomHttpExceptionFilter implements ExceptionFilter {
    catch(exception: CustomException, host: ArgumentsHost): void;
}
