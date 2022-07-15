
export type User = {
    name:string;
    email:string;
    phone: string;
    address: {
        street: string;
        suite:string;
        city:string;
        zipcode:string;
    };
    id: number;
}

export type UseFetchUsersType = {
    data: User[];
    loading: boolean;
    error: Error | null
}