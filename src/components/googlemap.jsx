import React, {Component} from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

export class GoogleMapBlock extends Component {

    render() {
        return (
            <Map google={this.props.google} 
                zoom={15}
                initialCenter={{
                    lat: -37.74953313209873,
                    lng: 175.29490357229705
                }}   
            >
    
                <Marker name={'KOKORO SUSHI'} title={'KOKORO SUSHI'} />
        
            </Map>
        );
    }
  }


  GoogleMapBlock = GoogleApiWrapper({
    apiKey: ("AIzaSyABLW3-n9piDi5CGAkF63Eo5DcdqinYl5w")
  })(GoogleMapBlock)

  export default GoogleMapBlock;