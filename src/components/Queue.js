import React,{useState} from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import profile from '../profile.jpeg'
import { FormLabel, TextField } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Table2 from './Table2'


function Queue() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [cName, setCName] = useState("");
    const [cEmail, setCEmail] = useState("");
    const [cPhone, setCPhone] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const [turnOver, setState] = React.useState("");
    const handleChange = (event) => {      
        const turnOver = event.target.value;
        setState(turnOver);
    };

    const handleFileInput = (e) => {
        // handle validations
        const file = e.target.files[0];
        //console.log(file)
       setSelectedFile(file)
      };

    return (
        <div className = "Queue" style = {{marginLeft:80,marginRight:50,display:'flex',flexDirection:'column'}}>
            <div className = "upper" style = {{display : 'flex',justifyContent:'space-between'}}>
                <div className = "upper_left">
                    <div className = "button_client" style = {{display : 'flex',justifyContent : 'space-between',marginBottom:10}}> 
                        <Button style = {{marginRight : 30}}variant="contained" color="red"><AddIcon /> Client Image</Button>
                        <Button variant="contained" color="red"><DeleteIcon /> </Button>
                    </div>
                    <div className = "image_client">
                        <img src = {profile} height = '250px' />
                    </div>
                </div>
                <div className = "upper_right" style = {{marginLeft:'auto',marginRight:'auto',marginTop:-30}}>
                    <div className = "form_data">
                        <form>
                            <h1 style = {{}}>  Client Information</h1>
                            <div style = {{display : 'flex',justifyContent : 'space-between',marginTop:50}}>

                                <TextField style = {{marginRight:80}} placeholder = "Enter Name" value={name} onChange={(e) => setName(e.target.value)}/>
                                <TextField style = {{marginRight:80}} placeholder = "Enter Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                                <TextField style = {{marginRight:80}} placeholder = "Enter Phone No" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                                <Button variant="contained" color="red" component="label"><AddIcon /> Attachments <input type="file" hidden /></Button>
                            </div>
                            <div style = {{display : 'flex',marginTop:50,marginRight:50}}>

                                <TextField  style = {{marginRight:80}} placeholder = "Enter Company Name" value={cName} onChange={(e) => setCName(e.target.value)}/>
                                <TextField  style = {{marginRight:80}} placeholder = "Enter Company Email" value={cEmail} onChange={(e) => setCEmail(e.target.value)}/>
                                <TextField  style = {{marginRight:80}} placeholder = "Enter Company Phone No" value={cPhone} onChange={(e) => setCPhone(e.target.value)}/>
                            </div>
                            <div style = {{marginTop:50,marginRight:50,width:200}}>
                            <InputLabel id="demo-simple-select-filled-label">Turn Over Level</InputLabel>
                            <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            value={turnOver}
                            onChange={handleChange}
                            style = {{paddingTop:20,width:200}}
                            >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={"High"}>High</MenuItem>
                            <MenuItem value={"Medium"}>Medium</MenuItem>
                            <MenuItem value={"Low"}>Low</MenuItem>
                            </Select>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className = "lower" style = {{margin:'auto',marginTop:'50px'}}>
                <Table2 />
            </div>
        </div>
    )
}

export default Queue
