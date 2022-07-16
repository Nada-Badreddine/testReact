import api from "./api";

const getAllPets = () => {
  return api.get("/pet");
};

const getPetById = (petId) => {
  return api.get(`/pet/${petId}`);
};

const getPetByStatus = (status) => {
  return api.get(`pet/findByStatus/${status}`);
};

const createPet = (data) => {
  return api.post("/pet", data);
};

const removePet = (petId) => {
  return api.delete(`/pet/${petId}`);

};

const editEdit = (petId, data) => {
    return api.put(`/pet/${petId}`, data);
  
  };

export { getAllPets, getPetById, createPet, removePet, editEdit, getPetByStatus };
