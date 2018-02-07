<<<<<<< HEAD
import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends React.Component {
  render() {
    return(
      <div className="BusinessList">
        {this.props.businesses.map(business => {
            return <Business key={business.id} business={business} />})
        }
      </div>
    );
  }
}

export default BusinessList;
=======
import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends React.Component {
  render() {
    return(
      <div className="BusinessList">
        {this.props.businesses.map(business => {
            return <Business key={business.id} business={business} />})
        }
      </div>
    );
  }
}

export default BusinessList;
>>>>>>> 105d7e4f79037450e585cbaa5ca355aad98bc30e
