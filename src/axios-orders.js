import axios from "axios";
const instance=axios.create({
    baseURL:"https://burgery-d3f57-default-rtdb.firebaseio.com/"
})
export default instance;