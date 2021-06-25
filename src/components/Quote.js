import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles, Button, Select, MenuItem, Typography, FormControl, InputLabel, FormControlLabel, Checkbox } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import ranges from './credit_terms';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import Divider from '@material-ui/core/Divider';

const initialValues = {
    quotenum: '',
    clientname: '',
    clientcompany: '',
    purchaseordernum: '',
    salesrep: '',
    submitMethod: '',
    ss: true,
    creditTerms: 'Credit Card',
    deliveryType: '',
    deliveryDate: new Date()
}

export default function Quote() {

    const [values, setValues] = useState(initialValues);
    const [inputFields, setInputFields] = useState([
        { itemNo: '', product: '', finishl: '', finishw: '', qty: '', subtotal: '', details:'' },

    ])

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setValues({
            ...values,
            [name]:value
        })
    }
    
    const handleCheckboxChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.checked });
    };

    const handleDateChange = (date) => {
        setValues({ ...values, deliveryDate: date });
        // setSelectedDate(date);
    };

    const handleChangeInput = (index, event) => {
        const values = [...inputFields];
        values[index][event.target.name] = event.target.value;
        setInputFields(values)
    }

    const handleAddFields = () => {
        setInputFields([...inputFields, { itemNo: '', product: '', finishl: '', finishw: '', qty: '', subtotal: '', details: '' }]);
    }

    const handleRemoveFields = (index) => {
        const values = [...inputFields];
        values.splice(index, 1);
        setInputFields(values);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            alert(JSON.stringify(inputFields, null, 2));
        }, 500);
    }

    return (
        <Container maxWidth="md">
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        {/* <Typography display="inline">
                            Quote Number:
                        </Typography> */}
                        <TextField
                            name="quotenum"
                            label="Quote No."
                            value={values.quotenum}
                            onChange={handleInputChange}
                            type="text"
                            variant="outlined"
                            disabled
                            // value="789"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            name="clientname"
                            label="Client Name"
                            value={values.clientname}
                            onChange={handleInputChange}
                            type="text"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            name="clientcompany"
                            label="Client Company"
                            value={values.clientcompany}
                            onChange={handleInputChange}
                            type="text"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            name="purchaseordernum"
                            label="Purchase Order No."
                            value={values.purchaseordernum}
                            onChange={handleInputChange}
                            type="text"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            name="salesrep"
                            label="Sales Rep"
                            value={values.salesrep}
                            onChange={handleInputChange}
                            type="text"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            name="submitMethod"
                            label="Submit Method"
                            value={values.submitMethod}
                            onChange={handleInputChange}
                            type="text"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={1}>
                        <FormControlLabel
                                control={<Checkbox name="ss" checked={values.ss} onChange={handleCheckboxChange}/>}
                            label="SS"
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <FormControl variant="outlined">
                            <InputLabel>Credit Terms</InputLabel>
                            <Select
                                label="Credit Terms"
                                name="creditTerms"
                                value={values.creditTerms}
                                onChange={handleInputChange}
                            >
                                {ranges.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            name="deliveryType"
                            label="Delivery Type"
                            value={values.deliveryType}
                            onChange={handleInputChange}
                            type="text"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <KeyboardDatePicker
                            id="deliveryDate"
                            name="deliveryDate"
                            label="Delivery Date"
                            format="MM/dd/yyyy"
                            value={values.deliveryDate}
                            onChange={handleDateChange}
                            
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </Grid>
                        {inputFields.map((inputField, index) => (
                            <Grid item xs={12} container spacing={1}>
                                <Grid item xs={2}>
                                    <TextField
                                        name="itemNo"
                                        label="Item No"
                                        variant="filled"
                                        value={inputField.itemNo}
                                        onChange={event => handleChangeInput(index, event)}
                                    />
                                </Grid>
                                <Grid item xs={3}>
                                    <TextField
                                        name="product"
                                        label="Product"
                                        variant="filled"
                                        fullWidth
                                        value={inputField.product}
                                        onChange={event => handleChangeInput(index, event)}
                                    />
                                </Grid>
                                <Grid item xs={2}>
                                    <TextField
                                        name="finishl"
                                        label="Finish(L)"
                                        variant="filled"
                                        value={inputField.finishl}
                                        onChange={event => handleChangeInput(index, event)}
                                    />
                                </Grid><Grid item xs={2}>
                                    <TextField
                                        name="finishw"
                                        label="Finish(W)"
                                        variant="filled"
                                        value={inputField.finishw}
                                        onChange={event => handleChangeInput(index, event)}
                                    />
                                </Grid>
                                <Grid item xs={1}>
                                    <TextField
                                        name="qty"
                                        label="Qty"
                                        variant="filled"
                                        value={inputField.qty}
                                        onChange={event => handleChangeInput(index, event)}
                                    />
                                </Grid>
                                <Grid item xs={2}>
                                    <TextField
                                        name="subtotal"
                                        label="Subtotal"
                                        variant="filled"
                                        value={inputField.subtotal}
                                        onChange={event => handleChangeInput(index, event)}
                                    />
                                </Grid>
                                <Grid item xs={10}>
                                    <TextField
                                        name="details"
                                        label="Details"
                                        variant="filled"
                                        fullWidth
                                        value={inputField.details}
                                        onChange={event => handleChangeInput(index, event)}
                                    />
                                </Grid>
                                {inputFields.length !== 1 && <IconButton
                                    onClick={() => handleRemoveFields(index)}
                                >
                                    <RemoveIcon />
                                </IconButton>}
                                {inputFields.length - 1 === index && <IconButton
                                    onClick={() => handleAddFields()}
                                >
                                    <AddIcon />
                                </IconButton>}
                            </Grid>
                        ))}
                    <Grid item xs={12} style={{textAlign:'center'}}>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            onClick={handleSubmit}
                        > Send </Button>
                    </Grid>
                </Grid>
            </form>
            </MuiPickersUtilsProvider>
        </Container>
    );
}