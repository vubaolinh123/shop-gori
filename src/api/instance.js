import axios from "axios";

const instance = axios.create({
    baseURL: "https://shop-api.linkcualinh.com/api"
});

export default instance
