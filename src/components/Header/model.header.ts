export interface ICurrent {
    name: string;
    role?: string;
    profile_image: string;
}

export interface IHeader {
    handleLogout: () => void;
    current: ICurrent;
    options: Array<{ label: string; value: string | number }>,
    handleSearch: (q: string) => void,
    handleClick: (id: string | number) => void
}
