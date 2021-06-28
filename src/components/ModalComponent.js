import React,{useState} from 'react'
import Button from '@material-ui/core/Button';
import { FormLabel, TextField } from '@material-ui/core';

function ModalComponent() {
    const [jobID, setjobID] = useState("");
    const [company, setCompany] = useState("");
    const [contact, setContact] = useState("");
    const [sales, setSales] = useState("");
    const [status, setStatus] = useState("");
    return (
        <div style = {{display:'flex',flexDirection:'column'}}>
            <TextField style = {{marginBottom:20}} placeholder = "JobID" value={jobID} onChange={(e) => setjobID(e.target.value)}/>
            <TextField style = {{marginBottom:20}} placeholder = "Company" value={company} onChange={(e) => setCompany(e.target.value)}/>
            <TextField style = {{marginBottom:20}} placeholder = "Contact" value={contact} onChange={(e) => setContact(e.target.value)}/> 
            <TextField style = {{marginBottom:20}} placeholder = "Sales Rep" value={sales} onChange={(e) => setSales(e.target.value)}/>
            <TextField style = {{marginBottom:30}} placeholder = "Status" value={status} onChange={(e) => setStatus(e.target.value)}/> 
            <Button style = {{marginBottom:20}} variant="contained" color="secondary">Search</Button>
        </div>
    )
}

export default ModalComponent
