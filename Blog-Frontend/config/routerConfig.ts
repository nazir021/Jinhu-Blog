export default [
    {
        path: '/',
        component: '../layouts/BlankLayout',
        routes: [
            {
                path: '/user',
                component: '../layouts/UserLayout',
                routes: [
                    {
                        path: '/user',
                        redirect: '/user/login',
                    },
                    {
                        name: 'login',
                        icon: 'smile',
                        path: '/user/login',
                        component: './user/login',
                    },
                    {
                        name: 'register-result',
                        icon: 'smile',
                        path: '/user/register-result',
                        component: './user/register-result',
                        hideInMenu:true,
                    },
                    {
                        name: 'register',
                        icon: 'smile',
                        path: '/user/register',
                        component: './user/register',
                        hideInMenu:true,
                    },
                    {
                        component: '404',
                    },
                ],
            },
            {
                path: '/',
                component: '../layouts/BasicLayout',
                Routes: ['src/pages/Authorized'],
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
                                component: './dashboard/workplace',
                            },
                            {
                                name: 'analysis',
                                icon: 'smile',
                                path: '/dashboard/analysis',
                                component: './dashboard/analysis',
                            },
                            {
                                name: 'monitor',
                                icon: 'smile',
                                path: '/dashboard/monitor',
                                component: './dashboard/monitor',
                            },
                        ],
                    },
                    {
                        path: '/article',
                        icon: 'form',
                        name: 'article',
                        component: './article',
                        hideInMenu: true,
                    },
                    {
                        path: '/articlelist',
                        icon: 'form',
                        name: 'articlelist',
                        component: './articlelist',
                        hideChildrenInMenu: true,
                        routes: [
                            {
                                path: '/articlelist',
                                redirect: '/articlelist/projects',
                            },
                            {
                                name: 'projects',
                                icon: 'smile',
                                path: '/articlelist/projects',
                                component: './articlelist/projects',
                            },
                            {
                                name: 'articles',
                                icon: 'smile',
                                path: '/articlelist/articles',
                                component: './articlelist/articles',
                            },
                            {
                                name: 'applications',
                                path: '/articlelist/applications',
                                component: './articlelist/applications',
                                hideInMenu: true,
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
                                component: './list/search',
                                routes: [
                                    {
                                        path: '/list/search',
                                        redirect: '/list/search/articles',
                                    },
                                    {
                                        name: 'articles',
                                        icon: 'smile',
                                        path: '/list/search/articles',
                                        component: './list/search/articles',
                                        hideInMenu: true,
                                    },
                                    {
                                        name: 'applications',
                                        icon: 'smile',
                                        path: '/list/search/applications',
                                        component: './list/search/applications',
                                        hideInMenu: true,
                                    },
                                ],
                            },
                            {
                                name: 'table-list',
                                icon: 'smile',
                                path: '/list/table-list',
                                component: './list/table-list',
                            },
                            {
                                name: 'basic-list',
                                icon: 'smile',
                                path: '/list/basic-list',
                                component: './list/basic-list',
                            },
                            {
                                name: 'card-list',
                                icon: 'smile',
                                path: '/list/card-list',
                                component: './list/card-list',
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
                                component: './profile/basic',
                            },
                            {
                                name: 'advanced',
                                icon: 'smile',
                                path: '/profile/advanced',
                                component: './profile/advanced',
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
                                component: './result/success',
                            },
                            {
                                name: 'fail',
                                icon: 'smile',
                                path: '/result/fail',
                                component: './result/fail',
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
                                component: './account/center',
                            },
                            {
                                name: 'settings',
                                icon: 'smile',
                                path: '/account/settings',
                                component: './account/settings',
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
                                component: './editor/flow',
                            },
                            {
                                name: 'mind',
                                icon: 'smile',
                                path: '/editor/mind',
                                component: './editor/mind',
                            },
                            {
                                name: 'koni',
                                icon: 'smile',
                                path: '/editor/koni',
                                component: './editor/koni',
                            },
                        ],
                    },
                    // 下面的都是全局隐藏标签
                    
                    {
                        path: '/',
                        redirect: '/dashboard/monitor',
                        authority: ['admin', 'user'],
                    },
                    {
                        component: '404',
                    },
                ],
            },
        ],
    },
]