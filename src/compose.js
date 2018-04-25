//compos的实现原理
function compose(...fns){
    if(fn.length===0) return arg=>arg;
    return fns.reduce((prev,next,index) => (...args)=>prev(next(next(...args))));
}
//应用中间函数
export default function applyMiddleware(...middlewares){
    return function(createStore){
        let store = createStore(reducer);
        let dispatch = store.dispatch;
        let middlewareApi = {
            dispatch:action=>dispatch(action),
            getState:store.getState
        };
        middleware=middlewares.map((middleware)=>middleware(middlewareApi));
        dispatch=compose(middleware)(dispatch);
        return{
            ...store,
            dispatch
        }
    }
}
//应用
const store = applyMiddleware(thunk,logger)(createStore)(reduce);
//中间件
const logger =store=>next=>action=>{
    console.log(store.getState());
    console.log(action);
    let result = next(action);
    console.log(store.getState());

    return result;

}