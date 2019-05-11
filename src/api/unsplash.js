import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID e9aaa4467597df7dfaa5c51b690a0457f52212443478e87795ab4d699d6ca376"
  }
});
