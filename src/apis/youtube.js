import axios from 'axios';

const KEY = 'AIzaSyB0neDvJopvgxXPe1ruhrenIR72xjW-kpg';



export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        key:KEY,
    }
});