const apiKey = 'n5Ube3eczbax-5r8rMDAGvxcUTgnZQl96edwEqE2X09D6OM2haMUnMY2CJ5U3MjnzD_Nndb9u877dFd4YvJSGhUKXGmYr6KhNvZLu9eWA4BifsTUzsxO1cE3hJR5WnYx';

let Yelp = {
  search(term, location, sortBy) {
    return fetch('https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term='+ term +
    '&location=' + location + '&sort_by=' + sortBy, {
  headers: {
     Authorization: `Bearer ${apiKey}`
  }
}).then(response => {return response.json();
}).then(jsonResponse => {
  if(jsonResponse.businesses) {
    return jsonResponse.businesses.map(business =>  ({
      id: business.id,
      imageSrc: business.image_url,
      name: business.name,
      address: business.location.address1,
      city: business.location.city,
      state: business.location.state,
      zipCode: business.location.zip_code,
      category: business.categories[0].title,
      rating: business.rating,
      reviewCount: business.review_count
    }));
  } else {
    console.log(jsonResponse);
    return [];
  }
});
  }
};
 export default Yelp;
