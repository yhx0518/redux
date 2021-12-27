import { INCREMENT, DECREMENT } from './constant'

export const createIncrementAction = number => ({ data: number, type: INCREMENT });

export const createDecrementAction = number => ({ type: DECREMENT, data: number });

export function creatIncrementAsyncAction(number) {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(createIncrementAction(number))
        }, 500);
    }
}