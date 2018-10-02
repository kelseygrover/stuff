import axios from "axios";
const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json"
const APIKEY = "5aaa658b92564fc8a30fce9376826838";

export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};
