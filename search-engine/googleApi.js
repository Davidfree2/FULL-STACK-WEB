const search = async (searchQuery)=>{
    var url = 'https://www.googleapis.com/customsearch/v1?key=AIzaSyCpq6gd4U_rU4IbRn9OAlnPsQYGsNQVbec&cx=5e3f2ca2c8488a2e8&q=';
    var query = await searchQuery;
    var urlQuery = await url + query;
    return urlQuery;
}

exports.search = search;
