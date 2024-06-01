import { useState } from 'react';
import { handleRedirect } from '../../../utils/pages';
import { formAuth, IFormAuth } from '../model.auth';
import { setUser } from '../../../utils/localStorage';

export const useAuthForm = () => {
  const [form] = useState<IFormAuth>(formAuth);
  const [loading, setLoading] = useState<boolean>(false);
  
  const handleSetLoading = (flag: boolean) => setLoading(flag)

  const handleSubmit = async (value: IFormAuth) => {
    handleSetLoading(false);

    try {
      setUser({ role: 'guest', user: { name: 'Anjay', email: value.email }, token: 'asd' })

      setTimeout(() => {
        handleRedirect();
      }, 1000)

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
  };
};
