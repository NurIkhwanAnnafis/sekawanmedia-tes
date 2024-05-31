export interface IFormAuth {
  email: string;
  password: string;
}

export interface IContextAuth {
  form: IFormAuth;
  handleSubmit: (value: any) => Promise<void>;
  loading: boolean,
}

export const formAuth: IFormAuth = {
  email: '',
  password: '',
};
