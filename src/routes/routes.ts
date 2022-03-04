import { lazy, LazyExoticComponent } from 'react';
// import {
//   LazyPage1,
//   LazyPage2,
//   LazyPage3
// } from '../01-lazyload/pages';

import { ShoppingPage } from '../02-component-patterns/pages';

import NoLazy from '../01-lazyload/pages/NoLazy';

type JSXElement = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  component: LazyExoticComponent<JSXElement> | JSXElement;
  name: string;
}

export const routes: Route[] = [
  {
    to: '/shopping',
    path: 'shopping',
    component: ShoppingPage,
    name: 'Shopping'
  }
  // {
  //   to: '/lazy1',
  //   path: 'lazy1',
  //   component: LazyPage1,
  //   name: 'Lazy 1'
  // },
  // {
  //   to: '/lazy2',
  //   path: 'lazy2',
  //   component: LazyPage2,
  //   name: 'Lazy 2'
  // },
  // {
  //   to: '/lazy3',
  //   path: 'lazy3',
  //   component: LazyPage3,
  //   name: 'Lazy 3'
  // }
];

const Lazy1 = lazy(() =>
  import(
    /** webpackChunkName: "LazyPage1"*/ '../01-lazyload/pages/LazyPage1'
  )
);
const Lazy2 = lazy(() =>
  import(
    /** webpackChunkName: "LazyPage2"*/ '../01-lazyload/pages/LazyPage2'
  )
);
const Lazy3 = lazy(() =>
  import(
    /** webpackChunkName: "LazyPage2"*/ '../01-lazyload/pages/LazyPage3'
  )
);

export const lazyRoutes: Route[] = [
  {
    to: '/lazy1',
    path: 'lazy1',
    component: Lazy1,
    name: 'Lazy 1'
  },
  {
    to: '/lazy2',
    path: 'lazy2',
    component: Lazy2,
    name: 'Lazy 2'
  },
  {
    to: '/lazy3',
    path: 'lazy3',
    component: Lazy3,
    name: 'Lazy 3'
  }
];

const LazyLayout = lazy(() =>
  import(
    /** webpackChunkName: "LazyLayout"*/ '../01-lazyload/layout/LazyLayout'
  )
);

export const nestedRoutes: Route[] = [
  {
    to: '/no-lazy',
    path: 'no-lazy',
    component: NoLazy,
    name: 'NoLazy'
  },
  {
    path: '/lazyload/*',
    to: '/lazyload/',
    component: LazyLayout,
    name: 'LazyLayout'
  }
];
