import axios from "axios";
// put in the url variable the local url for the back end eg 'http://localhost:-----/'
const url = "";
const id = ''; // this is the id for the student from the back end
const newStudent = ''; //this a new student from the backend
const updatedStudent = ''; //this an update student from the backend
const API = axios.create({ baseURL: `${url}` });

// for fetching,editing,creating and deleting student
export const getStudents = API.get(url)
export const updateStudent = API.patch(`${url}/${id}`,updatedStudent)
export const createStudent = API.post(url,newStudent)
export const deleteStudent = API.delete(`${url}/${id}`)



// login manually without google 
API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});
// This url follows the localhost eg '/users/signin'
export const signIn = (values) => API.post(url, values);
// This url follows the localhost eg '/users/signup'
export const signUp = (values) => API.post(url, values);
