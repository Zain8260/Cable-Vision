import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import coveragetableView from '../views/pages/coveragetable';

const AnyReactComponent = ({ text }) => <div style={{color:'red'}}>{text}</div>;

class SimpleMap extends Component {
    constructor(props){
      super(props)
        
    }
 
  static defaultProps = {
    center: {
      lat: 31.6014527,
      lng: 73.0335426
    },
    zoom: 13
  };
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      function(position) {
          if(position.coords.longitude !==null && position.coords.longitude !=undefined){
            
          }
          
        console.log(position);
      },
      function(error) {
        console.error("Error Code = " + error.code + " - " + error.message);
      }
    );
  }
  render() {
    return (
      
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
           
          bootstrapURLKeys={{ key: 'AIzaSyAF5BqQo453kVeWlt1X-1ag8DA2nb0hCD4'}}
          defaultCenter={this.props.center}
          
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={31.6014527}
            lng={73.0335426}
            
            text="Marker"
          />
        </GoogleMapReact>
       
      </div>
      
    );
  }
}

export default SimpleMap;