const passwordTester = '^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,}$';

const isPasswordStrongth = (text: string, exp: string = passwordTester) => {
  const regex = new RegExp(exp);

  return regex.test(text);
};

const toDataOption = (data: Array<any> = [], label: string = 'name', id: string = 'id') =>
  data.map((val) => ({
    id: val[id],
    name: val[label],
  }));

export { isPasswordStrongth, toDataOption };
