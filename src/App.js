import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header, {MoreProjects} from './components/Header';
import Footer from './components/Footer';

import imgurs from './Images/thumb2.png';
import grumpyCat from './Images/thumb.png';


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      isLoaded:false,
      deviceWidth:0
    }
  }

  //simulate the loading ...
  componentDidMount(){
    setTimeout(()=> {
      const deviceWidth = parseInt(window.screen.width);
      this.setState({isLoaded:!this.state.isLoaded, deviceWidth});
    }, 2000);
    
  }


  render() {
    const {deviceWidth} = this.state;
    return (
      <div className='App'>
          {/*<RestaurantList restaurants={restaurants}/>*/}
          {this.state.isLoaded ?
            <div>
              <Header parallaxImage={deviceWidth > 1400 ? imgurs : grumpyCat}/>
              <MoreProjects/>
              <Footer/>
            </div>
            : 
            <div className="wrapper">
              <div className="loader" ></div>
            </div>
          }
          
          
      </div>
    );
  }
}

export default App;
