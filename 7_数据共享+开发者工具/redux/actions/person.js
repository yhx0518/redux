import { ADD_PERSON } from '../constant'

// 创建加一个人的action
export const createAddPerson = personObj => ({
    type: ADD_PERSON,
    data: personObj
})