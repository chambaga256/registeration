import React from "react";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import useStyles from './styles';
export default function UseTable() {
    const classes = useStyles()
    const headCells =[
        {id:'fullName',title:'Full Name'},
        {id:'RegNo',title:'Registration Number'},
        {id:'Course',title:'Course'},
        {id:'university',title:'University'},
        {id:'gender',title:'gender'},
    ]

    const Records = [
        {id:'1',fullName:'Abdul Chambagwe',regNo:'19/U/170234/PS',course:'Computer Science',university:'Makerere University',gender:'Male'},
        {id:'1',fullName:'Ismail Kenneth',regNo:'19/U/32234/Eve',course:'Information Technology',university:'KyambogovUniversity',gender:'Male'},
    ]
    
  const Tble = ({children}) => (
    <Table className={classes.table}>
        {children}
    </Table>
  );
  const TbleHead = () => (
    <TableHead>
        <TableRow>
            {
                headCells.map(headCell=>(
                    <TableCell key={headCell.id}>{headCell.title}</TableCell>
                ))
            }
        </TableRow>
    </TableHead>
  );
const TbleBody = () => (
    <TableBody>
            {
                Records.map(Record=>(
                    <TableRow key={Record.id} >
                        <TableCell>{Record.fullName}</TableCell>
                        <TableCell>{Record.regNo}</TableCell>
                        <TableCell>{Record.course}</TableCell>
                        <TableCell>{Record.university}</TableCell>
                        <TableCell>{Record.gender}</TableCell>
                    </TableRow>
                ))
            }
    </TableBody>
  );
  return {
      Tble,
      TbleHead,
      TbleBody,
  };
}
