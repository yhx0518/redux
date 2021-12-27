/*
    该文件是整个redux中最为核心的store对象
    */

// 引入createStore，用于创建store对象
import { createStore } from 'redux'
// 引入为Count组件服务的reducer，用于：初始化状态，加工状态
import countReducer from './count_reducers'

// 调用 createStore 创建store，注意：要传入为store服务的reducer
export default createStore(countReducer);