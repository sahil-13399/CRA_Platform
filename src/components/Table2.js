import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { GetApp } from '@material-ui/icons';


function Table2() {

    function createData(quoteID, date, job,summary, submission_method,total,status) {
        return { quoteID, date, job,summary, submission_method,total,status};
      }
      
      const rows = [
        createData('18008264','04/20/20','Job 1','Summary','Auto Email','$ 1000.90','Accepted'),
        createData('12004262','03/29/19','Job 2','Summary','Client Site','$ 15000.23','Denied'),
      ];

      
    const useStyles = makeStyles({
        table: {
          minWidth: 1200,
        },
      }); 

    const classes = useStyles();

    return (
        <div>
        <TableContainer component={Paper}>
        <Table className={classes.table} size="big" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell width ='100px' style = {{fontWeight:'bold',borderRight : ' 5px solid lightgrey',textAlign:'center'}}>Quote ID</TableCell>
              <TableCell width ='150px' style = {{fontWeight:'bold',borderRight : ' 5px solid lightgrey',textAlign:'center'}}>Date Submitted</TableCell>
              <TableCell width ='100px' style = {{fontWeight:'bold',borderRight : ' 5px solid lightgrey',textAlign:'center'}}>Job/Event Name</TableCell>
              <TableCell width ='100px' style = {{fontWeight:'bold',borderRight : ' 5px solid lightgrey',textAlign:'center'}}>Summary</TableCell>
              <TableCell width ='100px' style = {{fontWeight:'bold',borderRight : ' 5px solid lightgrey',textAlign:'center'}}>Quote Total($)</TableCell>
              <TableCell width ='100px' style = {{fontWeight:'bold',borderRight : ' 5px solid lightgrey',textAlign:'center'}}>Status</TableCell>
              <TableCell width = '30px'style = {{fontWeight:'bold',textAlign:'center'}}>PDF</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.quoteID}
                </TableCell>
                <TableCell width ='150px' style = {{textAlign:'center'}}>{row.date}</TableCell>
                <TableCell style = {{textAlign:'center'}}>{row.job}</TableCell>
                <TableCell style = {{textAlign:'center'}}>{row.summary}</TableCell>
                <TableCell style = {{textAlign:'center'}}>{row.total}</TableCell>
                <TableCell style = {{textAlign:'center'}}>{row.status}</TableCell>
                <TableCell width = '30px' style = {{textAlign:'center'}} ><a href={row.image}><GetApp /></a></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    )
}

export default Table2
