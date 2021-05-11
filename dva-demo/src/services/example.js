import request from '../utils/request';
const url = 'https://cnodejs.org/api/v1/topics'
// export function query() {
//   return request('/api/users');
// }
export function query(){
  return request(url)
}
