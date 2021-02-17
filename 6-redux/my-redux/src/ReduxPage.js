/*
 * @Author: your name
 * @Date: 2021-02-17 00:13:50
 * @LastEditTime: 2021-02-17 11:53:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-kkb-prev\6-redux\my-redux\src\ReduxPage.js
 */
import React, {Component} from 'react';
import store from './store/Store.js';

class ReduxPage extends Component{
    componentDidMount(){
        store.subscribe(()=>{
            this.forceUpdate();
        })
    }
    render(){
        console.log(store.getState(),'store.getState()');
        return (
            <React.Fragment>
                <h2>ReduxPage</h2>
                <p>num:{store.getState().num}</p>
                <p>handle:{store.getState().handle}</p>
                <button onClick={()=>{store.dispatch({type:'ADD'})}}>ADD</button>
                <button onClick={()=>{store.dispatch({type:'MINUS'})}}>minus</button>
            </React.Fragment>
        )
    }
}

export default ReduxPage