import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID VdS8FfGXKmnO0VwBLPucxegS5kdp3fUIvdj4nJ_SFS4",
  },
});
