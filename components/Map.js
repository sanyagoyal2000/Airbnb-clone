import ReactMapGL,{Marker,Popup} from 'react-map-gl';
import  { useState } from 'react';
import getCenter from "geolib/es/getCenter";
function Map({searchResults}) {
      const [selectedLocation ,setSelectedLocation]=useState({});
      const coordinates=searchResults.map((res) =>({
          longitude:res.long,
          latitude:res.lat
      }));

      const center=getCenter(coordinates);
      const [viewport, setViewport] = useState({
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 8,
        width:"100%",
        height:"100%"
      });

    return (
        
        <ReactMapGL
        {...viewport}
      mapStyle="mapbox://styles/sanyagoyal/ckua4euf02hw319noo58vlp56"
      mapboxApiAccessToken={process.env.mapbox_key}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
      
    >
        {searchResults.map((res)=>(
            <div key={res.long}>
                <Marker
                longitude={res.long}
                latitude={res.lat}
                offsetLeft={-20}
                offsetTop={-10}
                >
                    <p roll="img" onClick={()=>setSelectedLocation(res)}className="cursor-point text-2xl animate-bounce"
                    aria-label="push-pin">📌</p>

                </Marker>
                {searchResults.long===res.long ?
                (<Popup 
                onClose={()=>setSelectedLocation(res)}
                closeOnClick={true}
                ongitude={res.long}
                latitude={res.lat}
                >{res.title}</Popup>):false}

            </div>

        ))}
    </ReactMapGL>
    )
}

export default Map
