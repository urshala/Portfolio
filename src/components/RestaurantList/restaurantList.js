import React from 'react';
import './restaurantList.css';
import RestaurantMap from '../RestaurantMaps/restaurantMap';
import { Card, Col, Icon ,Button} from 'react-materialize';


export default class RestaurantList extends React.Component{
	constructor(props){
		super(props);
		this.state={
			location:null,
			restaurantName: ''
		}

	}

	displayOnMap = (restaurantToDisplay) =>{
		const {location, name} = restaurantToDisplay;
		this.setState({location, restaurantName:name});
	}
	
	render(){
		const {restaurants} = this.props;
		const {location, restaurantName} = this.state;
		return(
			<div className="contentContainer">
				<div className="restaurantList">
					{restaurants.slice(0,10).map(eachRes =>
						<Col m={6} s={12} key={eachRes.id}>
						    <Card className='blue-grey darken-1' textClassName='white-text' title={eachRes.name}>
						    	<div className="details">
									<p className="payment">
										<span><Icon>euro_symbol</Icon></span>
										<span style={{verticalAlign:'super'}}> We accept {eachRes.currency}</span>
									</p>
									<p className="location">
										<span><Icon>room</Icon></span>
										<span style={{verticalAlign:'super'}}>{eachRes.localized_city_name}</span>
									</p>

									<p className="contact">
										<span><Icon>contact_phone</Icon></span>
										<span style={{verticalAlign:'super', paddingLeft:'.5rem'}}>{eachRes.phone_number}</span>
									</p>
									<Button onClick={() => this.displayOnMap(eachRes)}>Show in Map</Button>
									
						    	</div>
						    </Card>
						</Col>
					)}
				</div>

				{/*<RestaurantMap location={location} restaurantName={restaurantName}/>*/}
			</div>)
	}



}