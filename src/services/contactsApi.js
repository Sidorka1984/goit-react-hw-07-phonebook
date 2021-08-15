import axios from "axios";

axios.defaults.baseURL = "http://localhost:7777";

export const fetchContacts = () => {
  return axios.get("/contacts");
};

export const fetchAddContact = (contact) => {
  return axios.post(`/contacts`, contact);
};

export const fetchDeleteContact = (id) => {
  return axios.delete(`contacts/${id}`);
};
