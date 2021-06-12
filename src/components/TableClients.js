import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './Table.css';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(clientID, name,email,phoneNo,cName,cEmail,cPhone,turnOver) {
  return {clientID, name,email,phoneNo,cName,cEmail,cPhone,turnOver};
}

const rows = [
  createData('18008264','Jim Halpert','jim.halpert@gmail.com','9992299','Dunder Miflin','dunder@miflin.com','199471','High'),
  createData('18008264','Jim Halpert','jim.halpert@gmail.com','9992299','Dunder Miflin','dunder@miflin.com','199471','High'),
  createData('18008264','Jim Halpert','jim.halpert@gmail.com','9992299','Dunder Miflin','dunder@miflin.com','199471','High')
];


export default function TableClients() {
  const classes = useStyles();

  return (
    <div className = "table">
      <TableContainer component={Paper}>
        <Table className={classes.table} size="big" aria-label="a dense table">
          <TableHead>
            <TableRow >
              <TableCell width ='100px' style = {{fontWeight:'bold',borderRight : ' 5px solid lightgrey',textAlign:'center'}}>Client ID</TableCell>
              <TableCell width ='150px' style = {{fontWeight:'bold',borderRight : ' 5px solid lightgrey',textAlign:'center'}}>Client Name</TableCell>
              <TableCell width ='100px' style = {{fontWeight:'bold',borderRight : ' 5px solid lightgrey',textAlign:'center'}}>Client Email</TableCell>
              <TableCell width ='100px' style = {{fontWeight:'bold',borderRight : ' 5px solid lightgrey',textAlign:'center'}}>Client Phone No</TableCell>
              <TableCell width ='100px' style = {{fontWeight:'bold',borderRight : ' 5px solid lightgrey',textAlign:'center'}}>Company Name</TableCell>
              <TableCell width ='100px' style = {{fontWeight:'bold',borderRight : ' 5px solid lightgrey',textAlign:'center'}}>Company Email</TableCell>
              <TableCell width ='100px' style = {{fontWeight:'bold',borderRight : ' 5px solid lightgrey',textAlign:'center'}}>Company Phone No</TableCell>
              <TableCell width = '30px'style = {{fontWeight:'bold',textAlign:'center'}}>TurnOver level</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    <a href = "">{row.clientID}</a>  
                  </TableCell>
                  <TableCell width ='150px' style = {{textAlign:'center'}}>{row.name}</TableCell>
                  <TableCell style = {{textAlign:'center'}}>{row.email}</TableCell>
                  <TableCell style = {{textAlign:'center'}}>{row.phoneNo}</TableCell>
                  <TableCell style = {{textAlign:'center'}}>{row.cName}</TableCell>
                  <TableCell style = {{textAlign:'center'}}>{row.cEmail}</TableCell>
                  <TableCell style = {{textAlign:'center'}}>{row.cPhone}</TableCell>
                  <TableCell width = '30px' style = {{textAlign:'center'}} >{row.turnOver}</TableCell>
                </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}