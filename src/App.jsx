import React from 'react';
import './App.scss';
import Footer from '@/comment/footer/footer';
import Search from '@/comment/search/search';
class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Search></Search>
                {this.props.children}
                <Footer></Footer>
            </div>
        )
    }
}

export default App;
