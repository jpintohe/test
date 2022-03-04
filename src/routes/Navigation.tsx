import { Suspense } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

import Link from './Link';

import { routes, lazyRoutes, nestedRoutes } from '../routes/routes';

import Logo from '../assets/icons/Logo';

export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <Logo />
            <ul>
              {routes.map(({ to, name }) => (
                <Link key={to} routeName={to}>
                  {name}
                </Link>
              ))}
            </ul>
          </nav>
          <Routes>
            {routes.map(({ path, component: Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
            <Route
              path="/*"
              element={<Navigate to={routes[0].to} replace />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};

export default Navigation;
