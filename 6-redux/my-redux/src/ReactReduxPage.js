/*
 * @Author: your name
 * @Date: 2021-02-17 12:41:05
 * @LastEditTime: 2021-02-17 12:58:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-kkb-prev\6-redux\my-redux\src\ReactReduxPage.js
 */
import React, { Component } from 'react';
// import store from './store/Store.js';
import { connect } from 'react-redux';

export default connect(
    // mapStateToProps
    state => ({
        num: state.num,
        handle: state.handle
    }),
    // mapDispatchToProps
    {
        add: () => ({type: 'ADD'}),
        minus: () => ({type: 'MINUS'})
    }

)(class ReactReduxPage extends Component {
    componentDidMount() {
        // store.subscribe(() => {
        //     this.forceUpdate();
        // })
    }
    render() {
        // console.log(store.getState(), 'store.getState()');
        console.log(this.props,'this.props');
        const {num,handle, dispatch, add, minus } = this.props;
        return (
            <React.Fragment>
                <h2>ReduxPage</h2>
                <p>num:{num}</p>
                <p>handle:{handle}</p>
                {/* <button onClick={() => { dispatch({ type: 'ADD' }) }}>ADD</button>
                <button onClick={() => { dispatch({ type: 'MINUS' }) }}>minus</button> */}
                <button onClick={add}>ADD</button>
                <button onClick={minus}>minus</button>
            </React.Fragment>
        )
    }
})

