import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: 'id', headerName: 'JobID', width: 100 },
  { field: 'firstName', headerName: 'Client Company', width: 180 },
  { field: 'lastName', headerName: 'Contact', width: 130 },
  {
    field: 'Sales Rep',
    headerName: 'Age',
    type: 'number',
    width: 130,
  },
  {
    field: 'fullName',
    headerName: 'Status',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 100,
    valueGetter: (params) =>
      `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
  },
  {
    field: 'Sales Rep',
    headerName: 'Image',
    type: 'number',
    width: 130,
  }
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function Table() {
  return (
    <div style={{ height: 600, width: '90%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={9} checkboxSelection={false}/>
    </div>
  );
}
