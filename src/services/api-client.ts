import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "15ff7c75bb394b618b5c27f4f8ce32c5",
  },
});
