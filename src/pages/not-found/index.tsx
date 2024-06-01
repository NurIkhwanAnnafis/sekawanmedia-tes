import React from 'react';
import imageError from '../../assets/images/404.png';
import { useTranslation } from 'react-i18next';

const NotFound: React.FC = () => {
  const { t } = useTranslation(['notfound']);

  return (
    <div className="h-100">
      <img src={imageError} alt="error" />

      <h3>{t('title', '404 Page Not Found')}</h3>
      <p>
        {t('description', 'The page you are looking for might have been removed had its name changed or is temporarily unavailable.')}
      </p>

      <a className="btn btn-light" href="/overview">
        {t('back', 'Go to Home')}
      </a>
    </div>
  );
};

export default NotFound;
