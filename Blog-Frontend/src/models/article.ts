import { AnyAction , Reducer} from 'redux';
import { EffectsCommandMap } from 'dva';
import { message } from 'antd';
import { fakeSubmitForm, getCategoryList, getStatus } from '../services/articles';

const routerRedux: string[] = require("dva").router;

export interface StateType {
    categorys: Category[];
    Status: Status[];
}

/**
 *  下来菜单级联查询
 */
export interface Type {
    key: number;
    value: string;
    name: string;
}

export interface Category {
    key: number;
    value: string;
    name: string;
    type: Type[];
}

export interface Status {
    key: number;
    value: string;
    name: string;
}

export interface Tag {
    key: number;
    value: string;
    name: string;
}

export interface ArticleParamsType {
    title: string;
    password: string;
    tags: string[];
    description: string;
    markdown: string;
    backgroundImage: string;
    attachmentsList: string[];
    category: Category;
    status: Status;
    Tags: Tag[];
}


export type Effect = (
    action: AnyAction,
    effects: EffectsCommandMap & { select: <T>(func: (state: {}) => T) => T },
) => void;

export interface ModelType {
    namespace: string;
    state: {};
    effects: {
        fetchCategorys: Effect;
        createArticle: Effect;
        fetchStatus: Effect;
    };
    reducers: {
        queryCategorysList: Reducer<StateType>;
        queryStatusList: Reducer<StateType>;
    };
}

const Model: ModelType = {
    namespace: 'article',

    state: {},

    effects: {
        *fetchCategorys(_, { call, put }){
            const response = yield call(getCategoryList);
            yield put({
                type: 'queryCategorysList',
                payload: Array.isArray(response) ? response : [],
            });
        },
        *fetchStatus(_, { call, put }) {
            const response = yield call(getStatus);
            yield put({
                type: 'queryStatusList',
                payload: Array.isArray(response) ? response : [],
            });
        },

        *createArticle({ payload }, { call, put}) {
           const response = yield call(fakeSubmitForm, payload);
            /**
             * redirect to articles list when submit successfully
             */
            if (response.status === 'ok') {
                yield put(routerRedux.push('/articlelist/projects'));
                message.success(`提交成功${response}`);
            } else {
                message.error(`提交失败${response.status}`);
            }
        },

        
    },
    reducers: {
        queryCategorysList(state, action) {
            return {
                    // ...state,s
                categorys: action.payload,
                Status:'',
                };
        },
        queryStatusList(state, action) {
            return {
                ...state,
                list: action.payload,
            };
        },

    },

}

export default Model;
