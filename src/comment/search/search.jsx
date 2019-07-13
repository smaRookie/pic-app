import React, { Component, Fragment } from 'react';
import './search.scss'
class Search extends Component {
    render () {
        return (
            <Fragment>
                <div className={'search-wrap'}>
                   <i className={'iconfont icon-sousuo m-icon'}></i><input className={'search-con'} type="text"/>
                </div>
            </Fragment>
        )
    }
}
export default Search
