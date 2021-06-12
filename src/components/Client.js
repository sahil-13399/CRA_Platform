import { Button } from '@material-ui/core'
import React from 'react'
import TableClients from './TableClients'
import { useHistory } from 'react-router'

function Client() {
    const history = useHistory();
    return (
        <div>
           <Button style = {{left:1130,marginBottom:20}} onClick = {() => history.push("/addClient")} variant="contained" color="primary">+ Add Client</Button>
           <TableClients /> 
        </div>
    )
}

export default Client
