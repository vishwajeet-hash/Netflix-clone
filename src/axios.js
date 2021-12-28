import axios from "axios";
//axios is just like postman 
//base url to make requests to the movie database.Lets say if we make 
//a get request saying instance.get('/foo-bar') 
//the url we will be actually sending is https://api.themoviedb.org/3/foo-bar
const instance=axios.create({
    baseURL:"https://api.themoviedb.org/3",
});
export default instance;