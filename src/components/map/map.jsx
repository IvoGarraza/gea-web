import React from "react";
import { MapContainer, TileLayer, useMap, Popup, Marker} from "react-leaflet";
import 'leaflet/dist/leaflet.css'
import '../map/map.css'
import L from 'leaflet'
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-icon.png'
import images from '../../images/images'

let iconUbicacion = new L.icon({
    iconUrl: icon,
    iconShadow: iconShadow,
    iconSize: [20,30],
    iconAnchor: [20,94],
    shadowAnchor: [20,94],
    popupAnchor: [-3,-76]
})

const Mapa =() =>{
    return(
        <MapContainer center={[-31.402247310182574, -64.18627936859298]} zoom={4} scrollWheelZoom={true} className='mapa'>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[-31.402247310182574, -64.18627936859298]} icon={iconUbicacion}>
                <Popup>
                Lugar del trabajo<br /> informacion o fotos
                </Popup>
            </Marker>
            <Marker position={[-36.87106403955744, -65.88750569392481]} icon={iconUbicacion}>
                <Popup>
                    Lugar del trabajo<br/>informacion o fotos
                </Popup>
            </Marker>
            <Marker position={[-28.051938093685493, -54.54068228389286]} icon={iconUbicacion}>
                <Popup>
                    Lugar del trabajo<br/>informacion o fotos
                </Popup>
            </Marker>
            <Marker position={[-38.453462892106685, -70.40466993768173]} icon={iconUbicacion}>
                <Popup>
                    Lugar del trabajo<br/>informacion o fotos
                </Popup>
            </Marker>
            <Marker position={[-15.552913946809023, -70.7922432574743]} icon={iconUbicacion}>
                <Popup>
                    Lugar del trabajo<br/>informacion o fotos
                </Popup>
            </Marker>
            <Marker position={[-40.51515436073113, -66.48424052954104]} icon={iconUbicacion}>
                <Popup>
                    Lugar del trabajo<br/>informacion o fotos
                </Popup>
            </Marker>
            <Marker position={[-38.17320607460343, -62.13856481444522]} icon={iconUbicacion}>
                <Popup>
                    Lugar del trabajo<br/>informacion o fotos
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default Mapa 