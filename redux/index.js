import store from './store/index.js'
import { addAction,subAction } from './store/createActions.js'
store.subscribe(()=>{
  console.log(store.getState());
})

store.dispatch(addAction(10))
store.dispatch(subAction(3))