export declare class AuthService {
    generateRandomPassword(length: number): string;
    hash(password: string): Promise<string>;
    compare(password: string, hashed_password: string): Promise<boolean>;
}
