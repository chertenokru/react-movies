import {CardList} from "../components/CardList";
import {Search} from "../components/Search";
import React from "react";
import {Preloader} from "../components/Preloader";
import {Pagination} from "../components/Pagination";

const API_KEY = process.env.REACT_APP_API_KEY;
export class Main extends React.Component {

    state = {
        movies: [],
        loading: true,
        result: false,
        error: '',
        pages: 0,
        page: 1,
        search: '',
        type: 'all'
    }

    componentDidMount() {
        this.updateSearch('dune');
    }

    updatePage = (newPage) => {
        this.updateSearch(this.state.search, this.state.type, newPage)
    }

    updateSearch = (search = '', type = 'all', page ) => {
        if (search.length === 0) {
            this.setState({
                loading: false,
                result: false,
                error: 'Строка для поиска не должна быть пустой',
                pages: 0,
                page: page  ? 1 : page,
                search: search,
                type: type
            });
            return;
        }
        this.setState({loading: true, result: false, error: '', pages: 0, page: page, search:search,type:type}, () => {
            fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${search}&page=${page}${type !== 'all' ? `&type=${type}` : ''}`)
                .then(response => response.json())
                .then(data => this.setState({
                    movies: data.Search, loading: false, result: data.Response,
                    error: data.Error, pages: data.totalResults ? parseInt(data.totalResults / 10) + 1 : 1
                }));
        })
    }


    render() {
        const {loading, pages, page, error, result, movies,search,type} = this.state;
        const pageCode = pages > 1 ? <Pagination page={page} pages={pages} onPageChage={this.updatePage}/> : ''; 
        return <main className="container content">           

            {loading ? <Preloader/> :  <Search updateSearch={this.updateSearch} search={search} type={type} />}
            {pageCode}
            {result === 'True' &&  !loading ?
                <CardList movies={movies}/>:'' 
            }
            {result === 'False' &&  !loading ?
                 <h3>Ошибка: {error}</h3>:''
            }
            {pageCode}


        </main>
    }
}