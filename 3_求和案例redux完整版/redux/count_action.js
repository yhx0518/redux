import { INCREMENT, DECREMENT } from './constant'

/* 
    该文件是专门用于创建Count组件的action
*/
export function createIncrementAction(number) {
    return { type: INCREMENT, data: number }
}

export function createDecrementAction(numer) {
    return { type: DECREMENT, data: numer }
}