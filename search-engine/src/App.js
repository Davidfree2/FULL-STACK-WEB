import React from 'react'
import SearchBar from './Components/SearchBar'
import SearchResults from './Components/SearchResults'
import HomePageLogo from './Components/HomePageLogo'
import HomePageLogoMotto from './Components/HomePageLogoMotto'

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            searchResults: null
        }
        this.searchQueryAction = this.searchQueryAction.bind(this);
    }

    searchQueryAction = async(e)=>{
        e.preventDefault();
        const searchQueryText = await this.state.queryValue.value;
        const fetchQuery = await fetch('http://192.168.254.17:5000/query', {
            method: 'post',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({queryText: searchQueryText})
        })
        const res = await fetchQuery.text();
        const foo = await fetch(res);
        const data = await foo.json();
        const rdata = await JSON.parse(JSON.stringify(data))
        this.setState({
            searchResults: rdata
        })
        console.log(rdata);
    }

    render(){
        if (!this.state.searchResults){
            return(
                <div className='HomePage'>
                    <HomePageLogo />
                    <HomePageLogoMotto />
                    <SearchBar queryText={queryValue=>this.state.queryValue = queryValue} submitAction={this.searchQueryAction} />
                </div>
            )
        }

        return(
            <>
            <div className='Nav'>
                <SearchBar queryText={queryValue=>this.state.queryValue = queryValue} submitAction={this.searchQueryAction} />
                <div className='resultInfo'>
                    <h1>Total results:{this.state.searchResults.queries.request[0].totalResults}</h1>
                </div>
            </div>
                <SearchResults results={this.state.searchResults.items} />
            </>
        )
    }
}

export default App
