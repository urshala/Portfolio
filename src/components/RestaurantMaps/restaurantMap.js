/* eslint-disable no-undef */
import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import {InfoBox} from 'react-google-maps/lib/components/addons/InfoBox';



const MyMapComponent = withScriptjs(withGoogleMap(({...props}) =>{
	const {lat, lon} = props.location;
	console.log('The changed items are ', props);
	return(
	  <GoogleMap
	    defaultZoom={15}
	    center={{ lat: lat,lng: lon }}
	  >
	    {props.isMarkerShown && <Marker position={{ lat: lat,lng: lon}} />}
	    <InfoBox
		    position={new google.maps.LatLng(lat, lon )}
		    options={{ closeBoxURL: ``, enableEventPropagation: true }}
		>
		    <div style={{ backgroundColor: `yellow`, opacity: 0.75, padding: `12px` }}>
		        <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
		          {props.restaurantName}
		        </div>
		    </div>
    	</InfoBox>
	  </GoogleMap>
	  )
}
))



export default class RestaurantMap extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			location: {lat: 60.167624,lon: 24.939962},
			name:'Vietnamese Plus'
		}
	}
	componentDidMount(){
		
  }

	componentWillReceiveProps(nextProps, nextState){
		console.log('Receiving...', nextProps);
		this.setState({location: nextProps.location, name:nextProps.restaurantName})
	}

	shouldComponentUpdate(nextProps, nextState){
		if (this.props.location !== nextProps.location){
			return true;
		}return false;
	}

	render(){
		return(
			<div className="myMap">
				<MyMapComponent
  					isMarkerShown
  					location={this.state.location}
  					restaurantName={this.state.name}
					googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
					loadingElement={<div class="loadingElement" style={{ height: `100%` }} />}
				    containerElement={<div class="containerElement" style={{ height: `400px` }} />}
			    	mapElement={<div class="mapElement" style={{ height: `100%` }}/>}
				/>
			</div>
		)
	}
}