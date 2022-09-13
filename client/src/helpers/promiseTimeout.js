const promiseTimeout = ({timeout} = {}) =>{
    return new Promise((resolve,_) => setTimeout(() => resolve(), timeout));
}

export default promiseTimeout;