export interface PostProps {
    userId: number;
    id: number;
    title: string;
    body: string;
}
export interface Welcome {
    id:       number;
    name:     string;
    username: string;
    email:    string;
    address:  Address;
    phone:    string;
    website:  string;
    company:  Company;
}

export interface Address {
    street:  string;
    suite:   string;
    city:    string;
    zipcode: string;
    geo:     Geo;
}

export interface Geo {
    lat: string;
    lng: string;
}

export interface Company {
    name:        string;
    catchPhrase: string;
    bs:          string;
}
export interface UsersProps  {
    posts: UserData[];
}
export interface PostData {
    userId: number;
    id?: number;
    title: string;
    body: string;
}
export interface PostModalProps {
    onClose: () => void;
    onSubmit: (post: PostData) => void;
}
export interface UserData {
    id: number;
    name: string;
    email: string;
    username: string;
    phone?: string;
    website?: string;
    address?: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo?: {
            lat: string;
            lng: string;
        };
    };
    company?: {
        name: string;
        catchPhrase: string;
        bs: string;
    }
}
export interface UserModalProps {
    onClose: () => void;
    onSubmit: (newUser: UserData) => void;
}
