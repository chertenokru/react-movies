import {CardList} from "../components/CardList";
import {Search} from "../components/Search";
import React from "react";
import {Preloader} from "../components/Preloader";
import {Pagination} from "../components/Pagination";

const API_KEY = process.env.REACT_APP_API_KEY;

export class Main extends React.Component {

    state = {
        movies: [],
        loading: false,
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

    updateSearch = (search = '', type = 'all', page = 1) => {

        if (search.length < 3) {

            this.setState({
                loading: false,
                result: false,
                error: 'Строка для поиска должна быть от 3х символов',
                pages: 0,
                page: page ? 1 : page,
                search: search,
                type: type
            });
            console.log(search.length);
            return;
        }
        this.setState({
            loading: true,
            result: false,
            error: '',
            pages: 0,
            page: page,
            search: search,
            type: type
        }, () => {
            fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}&page=${page}${type !== 'all' ? `&type=${type}` : ''}`)
                .then(response => response.ok ? response.json():Promise.reject(response))
                .then(data => this.setState({
                    movies: data.Search, loading: false, result: Boolean(data.Response),
                    error: data.Error, pages: data.totalResults ? parseInt(data.totalResults / 10) + 1 : 1
                }))
                .catch(err => this.setState({movies: [], loading: false, result: false, error: err.toString(), pages: 1}));
        })
    }


    render() {
        const {loading, pages, page, error, result, movies, search, type} = this.state;
        const pageCode = pages > 1 ? <Pagination page={page} pages={pages} onPageChage={this.updatePage}/> : '';
        return <main className="container content">

            {loading ? <Preloader/> : <Search updateSearch={this.updateSearch} search={search} type={type}/>}
            {pageCode}
            {result === true && !loading ?
                <CardList movies={movies}/> : ''
            }
            {result === false && !loading ? (
                <div className="errorText">
                    <h4>Ошибка:</h4>
                    <h5>{error}</h5>
                </div>
            ) : ''
            }
            {pageCode}


        </main>
    }
}