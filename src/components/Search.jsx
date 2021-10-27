import React from "react";

export class Search extends React.Component {
  
        state = {
            search: this.props.search,
            type: this.props.type
        }

    
    
    handleChecked = (event) => {
        this.setState({type: event.target.dataset.type},
            ()=>{
            if (this.state.search.length>1)
                this.props.updateSearch(this.state.search,this.state.type)
            });
    }

    render() {
        return <div className="row">
            <div className="col s12">
                <div className="input-field ">
                    
                        <input
                            className="validate"
                            placeholder='type english part name to search...'
                            type="search"
                            value={this.state.search}
                            minLength="1"
                            onChange={event => this.setState({'search': event.target.value})}
                            onKeyDown={event =>{ if (event.key === 'Enter') this.props.updateSearch(this.state.search,this.state.type)} }
                        />
                        <div className="searchRadio">
                            <label ><input className="with-gap" type="radio" name='type' data-type='all' 
                                          checked={this.state.type==='all'}
                                          onChange={this.handleChecked}/>
                                <span>All</span></label>
                            <label><input className="with-gap" type='radio' name='type' data-type='series'
                                          checked={this.state.type==='series'}
                                          onChange={this.handleChecked}/>
                                <span>Series</span></label>
                            <label><input className="with-gap" type='radio' name='type' data-type='movie'
                                          checked={this.state.type==='movie'}
                                          onChange={this.handleChecked}/>
                                <span>Movie</span></label>
                            <label><input className="with-gap" type='radio' name='type' data-type='game'
                                          checked={this.state.type==='game'}
                                          onChange={this.handleChecked}/>
                                <span >Game</span></label>
                        </div>
                        <button className="btn waves-effect waves-light search green darken-1" onClick={event => {
                            this.props.updateSearch(this.state.search,this.state.type)
                        }}>Search
                        </button>

                    

                </div>
            </div>
        </div>
    }
}