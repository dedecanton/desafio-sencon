export type User = {
    name: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    company: string;
}

export type UserFetched = {
    name:string;
    email:string;
    phone: string;
    address: {
        street: string;
        suite:string;
        city:string;
        zipcode:string;
    };
}

export type UseFetchUsersType = {
    data: UserFetched[];
    loading: boolean;
    error: Error | null
}