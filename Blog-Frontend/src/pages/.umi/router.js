import React from 'react';
import {
  Router as DefaultRouter,
  Route,
  Switch,
  StaticRouter,
} from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/lib/renderRoutes';
import history from '@@/history';
import RendererWrapper0 from '/Users/wangjinhu/.Trash/Blog-Frontend/src/pages/.umi/LocaleWrapper.jsx';
import { routerRedux, dynamic as _dvaDynamic } from 'dva';

const Router = routerRedux.ConnectedRouter;

const routes = [
  {
    path: '/',
    component: __IS_BROWSER
      ? _dvaDynamic({
          component: () =>
            import(/* webpackChunkName: "layouts__BlankLayout" */ '../../layouts/BlankLayout'),
          LoadingComponent: require('/Users/wangjinhu/.Trash/Blog-Frontend/src/components/PageLoading/index')
            .default,
        })
      : require('../../layouts/BlankLayout').default,
    routes: [
      {
        path: '/user',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "layouts__UserLayout" */ '../../layouts/UserLayout'),
              LoadingComponent: require('/Users/wangjinhu/.Trash/Blog-Frontend/src/components/PageLoading/index')
                .default,
            })
          : require('../../layouts/UserLayout').default,
        routes: [
          {
            path: '/user',
            redirect: '/user/login',
            exact: true,
          },
          {
            name: 'login',
            icon: 'smile',
            path: '/user/login',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  app: require('@tmp/dva').getApp(),
                  models: () => [
                    import(/* webpackChunkName: 'p__user__login__model.ts' */ '/Users/wangjinhu/.Trash/Blog-Frontend/src/pages/user/login/model.ts').then(
                      m => {
                        return { namespace: 'model', ...m.default };
                      },
                    ),
                  ],
                  component: () =>
                    import(/* webpackChunkName: "p__user__login" */ '../user/login'),
                  LoadingComponent: require('/Users/wangjinhu/.Trash/Blog-Frontend/src/components/PageLoading/index')
                    .default,
                })
              : require('../user/login').default,
            exact: true,
          },
          {
            name: 'register-result',
            icon: 'smile',
            path: '/user/register-result',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__user__register-result" */ '../user/register-result'),
                  LoadingComponent: require('/Users/wangjinhu/.Trash/Blog-Frontend/src/components/PageLoading/index')
                    .default,
                })
              : require('../user/register-result').default,
            hideInMenu: true,
            exact: true,
          },
          {
            name: 'register',
            icon: 'smile',
            path: '/user/register',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  app: require('@tmp/dva').getApp(),
                  models: () => [
                    import(/* webpackChunkName: 'p__user__register__model.ts' */ '/Users/wangjinhu/.Trash/Blog-Frontend/src/pages/user/register/model.ts').then(
                      m => {
                        return { namespace: 'model', ...m.default };
                      },
                    ),
                  ],
                  component: () =>
                    import(/* webpackChunkName: "p__user__register" */ '../user/register'),
                  LoadingComponent: require('/Users/wangjinhu/.Trash/Blog-Frontend/src/components/PageLoading/index')
                    .default,
                })
              : require('../user/register').default,
            hideInMenu: true,
            exact: true,
          },
          {
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__404" */ '../404'),
                  LoadingComponent: require('/Users/wangjinhu/.Trash/Blog-Frontend/src/components/PageLoading/index')
                    .default,
                })
              : require('../404').default,
            exact: true,
          },
          {
            component: () =>
              React.createElement(
                require('/Users/wangjinhu/.Trash/Blog-Frontend/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: true },
              ),
          },
        ],
      },
      {
        path: '/',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "layouts__BasicLayout" */ '../../layouts/BasicLayout'),
              LoadingComponent: require('/Users/wangjinhu/.Trash/Blog-Frontend/src/components/PageLoading/index')
                .default,
            })
          : require('../../layouts/BasicLayout').default,
        Routes: [require('../Authorized').default],
        authority: ['admin', 'user'],
        routes: [
          {
            path: '/dashboard',
            name: 'dashboard',
            icon: 'dashboard',
            routes: [
              {
                name: 'workplace',
                icon: 'smile',
                path: '/dashboard/workplace',
                component: __IS_BROWSER
                  ? _dvaDynamic({
                      app: require('@tmp/dva').getApp(),
                      models: () => [
                        import(/* webpackChunkName: 'p__dashboard__workplace__model.ts' */ '/Users/wangjinhu/.Trash/Blog-Frontend/src/pages/dashboard/workplace/model.ts').then(
                          m => {
                            return { namespace: 'model', ...m.default };
                          },
                        ),
                      ],
                      component: () =>
                        import(/* webpackChunkName: "layouts__BasicLayout" */ '../dashboard/workplace'),
                      LoadingComponent: require('/Users/wangjinhu/.Trash/Blog-Frontend/src/components/PageLoading/index')
                        .default,
                    })
                  : require('../dashboard/workplace').default,
                exact: true,
              },
              {
                name: 'analysis',
                icon: 'smile',
                path: '/dashboard/analysis',
                component: __IS_BROWSER
                  ? _dvaDynamic({
                      app: require('@tmp/dva').getApp(),
                      models: () => [
                        import(/* webpackChunkName: 'p__dashboard__analysis__model.tsx' */ '/Users/wangjinhu/.Trash/Blog-Frontend/src/pages/dashboard/analysis/model.tsx').then(
                          m => {
                            return { namespace: 'model', ...m.default };
                          },
                        ),
                      ],
                      component: () =>
                        import(/* webpackChunkName: "layouts__BasicLayout" */ '../dashboard/analysis'),
                      LoadingComponent: require('/Users/wangjinhu/.Trash/Blog-Frontend/src/components/PageLoading/index')
                        .default,
                    })
                  : require('../dashboard/analysis').default,
                exact: true,
              },
              {
                name: 'monitor',
                icon: 'smile',
                path: '/dashboard/monitor',
                component: __IS_BROWSER
                  ? _dvaDynamic({
                      app: require('@tmp/dva').getApp(),
                      models: () => [
                        import(/* webpackChunkName: 'p__dashboard__monitor__model.ts' */ '/Users/wangjinhu/.Trash/Blog-Frontend/src/pages/dashboard/monitor/model.ts').then(
                          m => {
                            return { namespace: 'model', ...m.default };
                          },
                        ),
                      ],
                      component: () =>
                        import(/* webpackChunkName: "layouts__BasicLayout" */ '../dashboard/monitor'),
                      LoadingComponent: require('/Users/wangjinhu/.Trash/Blog-Frontend/src/components/PageLoading/index')
                        .default,
                    })
                  : require('../dashboard/monitor').default,
                exact: true,
              },
              {
                component: () =>
                  React.createElement(
                    require('/Users/wangjinhu/.Trash/Blog-Frontend/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                      .default,
                    { pagesPath: 'src/pages', hasRoutesInConfig: true },
                  ),
              },
            ],
          },
          {
            path: '/article',
            icon: 'form',
            name: 'article',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__article" */ '../article'),
                  LoadingComponent: require('/Users/wangjinhu/.Trash/Blog-Frontend/src/components/PageLoading/index')
                    .default,
                })
              : require('../article').default,
            hideInMenu: true,
            exact: true,
          },
          {
            path: '/articlelist',
            icon: 'form',
            name: 'articlelist',
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__articlelist" */ '../articlelist'),
                  LoadingComponent: require('/Users/wangjinhu/.Trash/Blog-Frontend/src/components/PageLoading/index')
                    .default,
                })
              : require('../articlelist').default,
            hideChildrenInMenu: true,
            routes: [
              {
                path: '/articlelist',
                redirect: '/articlelist/projects',
                exact: true,
              },
              {
                name: 'projects',
                icon: 'smile',
                path: '/articlelist/projects',
                component: __IS_BROWSER
                  ? _dvaDynamic({
                      app: require('@tmp/dva').getApp(),
                      models: () => [
                        import(/* webpackChunkName: 'p__articlelist__projects__model.ts' */ '/Users/wangjinhu/.Trash/Blog-Frontend/src/pages/articlelist/projects/model.ts').then(
                          m => {
                            return { namespace: 'model', ...m.default };
                          },
                        ),
                      ],
                      component: () =>
                        import(/* webpackChunkName: "p__articlelist" */ '../articlelist/projects'),
                      LoadingComponent: require('/Users/wangjinhu/.Trash/Blog-Frontend/src/components/PageLoading/index')
                        .default,
                    })
                  : require('../articlelist/projects').default,
                exact: true,
              },
              {
                name: 'articles',
                icon: 'smile',
                path: '/articlelist/articles',
                component: __IS_BROWSER
                  ? _dvaDynamic({
                      app: require('@tmp/dva').getApp(),
                      models: () => [
                        import(/* webpackChunkName: 'p__articlelist__articles__model.ts' */ '/Users/wangjinhu/.Trash/Blog-Frontend/src/pages/articlelist/articles/model.ts').then(
                          m => {
                            return { namespace: 'model', ...m.default };
                          },
                        ),
                      ],
                      component: () =>
                        import(/* webpackChunkName: "p__articlelist" */ '../articlelist/articles'),
                      LoadingComponent: require('/Users/wangjinhu/.Trash/Blog-Frontend/src/components/PageLoading/index')
                        .default,
                    })
                  : require('../articlelist/articles').default,
                exact: true,
              },
              {
                name: 'applications',
                path: '/articlelist/applications',
                component: __IS_BROWSER
                  ? _dvaDynamic({
                      app: require('@tmp/dva').getApp(),
                      models: () => [
                        import(/* webpackChunkName: 'p__articlelist__applications__model.ts' */ '/Users/wangjinhu/.Trash/Blog-Frontend/src/pages/articlelist/applications/model.ts').then(
                          m => {
                            return { namespace: 'model', ...m.default };
                          },
                        ),
                      ],
                      component: () =>
                        import(/* webpackChunkName: "p__articlelist" */ '../articlelist/applications'),
                      LoadingComponent: require('/Users/wangjinhu/.Trash/Blog-Frontend/src/components/PageLoading/index')
                        .default,
                    })
                  : require('../articlelist/applications').default,
                hideInMenu: true,
                exact: true,
              },
              {
                component: () =>
                  React.createElement(
                    require('/Users/wangjinhu/.Trash/Blog-Frontend/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                      .default,
                    { pagesPath: 'src/pages', hasRoutesInConfig: true },
                  ),
              },
            ],
          },
          {
            path: '/list',
            icon: 'table',
            name: 'list',
            routes: [
              {
                path: '/list/search',
                name: 'search-list',
                component: __IS_BROWSER
                  ? _dvaDynamic({
                      component: () =>
                        import(/* webpackChunkName: "layouts__BasicLayout" */ '../list/search'),
                      LoadingComponent: require('/Users/wangjinhu/.Trash/Blog-Frontend/src/components/PageLoading/index')
                        .default,
                    })
                  : require('../list/search').default,
                routes: [
                  {
                    path: '/list/search',
                    redirect: '/list/search/articles',
                    exact: true,
                  },
                  {
                    name: 'articles',
                    icon: 'smile',
                    path: '/list/search/articles',
                    component: __IS_BROWSER
                      ? _dvaDynamic({
                          app: require('@tmp/dva').getApp(),
                          models: () => [
                            import(/* webpackChunkName: 'p__list__search__articles__model.ts' */ '/Users/wangjinhu/.Trash/Blog-Frontend/src/pages/list/search/articles/model.ts').then(
                              m => {
                                return { namespace: 'model', ...m.default };
                              },
                            ),
                          ],
                          component: () =>
                            import(/* webpackChunkName: "layouts__BasicLayout" */ '../list/search/articles'),
                          LoadingComponent: require('/Users/wangjinhu/.Trash/Blog-Frontend/src/components/PageLoading/index')
                            .default,
                        })
                      : require('../list/search/articles').default,
                    hideInMenu: true,
                    exact: true,
                  },
                  {
                    name: 'applications',
                    icon: 'smile',
                    path: '/list/search/applications',
                    component: __IS_BROWSER
                      ? _dvaDynamic({
                          app: require('@tmp/dva').getApp(),
                          models: () => [
                            import(/* webpackChunkName: 'p__list__search__applications__model.ts' */ '/Users/wangjinhu/.Trash/Blog-Frontend/src/pages/list/search/applications/model.ts').then(
                              m => {
                                return { namespace: 'model', ...m.default };
                              },
                            ),
                          ],
                          component: () =>
                            import(/* webpackChunkName: "layouts__BasicLayout" */ '../list/search/applications'),
                          LoadingComponent: require('/Users/wangjinhu/.Trash/Blog-Frontend/src/components/PageLoading/index')
                            .default,
                        })
                      : require('../list/search/applications').default,
                    hideInMenu: true,
                    exact: true,
                  },
                  {
                    component: () =>
                      React.createElement(
                        require('/Users/wangjinhu/.Trash/Blog-Frontend/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                          .default,
                        { pagesPath: 'src/pages', hasRoutesInConfig: true },
                      ),
                  },
                ],
              },
              {
                name: 'table-list',
                icon: 'smile',
                path: '/list/table-list',
                component: __IS_BROWSER
                  ? _dvaDynamic({
                      component: () =>
                        import(/* webpackChunkName: "layouts__BasicLayout" */ '../list/table-list'),
                      LoadingComponent: require('/Users/wangjinhu/.Trash/Blog-Frontend/src/components/PageLoading/index')
                        .default,
                    })
                  : require('../list/table-list').default,
                exact: true,
              },
              {
                name: 'basic-list',
                icon: 'smile',
                path: '/list/basic-list',
                component: __IS_BROWSER
                  ? _dvaDynamic({
                      app: require('@tmp/dva').getApp(),
                      models: () => [
                        import(/* webpackChunkName: 'p__list__basic-list__model.ts' */ '/Users/wangjinhu/.Trash/Blog-Frontend/src/pages/list/basic-list/model.ts').then(
                          m => {
                            return { namespace: 'model', ...m.default };
                          },
                        ),
                      ],
                      component: () =>
                        import(/* webpackChunkName: "layouts__BasicLayout" */ '../list/basic-list'),
                      LoadingComponent: require('/Users/wangjinhu/.Trash/Blog-Frontend/src/components/PageLoading/index')
                        .default,
                    })
                  : require('../list/basic-list').default,
                exact: true,
              },
              {
                name: 'card-list',
                icon: 'smile',
                path: '/list/card-list',
                component: __IS_BROWSER
                  ? _dvaDynamic({
                      app: require('@tmp/dva').getApp(),
                      models: () => [
                        import(/* webpackChunkName: 'p__list__card-list__model.ts' */ '/Users/wangjinhu/.Trash/Blog-Frontend/src/pages/list/card-list/model.ts').then(
                          m => {
                            return { namespace: 'model', ...m.default };
                          },
                        ),
                      ],
                      component: () =>
                        import(/* webpackChunkName: "layouts__BasicLayout" */ '../list/card-list'),
                      LoadingComponent: require('/Users/wangjinhu/.Trash/Blog-Frontend/src/components/PageLoading/index')
                        .default,
                    })
                  : require('../list/card-list').default,
                exact: true,
              },
              {
                component: () =>
                  React.createElement(
                    require('/Users/wangjinhu/.Trash/Blog-Frontend/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                      .default,
                    { pagesPath: 'src/pages', hasRoutesInConfig: true },
                  ),
              },
            ],
          },
          {
            path: '/profile',
            name: 'profile',
            icon: 'profile',
            routes: [
              {
                name: 'basic',
                icon: 'smile',
                path: '/profile/basic',
                component: __IS_BROWSER
                  ? _dvaDynamic({
                      app: require('@tmp/dva').getApp(),
                      models: () => [
                        import(/* webpackChunkName: 'p__profile__basic__model.ts' */ '/Users/wangjinhu/.Trash/Blog-Frontend/src/pages/profile/basic/model.ts').then(
                          m => {
                            return { namespace: 'model', ...m.default };
                          },
                        ),
                      ],
                      component: () =>
                        import(/* webpackChunkName: "layouts__BasicLayout" */ '../profile/basic'),
                      LoadingComponent: require('/Users/wangjinhu/.Trash/Blog-Frontend/src/components/PageLoading/index')
                        .default,
                    })
                  : require('../profile/basic').default,
                exact: true,
              },
              {
                name: 'advanced',
                icon: 'smile',
                path: '/profile/advanced',
                component: __IS_BROWSER
                  ? _dvaDynamic({
                      app: require('@tmp/dva').getApp(),
                      models: () => [
                        import(/* webpackChunkName: 'p__profile__advanced__model.ts' */ '/Users/wangjinhu/.Trash/Blog-Frontend/src/pages/profile/advanced/model.ts').then(
                          m => {
                            return { namespace: 'model', ...m.default };
                          },
                        ),
                      ],
                      component: () =>
                        import(/* webpackChunkName: "layouts__BasicLayout" */ '../profile/advanced'),
                      LoadingComponent: require('/Users/wangjinhu/.Trash/Blog-Frontend/src/components/PageLoading/index')
                        .default,
                    })
                  : require('../profile/advanced').default,
                exact: true,
              },
              {
                component: () =>
                  React.createElement(
                    require('/Users/wangjinhu/.Trash/Blog-Frontend/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                      .default,
                    { pagesPath: 'src/pages', hasRoutesInConfig: true },
                  ),
              },
            ],
          },
          {
            name: 'result',
            icon: 'CheckCircleOutlined',
            path: '/result',
            routes: [
              {
                name: 'success',
                icon: 'smile',
                path: '/result/success',
                component: __IS_BROWSER
                  ? _dvaDynamic({
                      component: () =>
                        import(/* webpackChunkName: "layouts__BasicLayout" */ '../result/success'),
                      LoadingComponent: require('/Users/wangjinhu/.Trash/Blog-Frontend/src/components/PageLoading/index')
                        .default,
                    })
                  : require('../result/success').default,
                exact: true,
              },
              {
                name: 'fail',
                icon: 'smile',
                path: '/result/fail',
                component: __IS_BROWSER
                  ? _dvaDynamic({
                      component: () =>
                        import(/* webpackChunkName: "layouts__BasicLayout" */ '../result/fail'),
                      LoadingComponent: require('/Users/wangjinhu/.Trash/Blog-Frontend/src/components/PageLoading/index')
                        .default,
                    })
                  : require('../result/fail').default,
                exact: true,
              },
              {
                component: () =>
                  React.createElement(
                    require('/Users/wangjinhu/.Trash/Blog-Frontend/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                      .default,
                    { pagesPath: 'src/pages', hasRoutesInConfig: true },
                  ),
              },
            ],
          },
          {
            name: 'account',
            icon: 'user',
            path: '/account',
            routes: [
              {
                name: 'center',
                icon: 'smile',
                path: '/account/center',
                component: __IS_BROWSER
                  ? _dvaDynamic({
                      app: require('@tmp/dva').getApp(),
                      models: () => [
                        import(/* webpackChunkName: 'p__account__center__model.ts' */ '/Users/wangjinhu/.Trash/Blog-Frontend/src/pages/account/center/model.ts').then(
                          m => {
                            return { namespace: 'model', ...m.default };
                          },
                        ),
                      ],
                      component: () =>
                        import(/* webpackChunkName: "layouts__BasicLayout" */ '../account/center'),
                      LoadingComponent: require('/Users/wangjinhu/.Trash/Blog-Frontend/src/components/PageLoading/index')
                        .default,
                    })
                  : require('../account/center').default,
                exact: true,
              },
              {
                name: 'settings',
                icon: 'smile',
                path: '/account/settings',
                component: __IS_BROWSER
                  ? _dvaDynamic({
                      app: require('@tmp/dva').getApp(),
                      models: () => [
                        import(/* webpackChunkName: 'p__account__settings__model.ts' */ '/Users/wangjinhu/.Trash/Blog-Frontend/src/pages/account/settings/model.ts').then(
                          m => {
                            return { namespace: 'model', ...m.default };
                          },
                        ),
                      ],
                      component: () =>
                        import(/* webpackChunkName: "layouts__BasicLayout" */ '../account/settings'),
                      LoadingComponent: require('/Users/wangjinhu/.Trash/Blog-Frontend/src/components/PageLoading/index')
                        .default,
                    })
                  : require('../account/settings').default,
                exact: true,
              },
              {
                component: () =>
                  React.createElement(
                    require('/Users/wangjinhu/.Trash/Blog-Frontend/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                      .default,
                    { pagesPath: 'src/pages', hasRoutesInConfig: true },
                  ),
              },
            ],
          },
          {
            name: 'editor',
            icon: 'highlight',
            path: '/editor',
            routes: [
              {
                name: 'flow',
                icon: 'smile',
                path: '/editor/flow',
                component: __IS_BROWSER
                  ? _dvaDynamic({
                      component: () =>
                        import(/* webpackChunkName: "layouts__BasicLayout" */ '../editor/flow'),
                      LoadingComponent: require('/Users/wangjinhu/.Trash/Blog-Frontend/src/components/PageLoading/index')
                        .default,
                    })
                  : require('../editor/flow').default,
                exact: true,
              },
              {
                name: 'mind',
                icon: 'smile',
                path: '/editor/mind',
                component: __IS_BROWSER
                  ? _dvaDynamic({
                      component: () =>
                        import(/* webpackChunkName: "layouts__BasicLayout" */ '../editor/mind'),
                      LoadingComponent: require('/Users/wangjinhu/.Trash/Blog-Frontend/src/components/PageLoading/index')
                        .default,
                    })
                  : require('../editor/mind').default,
                exact: true,
              },
              {
                name: 'koni',
                icon: 'smile',
                path: '/editor/koni',
                component: __IS_BROWSER
                  ? _dvaDynamic({
                      component: () =>
                        import(/* webpackChunkName: "layouts__BasicLayout" */ '../editor/koni'),
                      LoadingComponent: require('/Users/wangjinhu/.Trash/Blog-Frontend/src/components/PageLoading/index')
                        .default,
                    })
                  : require('../editor/koni').default,
                exact: true,
              },
              {
                component: () =>
                  React.createElement(
                    require('/Users/wangjinhu/.Trash/Blog-Frontend/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                      .default,
                    { pagesPath: 'src/pages', hasRoutesInConfig: true },
                  ),
              },
            ],
          },
          {
            path: '/',
            redirect: '/dashboard/monitor',
            authority: ['admin', 'user'],
            exact: true,
          },
          {
            component: __IS_BROWSER
              ? _dvaDynamic({
                  component: () =>
                    import(/* webpackChunkName: "p__404" */ '../404'),
                  LoadingComponent: require('/Users/wangjinhu/.Trash/Blog-Frontend/src/components/PageLoading/index')
                    .default,
                })
              : require('../404').default,
            exact: true,
          },
          {
            component: () =>
              React.createElement(
                require('/Users/wangjinhu/.Trash/Blog-Frontend/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: true },
              ),
          },
        ],
      },
      {
        component: () =>
          React.createElement(
            require('/Users/wangjinhu/.Trash/Blog-Frontend/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/pages', hasRoutesInConfig: true },
          ),
      },
    ],
  },
  {
    component: () =>
      React.createElement(
        require('/Users/wangjinhu/.Trash/Blog-Frontend/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
          .default,
        { pagesPath: 'src/pages', hasRoutesInConfig: true },
      ),
  },
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

export { routes };

export default class RouterWrapper extends React.Component {
  unListen() {}

  constructor(props) {
    super(props);

    // route change handler
    function routeChangeHandler(location, action) {
      plugins.applyForEach('onRouteChange', {
        initialValue: {
          routes,
          location,
          action,
        },
      });
    }
    this.unListen = history.listen(routeChangeHandler);
    // dva 中 history.listen 会初始执行一次
    // 这里排除掉 dva 的场景，可以避免 onRouteChange 在启用 dva 后的初始加载时被多执行一次
    const isDva =
      history.listen
        .toString()
        .indexOf('callback(history.location, history.action)') > -1;
    if (!isDva) {
      routeChangeHandler(history.location);
    }
  }

  componentWillUnmount() {
    this.unListen();
  }

  render() {
    const props = this.props || {};
    return (
      <RendererWrapper0>
        <Router history={history}>{renderRoutes(routes, props)}</Router>
      </RendererWrapper0>
    );
  }
}
