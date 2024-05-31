import { createContext } from "react";
import { IHeader } from "../model.header";

export const ContextHeader = createContext<IHeader>({
    handleLogout: () => {},
    current: { name: '', role: '', profile_image: '' }
})