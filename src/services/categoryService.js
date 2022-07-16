import api from "./api";

const getAllCategories = () => {
  return api.get("/category");
};


const createCategory = (data) => {
  return api.post("/category", data);
};


export { createCategory, getAllCategories };
