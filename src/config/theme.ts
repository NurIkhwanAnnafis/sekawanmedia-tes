import { createContext, useState } from "react";

export interface ITheme {
    theme: 'dark' | '';
    handleChangeTheme: (value: '' | 'dark') => void
}

export const ContextTheme = createContext<ITheme>({
    theme: '',
    handleChangeTheme: (value: '' | 'dark') => { }
});

export const useTheme = () => {
    const [theme, setTheme] = useState<'dark' | ''>('');

    const handleChangeTheme = (value: '' | 'dark') => setTheme(value);

    return {
        theme,
        handleChangeTheme,
    }
}