import { query } from '../services/example'
export default {
  namespace: 'indexTest',
  state: {
    name: 'swj',
    list: []
  },
  reducers:{
    setName(state,payLoad){
      // console.log(payLoad);
      let _state = JSON.parse(JSON.stringify(state))
      _state.name = payLoad.data.name
      return _state
    },
    setList(state,payLoad){
      let _state = JSON.parse(JSON.stringify(state))
      _state.list = payLoad.data.list
      return _state
    }
  },
  effects:{
    *setNameAsync({ payLoad },{ put,call }){
      yield put({
        type: 'setName',
        data:{
          name:'qxf'
        }
      })
      // yield console.log('run');
    },
    *testCnode({ payLoad },{ put,call }){
      let res = yield call(query)
      if(res.data){
        console.log(res.data.data);
        yield put({
          type: 'setList',
          data: {
            list:res.data.data
          }
        })
      }
    }
  },
  subscriptions:{
    historySub({dispath,history}){
      history.listen(pathName=>{
        console.log(pathName);
      })
    }
  }
}