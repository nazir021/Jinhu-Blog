import request from '@/utils/request';
import { UserRegisterParams } from './index';

export async function fakeRegister(params: UserRegisterParams) {
  console.log(`params${params}`)
  return request('/api/register', {
    method: 'POST',
    data: params,
  });
}
