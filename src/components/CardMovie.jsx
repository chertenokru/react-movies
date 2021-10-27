export function CardMovie(props) {
    const {Poster, Title, Type, Year, imdbID} = props.movie;
    return <>
        <div className="card horizontal hoverable movie activator">
            <div className="card-image">
                {Poster === 'N/A' ?
                    <img alt={Title} src={`https://via.placeholder.com/300x400.png?text=${Title}`}/>
                    : <img alt={Title} src={Poster}/>}
            </div>
            <div className="card-stacked">
                <div className="card-content">
                    <p>
                        <span className="green-text text-darken-4 flow-text">{Title}   </span>
                    </p><br/>
                    <hr/>
                    <p><b>Id:</b> {imdbID}</p>
                    <p><b>Type:</b> {Type}</p>
                    <p><b>Year:</b> {Year}</p>
                </div>
            </div>

        </div>

    </>
} 