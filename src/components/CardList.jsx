import React from "react";
import {CardMovie} from "./CardMovie";

export class CardList extends React.Component {
    
    render() {
        const {movies = []} = this.props;
        return <div className="movies">
            { 
                movies.map(movie => <CardMovie key={movie.imdbID} movie={movie}/>)            
            }
        </div>
    }
}