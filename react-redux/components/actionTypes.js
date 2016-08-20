import fetchJsonp from 'fetch-jsonp';

//定义 默认状态
export const FETCH_NORMAL = 'FETCH_NORMAL';

//定义 FETCH_START常量及方法
export const FETCH_START = 'FETCH_START';
function fetchDataStart(remark){
    //通过dispatch方式调用，最主要是获取到type
    return (
        {
            type: FETCH_START,
            remark
        }
    );
}
//定义 FETCH_END常量及方法
export const FETCH_END = 'FETCH_END';
function fetchDataEnd(remark, json){
    return (
        {
            type: FETCH_END,
            remark,
            json: json
        }
    );
}

function fetchData(remark){
    return (dispatch) =>{
        dispatch(fetchDataStart(remark));
        return fetchJsonp('https://api.douban.com/v2/book/1220562')
            .then(response =>  response.json() )
            .then(json => dispatch(fetchDataEnd(remark, json)))
    }
}
//定义 判断方法
function shouldfetchData(state){
    if(state.loadData.loaded == FETCH_NORMAL){
        return true;
    }else{
        return false;
    };
}
//定义 fetch控制方法
export function fetchDataController(remark){
    //函数可以获取到 dispatch 发起命令方法 ， getState 获取当前state状态方法
    return (dispatch, getState) =>{
        //调用判断方法 传入当前state状态
        if(shouldfetchData(getState())){
            //发起fatchData方法
            return dispatch(fetchData(remark));
        }else{
            //停止等待
            //return Promise.resolve()
        };
    }
}