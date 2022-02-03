import React from 'react'

class SearchResults extends React.Component{
    render(){
        return(
            <div className='SearchResults'>
                {this.props.results.map(item=>(
                    <div className='SingleResult'>
                    <h1>{item.displayLink}</h1>
                    <h2>{item.title}</h2>
                    <h3>{item.snippet}</h3>
                    <a target='_blank' href={item.link}>{item.link}</a>
                    </div>
                ))}
            </div>
        )
    }
}

export default SearchResults
