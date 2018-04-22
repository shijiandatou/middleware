import { createStore, applyMiddleware } from "./redux";
import logger from "./logger";
import promise from "./promise";
let counter = (state=0,action)=>{
    if(action){
        switch(action.type){
            case "ADD":
                return state+1;
            case "SUB":
                return state-1;
            default:
                return state;
        }
    }else{
        return state;
    }
}

let store =  applyMiddleware(promise)(createStore)(counter);

// let store = createStore(counter);
store.dispatch(new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve({type:'ADD'})
    }, 1000);
}));