import { concat } from "ramda";
const endpoint =
  "https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=";
// const getWikipediaSearchUrlForC = (topic) => endpoint + topic;
// const getWikipediaSearchUrlFor = concat(endpoint);
export default concat(endpoint);
