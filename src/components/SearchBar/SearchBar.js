<<<<<<< HEAD
import React from 'react';
import './SearchBar.css';

let sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count'
};


class SearchBar extends React.Component{
  constructor(props){
    super(props);
    // Set the initial state of <SearchBar />
    this.state = {
      term: '',  //term refers to the search term located in the search input
      location: '', //refers to the location to search near from the location input
      sortBy: 'best_match' // represent the selected sorting option to use.
                           //Here 'best_match' is the initial state and will be
                           // changed as the user clicks to other sorting option.
    };
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
   //if the sorting option equals to the state, return 'active'(className) for css to style
   //the parameter here in fact should be sortByOptionValue, but here it's just for general understanding
  getSortByClass(sortByOption) {
    if(this.state.sortBy === sortByOption) {
      return 'active';
    } else {
      return '';
    }
  }

  //change the state to match the user's sorting option(sortByOption)
  //the parameter here in fact should be sortByOptionValue, but here it's just for general understanding
  handleSortByChange(sortByOption) {
    this.setState({sortBy: sortByOption});
  }

  handleTermChange(event) {
  this.setState({
    term: event.target.value
  });
  }

  handleLocationChange(event) {
    this.setState({
      location: event.target.value
    });
  }

  handleSearch(event){
    this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
    console.log('I want to eat ' + this.state.term + ' in ' + this.state.location + ' Searched by: ' + this.state.sortBy);
  }

  renderSortByOptions() {
    return Object.keys(sortByOptions).map(sortByOption => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return <li key={sortByOptionValue}
                 className={this.getSortByClass(sortByOptionValue)}
                 //Because the value matched to this.state.sortBy is sortByOptionValue(the internal literal string of Yelp API)
                 onClick={this.handleSortByChange.bind(this, sortByOptionValue)}
                  > {sortByOption} </li>;
    });
  }
   render() {
     return (
       <div className="SearchBar">
         <div className="SearchBar-sort-options">
           <ul>
             {this.renderSortByOptions()}
           </ul>
        </div>
        <div className="SearchBar-fields">
          <input onChange={this.handleTermChange} placeholder="Search Businesses" />
          <input onChange={this.handleLocationChange} placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <a onClick={this.handleSearch}>Let's Go</a>
      </div>
  </div>
     );
   }
 }

 export default SearchBar;
=======
import React from 'react';
import './SearchBar.css';

let sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count'
};


class SearchBar extends React.Component{
  constructor(props){
    super(props);
    // Set the initial state of <SearchBar />
    this.state = {
      term: '',  //term refers to the search term located in the search input
      location: '', //refers to the location to search near from the location input
      sortBy: 'best_match' // represent the selected sorting option to use.
                           //Here 'best_match' is the initial state and will be
                           // changed as the user clicks to other sorting option.
    };
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
   //if the sorting option equals to the state, return 'active'(className) for css to style
   //the parameter here in fact should be sortByOptionValue, but here it's just for general understanding
  getSortByClass(sortByOption) {
    if(this.state.sortBy === sortByOption) {
      return 'active';
    } else {
      return '';
    }
  }

  //change the state to match the user's sorting option(sortByOption)
  //the parameter here in fact should be sortByOptionValue, but here it's just for general understanding
  handleSortByChange(sortByOption) {
    this.setState({sortBy: sortByOption});
  }

  handleTermChange(event) {
  this.setState({
    term: event.target.value
  });
  }

  handleLocationChange(event) {
    this.setState({
      location: event.target.value
    });
  }

  handleSearch(event){
    this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
    console.log('I want to eat ' + this.state.term + ' in ' + this.state.location + ' Searched by: ' + this.state.sortBy);
  }

  renderSortByOptions() {
    return Object.keys(sortByOptions).map(sortByOption => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return <li key={sortByOptionValue}
                 className={this.getSortByClass(sortByOptionValue)}
                 //Because the value matched to this.state.sortBy is sortByOptionValue(the internal literal string of Yelp API)
                 onClick={this.handleSortByChange.bind(this, sortByOptionValue)}
                  > {sortByOption} </li>;
    });
  }
   render() {
     return (
       <div className="SearchBar">
         <div className="SearchBar-sort-options">
           <ul>
             {this.renderSortByOptions()}
           </ul>
        </div>
        <div className="SearchBar-fields">
          <input onChange={this.handleTermChange} placeholder="Search Businesses" />
          <input onChange={this.handleLocationChange} placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <a onClick={this.handleSearch}>Let's Go</a>
      </div>
  </div>
     );
   }
 }

 export default SearchBar;
>>>>>>> 105d7e4f79037450e585cbaa5ca355aad98bc30e
