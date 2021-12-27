// preState=0 形参默认值
export default function countReducers(preState = 0, action) {
    // console.log(preState, action);
    // 从action对象中获取type和data
    const { type, data } = action
    switch (type) {
        case 'increment': // 如果是加
            return preState + data;
        case 'decrement': // 如果是减
            return preState - data;

        default: // 如果是初始化
            return preState;
    }
}