import React, { Component, Fragment} from 'react'
import { Link } from 'react-router-dom'
import './footer.scss'
class footer extends Component {
    render () {
        return (
            <Fragment>
                <div className={'footer ignore'}>
                    <span><Link to={'/home'}>首页</Link></span>
                    <span><Link to={'/videohall'}>放映厅</Link></span>
                    <span><Link to={'/live'}>直播</Link></span>
                    <span><Link to={'/my'}>我的</Link></span>
                </div>
            </Fragment>
        )
    }
}
export default footer
