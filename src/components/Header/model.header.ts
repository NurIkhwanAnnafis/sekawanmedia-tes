export interface ICurrent {
    name: string;
    role?: string;
    profile_image: string;
}

export interface IHeader {
    handleLogout: () => void;
    current: ICurrent;
}
