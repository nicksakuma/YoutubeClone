import axios from "axios";


const KEY = 'AIzaSyBpe19Kr_ESdyq7-Ui38TYVGOfk5ofUDrI';

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params:{
    part: "snippet",
    maxResults:6,
    key: KEY
  }
});