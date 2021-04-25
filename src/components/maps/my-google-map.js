// import React, { Component } from 'react';
// import { withGoogleMap, GoogleMap } from 'react-google-maps';
// import { Helmet } from 'react-helmet';


// class MyGoogleMap extends Component {
//   render() {
//     const GoogleMapExample = withGoogleMap(() => (
//       <GoogleMap
//         defaultCenter = { { lat: 33.5529929, lng: 7.640008099999999 } }
//         defaultZoom = { 13 }
//       >
//       </GoogleMap>
//     ));
//     return(
//       <>
//         <GoogleMapExample
//           containerElement={ <div style={{ height: `500px`, width: '500px' }} /> }
//           mapElement={ <div style={{ height: `100%` }} /> }
//         />
//         <Helmet>
//           <script
//             type="text/javascript"
//             src={`https://maps.googleapis.com/maps/api/js?key=${API_KEY}`}>
//           </script>
//         </Helmet>
//       </>
//     );
//   }
// };

// const API_KEY = process.env.GOOGLE_MAPS_STATIC_API_KEY;


// export default MyGoogleMap;