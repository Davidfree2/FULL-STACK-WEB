import React from 'react'
import SearchBar from './Components/SearchBar'

class App extends React.Component{
    constructor(props){
        super(props)
            state: {
            }
            this.query = this.query.bind(this);
            this.getting = this.getting.bind(this); 
        }

    query=async(query)=>{
        const fetchQuery = await fetch('http://127.0.0.1:5000/query', {
            method: 'post',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name: 'thissays soeth else'})
        })
        const res = await fetchQuery.text();
        alert(res);
    }


    getting=async()=>{
        const fetching = await fetch('http://127.0.0.1:5000/hello');
        const data = await fetching.text();
        alert(data);
    }

    render(){
        return(
            <>
                <button onClick={this.query}>click me</button>
                <button onClick={this.getting}>getting</button>
            </>
        )
    }
}

export default App
