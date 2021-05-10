const redux = require('redux')
// 初始化数据
const initialState = {
  counter: 0
}
// reducer
function reducer(state = initialState, action) {
  switch (action.type) {
    case "+":
      return { ...state, counter: state.counter + 1 }
      break;
    case "-":
      return { ...state, counter: state.counter - 1 }
      break;
    case "+N":
      return { ...state, counter: state.counter + action.num }
      break;
    case "-N":
      return { ...state, counter: state.counter - action.num }
      break;
    default:
      return state
      break;
  }
}
// 创建store
const store = redux.createStore(reducer)
// 订阅修改
store.subscribe(()=>{
  console.log('改变',store.getState().counter);
})
// action
const action1 = { type: '+' }
const action2 = { type: '-' }
const action3 = { type: '+N', num: 8 }
const action4 = { type: '-N', num: 6 }
// 触发action
store.dispatch(action1)
store.dispatch(action2)
store.dispatch(action3)
store.dispatch(action4)