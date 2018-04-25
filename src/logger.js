//中间件
let logger = store=> next => action =>{
    console.log(store.getState());
    console.log(action);
    let result = next(action);
    console.log(store.getState());
    result;
};

export default logger;