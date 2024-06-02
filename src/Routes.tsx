import React, { Suspense, useEffect } from 'react';
import { Route, Routes as Switch, useLocation } from 'react-router-dom';
import Loading from './components/Loading/Loading';
import { checkMenuRoles } from './components/Sider/utils';
import { menus } from './config/routes';
import { getRole, getUser } from './utils/localStorage';
import { handleRedirect } from './utils/pages';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import { ConfigProvider } from 'antd';
import id_ID from 'antd/lib/locale/id_ID';
import en_US from 'antd/lib/locale/en_US';
import { ContextTheme, useTheme } from './config/theme';

interface ILayoutProps {
  path: string;
  layout: React.ComponentType<any>;
  component: any;
  title: string;
  id: string;
  role: Array<string>;
}


const Routes: React.FC = () => {
  const { i18n } = useTranslation();
  const { theme, handleChangeTheme } = useTheme();
  moment().locale(i18n.language);
  const currentUser = getUser().name;
  const currentRole = getRole();
  const location = useLocation();

  useEffect(() => {
    // need to comment to enable dynamic routing
    const whiteListRedirectNotFound = ['/login', '/not-found'];
    const whiteListRedirectAuth = ['/auth', '/login'];
    const isRouteExist = menus.findIndex((x) => location.pathname.includes(x.path));
    if (location.pathname === '/') {
      if (currentUser) {
        handleRedirect();
      } else {
        window.location.href = '/login';
      }
    } else if (
      !currentUser &&
      isRouteExist !== -1 &&
      !whiteListRedirectNotFound.includes(location.pathname)
    ) {
      window.location.href = '/login';
    } else if (
      isRouteExist === -1 &&
      location.pathname !== '/not-found'
    ) {
      window.location.href = '/not-found';
    } else if (whiteListRedirectAuth.includes(location.pathname) && currentUser) {
      handleRedirect();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const userRoles = checkMenuRoles(currentRole);

  return (
    <ContextTheme.Provider value={{ theme, handleChangeTheme }}>
      <ConfigProvider
        componentSize="middle"
        locale={i18n.language === 'en' ? en_US : id_ID}
      >
        <Switch>
          {menus.map(
            (detail: ILayoutProps) =>
              detail.role.includes(userRoles) && (
                <Route
                  key={detail.path}
                  path={detail.path}
                  element={
                    <detail.layout {...global} title={detail.title} id={detail.id}>
                      <Suspense fallback={<Loading />}>
                        <detail.component />
                      </Suspense>
                    </detail.layout>
                  }
                />
              ),
          )}
        </Switch>
      </ConfigProvider>
    </ContextTheme.Provider>
  );
};

export default Routes;
