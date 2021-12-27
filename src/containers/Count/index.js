import countUI from '../../components/Count/index'

import {
    createIncrementAction,
    createDecrementAction,
    creatIncrementAsyncAction
} from '../../redux/count_action'

import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return { count: state }
}

const mapDispatchToProps = (dispatch) => {
    return {
        jia: number => dispatch(createIncrementAction(number)),
        jian: number => dispatch(createDecrementAction(number)),
        jiaAsync: number => dispatch(creatIncrementAsyncAction(number))
    }
}

const countcontainer = connect(mapStateToProps, mapDispatchToProps)(countUI);

export default countcontainer