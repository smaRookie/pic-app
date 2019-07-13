import React from 'react';
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import App from './App'
import Home from '@/pages/home/home'
import VideoHall from '@/pages/videoHall/videoHall'

class Iroute extends React.Component{
    render () {
        return (
            <BrowserRouter>
                <App>
                    <Route path={'/home'} exatc  component={Home}></Route>
                    <Route path={'/videohall'} exatc  component={VideoHall}></Route>
                    {/*<Redirect exatc from="/" to="/home" />*/}
                </App>
            </BrowserRouter>
        )
    }
}
export default Iroute
