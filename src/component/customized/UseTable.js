import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import useStyles from "./styles";
import { Customized } from "./customized";
export default function UseTable() {
  const classes = useStyles();
  const headCells = [
    { id: "fullName", title: "Full Name" },
    { id: "RegNo", title: "Registration Number" },
    { id: "Course", title: "Course" },
    { id: "university", title: "University" },
    { id: "internshipCourse", title: "InternshipCourse" },
    { id: "gender", title: "gender" },
  ];

  const Tble = ({ children }) => (
    <Table className={classes.table}>{children}</Table>
  );
  const TbleHead = () => (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell key={headCell.id}>{headCell.title}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
  const TbleBody = ({handleOpenPopup,students}) => (
    <TableBody>
      {students.map((student) => (
        <TableRow key={student.id}>
          <TableCell>{student.fullName}</TableCell>
          <TableCell>{student.regNo}</TableCell>
          <TableCell>{student.course}</TableCell>
          <TableCell>{student.university}</TableCell>
          <TableCell>{student.internshipCourse}</TableCell>
          <TableCell>{student.gender}</TableCell>
          <TableCell className={classes.tablecellbutton1}>
            <Customized.Button className={classes.simpleButt1} 
            variant='outlined'
            startIcon={<EditIcon fontSize='small'/>}
            onClick={handleOpenPopup}/>
          </TableCell>
          <TableCell className={classes.tablecellbutton}>
            <Customized.Button className={classes.simpleButt} 
            variant='outlined'
            startIcon={<DeleteIcon fontSize='small'/>}/>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
  return {
    Tble,
    TbleHead,
    TbleBody,
  };
}
