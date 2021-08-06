import * as api from "../Axios/axios";
import { CREATE,DELETE,UPDATE,GET} from "./types";
export const getStudents = () => async (dispatch) => {
  try {
    const { data } = await api.getStudents();
    dispatch({
      type: GET,
      payload: data,
    });
 
  } catch (error) {
      console.log(error)
  }
};

export const createStudent = (student) => async (dispatch) => {
  try {
    const { data } = await api.createStudent(student);
    dispatch({
      type: CREATE,
      payload: data,
    });
  } catch (error) {
      console.log(error)
  }
};

export const deleteStudent = (id) => async (dispatch) => {
  try {
    const { data } = await api.deleteStudent(id);
    dispatch({
      type: DELETE,
      payload: id,
    });
  } catch (error) {
      console.log(error)
  }
};

export const updateStudent = (id,student) => async (dispatch) => {
  try {
    const { data } = await api.updateStudent(id,student);
    dispatch({
      type: UPDATE,
      payload: data,
    });
  } catch (error) {
      console.log(error)
  }
};