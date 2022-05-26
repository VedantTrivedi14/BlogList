import axios from 'axios';

export default  axios.create({
    //for run json server : npm run db
    // for run ngrok : npm run tunnel 
    // at this time what forwording url get put it over here
                //we have to change this when re run this app , put here new url 
    baseURL : 'http://a4d8-2402-3a80-15b7-9b49-ad74-9067-2f5d-2bc5.ngrok.io/'
});