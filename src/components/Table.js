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

function createData(jobID, clientCompany, contact, salesRep, status,image) {
  return { jobID, clientCompany, contact, salesRep, status,image };
}

const rows = [
  createData('18008264','Coca-Cola','Steve Balmer','Raj Kumar','Negotiating','www.google.com'),
  createData('12004262','Nike','Timothy Balmer','Mike Kumar','Pre-Press','www.google.com'),
  createData('15002261','General Motors','Paul Balmer','ALex Kumar','Post-Press','www.google.com')
];


export default function DenseTable() {
  const classes = useStyles();

  return (
    <div className = "table">
      <TableContainer component={Paper}>
        <Table className={classes.table} size="big" aria-label="a dense table">
          <TableHead>
            <TableRow >
              <TableCell width ='100px' style = {{fontWeight:'bold',borderRight : ' 5px solid lightgrey',textAlign:'center'}}>Job ID</TableCell>
              <TableCell width ='150px' style = {{fontWeight:'bold',borderRight : ' 5px solid lightgrey',textAlign:'center'}}>Client Company</TableCell>
              <TableCell width ='100px' style = {{fontWeight:'bold',borderRight : ' 5px solid lightgrey',textAlign:'center'}}>Contact</TableCell>
              <TableCell width ='100px' style = {{fontWeight:'bold',borderRight : ' 5px solid lightgrey',textAlign:'center'}}>Sales Rep</TableCell>
              <TableCell width ='100px' style = {{fontWeight:'bold',borderRight : ' 5px solid lightgrey',textAlign:'center'}}>Status</TableCell>
              <TableCell width = '30px'style = {{fontWeight:'bold',textAlign:'center'}}>Image</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.jobID}
                  </TableCell>
                  <TableCell width ='150px' style = {{textAlign:'center'}}>{row.clientCompany}</TableCell>
                  <TableCell style = {{textAlign:'center'}}>{row.contact}</TableCell>
                  <TableCell style = {{textAlign:'center'}}>{row.salesRep}</TableCell>
                  <TableCell style = {{textAlign:'center'}}>{row.status}</TableCell>
                  <TableCell width = '30px' style = {{textAlign:'center'}} ><a href={row.image}>{row.image}</a></TableCell>
                </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}