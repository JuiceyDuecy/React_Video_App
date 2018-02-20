import React, { Component } from 'react';

class SearchBar extends Component {
    //only class based components have state, not FUCTIONAL components;
    constructor(props){
        //calls parent method on parent class with 'super'
        super(props);
        //intializing variables, in this case 'state'
        this.state = {term: ''};
    }
    render(){
        //manipulate state with 'this.setState'
return (
        <div className ="search-bar">

        <input
        placeholder = "start a new search..."
        value = {this.state.term}
        onChange = {event => this.onInputChange(event.target.value)} />

        </div> );
}
        onInputChange(term){
            this.setState({term});
            this.props.onSearchTermChange(term);
        }
    }

export default SearchBar
