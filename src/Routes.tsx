import React, { Suspense, useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Routes as Switch, useLocation } from 'react-router-dom';
import Loading from './components/Loading/Loading';
import { checkMenuRoles } from './components/Sider/utils';
import { menus } from './config/routes';
import { getRole, getUser } from './utils/localStorage';
import { handleRedirect } from './utils/pages';

interface ILayoutProps {
  path: string;
  layout: React.ComponentType<any>;
  component: any;
  title: string;
  role: Array<string>;
}

interface Props {
  currentUser?: null;
}

const Routes: React.FC<Props> = () => {
  const currentUser = getUser();
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
    <Switch>
      {menus.map(
        (detail: ILayoutProps) =>
          detail.role.includes(userRoles) && (
            <Route
              key={detail.path}
              path={detail.path}
              element={
                <detail.layout {...global} title={detail.title}>
                  <Suspense fallback={<Loading />}>
                    <detail.component />
                  </Suspense>
                </detail.layout>
              }
            />
          ),
      )}
    </Switch>
  );
};

const mapStateToProps = (state: any) => ({
  currentUser: state.auth.currentUser,
});

export default connect(mapStateToProps, null)(Routes);