import request from '@/utils/request';

/**
 *  Get 
 */
export async function getSystemTotal(): Promise<any> {
    return request('/api/dashboard/totals');
}


export async function queryTags() {
    return request('/api/dashboard/tags');
}


export async function querySystemInfo() {
    return request('/api/dashboard/SystemInfo');
}

export async function queryServerNet() {
    
    return request('/api/dashboard/servernet');
}
