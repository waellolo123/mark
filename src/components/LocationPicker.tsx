import { Loader } from "@googlemaps/js-api-loader";
import { useEffect } from "react";

export default function LocationPicker(){

  async function loadMap(){
    const loader = new Loader({
      apiKey: "",
    });
    const {Map} = await loader.importLibrary('maps');
    const {AdvancedMarkerElement} = await loader.importLibrary('marker');
    const map = new Map(document.getElementById('map'), {
      mapId: 'map',
      center: {lat: 0, lng: 0},
      zoom: 4
    });
    const pin = new AdvancedMarkerElement({
      map,
      position: {lat: 0, lng: 0}
    });
    
  }

  useEffect(()=>{
    loadMap();
  },[])

  return (
    <>
     <div className="" id="map"></div>
    </>
  )
}