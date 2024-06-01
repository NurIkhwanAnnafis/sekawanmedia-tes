import { useState } from 'react';
import { handleRedirect } from '../../../utils/pages';
import { formAuth, IFormAuth } from '../model.auth';
import { setUser } from '../../../utils/localStorage';
import { useTranslation } from 'react-i18next';
import { requestLogin } from '../../../data/auth';

export const useAuthForm = () => {
  const { t } = useTranslation(['auth', 'base']);
  const [form] = useState<IFormAuth>(formAuth);
  const [loading, setLoading] = useState<boolean>(false);
  
  const handleSetLoading = (flag: boolean) => setLoading(flag)

  const handleSubmit = async (values: IFormAuth) => {
    handleSetLoading(true);

    try {
      const payload = {
        email: values.email,
        password: values.password,
        role: values.email === 'admin@email.com' ? 'admin' : 'guest',
      } as { email: string; password: string; role: 'admin' | 'guest' | '' }

      const res = await requestLogin(payload)
      setUser(res)
      
      handleRedirect();
    } catch (error: any) {
      if (error) {
        const { data } = error;

        console.error(data);
      }
    } finally {
      handleSetLoading(false);
    }
  };

  return {
    form,
    handleSubmit,
    loading,
    handleSetLoading,
    t,
  };
};
