import React from 'react';

import './header.css';
import { Segment, Menu, Image, Header, Container, Button, Icon, Card} from 'semantic-ui-react';
import {Parallax} from 'react-materialize';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal';


//Images
import deadpool from '../../Images/deadpool.png';
import crypto from '../../Images/crypto.jpg';
import avengers from '../../Images/av1.jpg';
import jobSearch from '../../Images/jobSearch.jpg';
import imgur from '../../Images/imgur.jpg';




const avatarImage = {
  background: `url(${deadpool})`,
  backgroundPosition: '50% 45%',
  backgroundSize: 'contain'
}

const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as='h1'
      inverted
      content='Eat healthy with bhaate'
      style={{
        marginBottom: 0,
        fontSize: '4em',
        fontWeight: 'normal',
        marginTop: '2em',
        left: '26%',
        top: 0,
        position: 'absolute'
  
      }}
    >
    </Header>
  </Container>
)

const CardExampleCard = ({...props}) => (
  <Card className={props.className} >
    <Image src={props.img} size='large'/>
    <Card.Content>
      <Card.Header style={{fontFamily: `'Indie Flower', cursive`}}>
        {props.header}
      </Card.Header>
      <Card.Meta>
        <span className='date'>
          {props.year}
        </span>
      </Card.Meta>
      <Card.Description>
        {props.description}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a href={props.repo_url}  target="_blank">
        <Icon name='github' size='large'/>
        Repo
      </a>
      <a href={props.url_to}  target="_blank">
        <Icon name='desktop' size='large'/>
        Demo
      </a>
    </Card.Content>
  </Card>
)



export default class myHeader extends React.Component{
  constructor(props){
    super(props);
    this.state={
      activeItem: 'Home'
    }
    console.log('The passed props are ', this.props);
  }

  handleActiveItem = (name) => this.setState({activeItem:name})
  render(){
    const {activeItem} = this.state;
    const fixed = true;
    return(
      <div>
        
        {/*Start of parallax */}
        <div className="myParallax">
          <Parallax imageSrc={this.props.parallaxImage}/>
          <div className="outerWrapper">
            <div className="imgContainer">
              <div className="myAvatar" style={avatarImage} ></div>
            </div>
          </div>
        </div>
        {/*End of parallax */}
        {/*Fadein skill div*/}
        <Reveal left>
        <div className="skillOuter">
          <div className="Container">
            <h2>Tools that I am familiar with: </h2>
            <div className="skillCointainerWrapper">
              <div className="htmlSkills skills">
                <div className="logo">
                  <Icon name="html5" size="massive"/>
                  <div className="logoContent">
                    <p> Web pages in HTML5</p>
                  </div>
                </div>
              </div>
              <div className="reactSkills skills">
                <div className="logo">
                  <div className="reactIcon addedIcon"></div>
                  <div className="logoContent">
                    <p>Dynamic websites using React.js</p>
                  </div>
                </div>
              </div>
              <div className="pythonSkills skills">
                <div className="logo">
                  <div className="pythonIcon addedIcon"></div>
                  <div className="logoContent">
                    <p>Front-end and backend using Python</p>
                  </div>
                </div>
              </div>
              <div className="cssSkills skills">
                <div className="logo">
                  <Icon name="css3" size="massive"/>
                    <div className="logoContent">
                      <p>CSS3 and Bootstrap</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div> 
      </Reveal>
      {/* End of fadein skill div*/}


      {/*Start of the demos */}
      <div className="examples">
        <h2>Want to see what I am upto ? </h2>
        <div className="demosContainer">
          <CardExampleCard 
            header={'ReactJs'} 
            description={'Cryptocurrency tracker using react.js'}
            year={'2018'}
            img={crypto}
            className={"one"}
            url_to={'https://trackcrypto.herokuapp.com/'}
            repo_url={'https://github.com/urshala/cryptocurrency'}
          />
          <CardExampleCard 
            header={'ReactJs'}
            description={'Web application to find the jobs in Finland.'}
            year={'2017'}
            img={jobSearch}
            className="four"
            url_to={'https://duuntori.herokuapp.com/'}
            repo_url={'https://github.com/urshala/Duunitori'}
          />
          
          <CardExampleCard 
            header={'Angular'}
            description={'Web application to search and view movie info'}
            year={'2017'}
            img={avengers}
            className="three"
            url_to={'https://amazing-movies-007.firebaseapp.com/'}
            repo_url={'https://github.com/urshala/amazingMovies'}
          />
          <CardExampleCard 
            header={'Django'}
            description={'Web application to upload images'}
            year={'2017'}
            img={imgur}
            className="two"
            url_to={'http://urshala.pythonanywhere.com/imgur/'}
            repo_url={'https://bitbucket.org/urshala/imgur/src'}
          />
          
        </div>
      </div>
      {/*End of demos */}

      </div>
    )
  }
}

