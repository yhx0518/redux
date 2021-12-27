import React, { Component } from "react";
import { connect } from 'react-redux'
import { createAddPerson } from '../../redux/actions/person'

class Person extends Component {

    add = () => {
        const { nameNode, ageNode } = this;
        console.log(nameNode.value, ageNode.value);
        this.props.jiaYiRen({ id: Date.now(), name: nameNode.value, age: ageNode.value })
    }

    render() {
        return (
            <div>我是Person组件，上方组件求和为{this.props.hehehhe}
                <input ref={f => this.nameNode = f} type="text" placeholder="输入名字" />
                <input ref={f => this.ageNode = f} type="text" placeholder="输入年龄" />
                <button onClick={this.add}>添加</button>
                <ul>
                    {
                        this.props.rens.map((personObj) => {
                            return <li key={personObj.id}>{personObj.name}----{personObj.age} </li>
                        })
                    }
                </ul>
            </div>

        )
    }
}

export default connect(
    state => ({
        rens: state.yiduiren,
        hehehhe: state.he
    }),
    {
        jiaYiRen: createAddPerson
    }
)(Person)