import React from "react";
import Classes from "../Css/search.module.css";


class Search extends React.Component{
    
    state={
        query:""
    }

    handleQuery=(event)=>{
  
        this.setState({query : event.target.value});
      
    }

    handleClicked=()=>{
        
        this.props.getQuery(this.state.query);
    }

    render(){
        return (
            <header>
                <h1>VIDEO APP</h1>
                <div className={Classes.userInput}>
                    <input type="text" placeholder="Search..." onChange={this.handleQuery} value={this.state.query}/>
                    <button onClick={this.handleClicked}>Search</button>
                </div>
            </header>
        );
    }
}

export default Search;