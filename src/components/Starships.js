import React, {Component} from 'react';
import map from 'lodash/map';

class Starships extends Component {
  render() {
   return (
     <div className="quake-list">
       <div className="row">
         {map(this.props.starships.results, (starship) => (
           <div className="col-sm-4" key={starship.name}>
             <div className="card" >
               <div className="card-block">
                 <h4 className="card-title">Starship: {starship.name}</h4>
                 <h6 className="card-subtitle mb-2 text-muted">Model: {starship.model}</h6>
                 <div className="specs">
                   <hr/>
                   <h6 className="card-subtitle mb-2 text-muted">Specs:</h6>
                   <p className="card-text">Manufacturer: {starship.manufacturer}</p>
                   <p className="card-text">Class: {starship.class}</p>
                   <p className="card-text">Passengers: {starship.passengers}</p>
                   <p className="card-text">Crew: {starship.crew}</p>
                   <p className="card-text">Length: {starship.length}</p>
                   <p className="card-text">Max Speed: {starship.max_atmosphering_speed}</p>
                   <p className="card-text">Cargo Capacity: {starship.cargo_capacity}</p>
                 </div>
               </div>
             </div>
           </div>
         ))}
       </div>
     </div>
   );
 }
}

export default Starships
