import request from '@/utils/request';
import { ArticleParamsType } from '../models/article';

/**
 * All of this api are start with article
 * @param params 
 */

export async function createArticle(params: ArticleParamsType) {
    return request('/api/article/create', {
        method: 'POST',
        data: params,
    });
}

export async function getFakeCaptcha(mobile: string) {
    return request(`/api/login/captcha?mobile=${mobile}`);
}

export async function fakeSubmitForm(params: any) {
    return request('/api/forms', {
        method: 'POST',
        data: params,
    });
}

export async function getCategoryList() {
     return request('/api/categoryList');
}

export async function getStatus() {
    return request('/api/status');
}
