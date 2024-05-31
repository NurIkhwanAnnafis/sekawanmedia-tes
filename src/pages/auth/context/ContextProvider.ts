import { createContext } from "react";
import { IContextAuth } from "../model.auth";

export const ContextAuth = createContext<IContextAuth>({
    form: { email: '', password: '' },
    handleSubmit: async () => {},
    loading: false,
});