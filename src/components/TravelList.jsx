import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';


export default function TravelList(props){
    return (
        <div className="travel-tile">
            <div className="tile-img">
                <img src={`${props.imageUrl}`} />
            </div>
            <div className="tile-content">
                <div className="tile-location">
                    <div className="country">
                        <FontAwesomeIcon icon={faLocationDot} />
                        {props.location}
                    </div>
                    <a href={`${props.googleMapsUrl}`}>View on Google Maps</a>
                </div>
                <h1>{props.title}</h1>
                <h4>{props.startDate} - {props.endDate}</h4>
                <p>{props.description}</p>
            </div>
        </div>
    )
}