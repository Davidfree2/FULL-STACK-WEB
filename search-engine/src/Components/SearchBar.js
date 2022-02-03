import React from 'react'

class SearchBar extends React.Component{
    render(){
        return(
            <div className='SearchBar'>
                <form onSubmit={this.props.submitAction}>
                    <input type='text' name='searchQuery' placeholder='type to search' ref={this.props.queryText}/>
                </form>
            </div>
        )
    }
}

export default SearchBar
