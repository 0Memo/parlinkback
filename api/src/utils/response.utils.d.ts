export declare const responseCode: (data?: string | number) => {
    success: {
        event: {
            filter: string;
            filterUser: string;
            byId: string;
            create: string;
            update: string;
            delete: string;
        };
    };
    error: {
        event: {
            byId: string;
            update: string;
            delete: string;
            user: string;
        };
    };
};
