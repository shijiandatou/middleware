
let isPromise = obj=>obj.then;
let promist = store => next => action =>{
    if(isPromise(next)){
        return next.then((data)=>next(data))
    }
    return next(action);
}

export default promist;