import React from 'react';
import './App.css';
import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';
import Yelp from './util/Yelp';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {businesses: []};
    this.searchYelp = this.searchYelp.bind(this);
  }
  searchYelp(term, location, sortBy) {
<<<<<<< HEAD
    Yelp.search(term, location, sortBy).then(businesses =>{
      this.setState({businesses: businesses});
    });
=======
    Yelp.search(term, location, sortBy).then(businesses =>
      this.setState({businesses: businesses})
    );
>>>>>>> 105d7e4f79037450e585cbaa5ca355aad98bc30e
  }

  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={this.state.businesses} />
     </div>
    );
  }
}

export default App;
