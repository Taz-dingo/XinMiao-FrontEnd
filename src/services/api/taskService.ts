import instance from '..';
import useAuthStore from "../../store/authStore"

// 获取用户信息
const storeApi = useAuthStore.getState()
const userInfo = storeApi.userInfo

/**根据userid查询主线任务taskSets */
export const getTaskSets = (params: API.getTaskSetsParams) => {
    return instance({
        url: '/get/tasksets',
        method: 'GET',
        params: {
            ...params,
            userid: userInfo.id
        }
    })
}


/**根据setid查询tasks */
export const getTasks = (params: API.getTasksParams) => {
    return instance({
        url: '/get/tasks',
        method: 'GET',
        params: {
            ...params,
            userid: userInfo.id
        }
    })
}

/**根据taskid查询任务具体信息 */
export const getTasksDetail = (params: API.getTaskDetailParams) => {
    return instance({
        url: '/get/task',
        method: 'GET',
        params: params
    })
}

/**根据userid获取所有任务坐标点 */
export const getTaskCoords = (params: API.getTaskCoordsParams) => {
    return instance({
        url: '/get/task-all',
        method: 'GET',
        params: params
    })
}

/**确定公告任务 */
export const confirmAnn = (data: API.confirmAnnData) => {
    return instance({
        url: '/task/confirm',
        method: 'POST',
        data: data
    })
}

/**进入定位点发送位置 */
export const sendLocIn = (data: API.sendLocInData) => {
    return instance({
        url: '/task/location',
        method: 'POST',
        data: data
    })
}