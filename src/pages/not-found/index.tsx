import React from 'react';
import imageError from '../../assets/images/404.png';

const NotFound: React.FC = () => {
  return (
    <div className="h-100">
      <img src={imageError} alt="error" />

      <h3>404 Page Not Found</h3>
      <p>
        The page you are looking for might have been removed had its name changed or is temporarily
        unavailable.
      </p>

      <a className="btn btn-light" href="/">
        Go to Home
      </a>
    </div>
  );
};

export default NotFound;
