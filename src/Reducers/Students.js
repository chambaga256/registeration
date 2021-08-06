import { CREATE, DELETE, GET, UPDATE } from "../Actions/types";
const initialState = {
  studentsData: [],
};
export default function Students(state = initialState, action) {
  switch (action.type) {
    case GET:
      return {
        ...state,
        studentsData: action.payload,
      };
    case CREATE:
      return {
        ...state,
        studentsData: [...state.studentsData,action.payload]
      };
    case UPDATE:
      localStorage.clear();
      return {
        ...state,
        studentsData:state.studentsData.map((studentData )=> studentData.id === action.payload.id ? action.payload:studentData)
      };

    case DELETE:

      return {
        ...state,
        studentsData:state.studentsData.filter((studentData )=> studentData !== action.payload)
      };
    default:
      return state;
  }
}
