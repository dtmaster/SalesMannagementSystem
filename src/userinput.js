import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor:"#eeeeee"

  },
  margin: {
    margin: theme.spacing(1),
    //marginTop: theme.spacing(3)
  },
  textField: {
    flexBasis: 200,
  },
}));

export default function OutlinedInputAdornments() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    pricePA_USD: '',
    pricePB_USD: '',
    pricePC_USD: '',
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
<div className={classes.root}>

      <TextField
        id="outlined-adornment-packageA"
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
        label="PackageA"
        value={values.weight}
        onChange={handleChange('pricePA_USD')}
        
        InputProps={{
          endAdornment: <InputAdornment position="end">$</InputAdornment>,
        }}
      />
      <TextField
        id="outlined-adornment-packageB"
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
        label="PackageB"
        value={values.amount}
        onChange={handleChange('pricePB_USD')}
        
        InputProps={{
          endAdornment: <InputAdornment position="end">$</InputAdornment>,
        }}
      />
 
        <TextField
          id="outlined-adornment-packageC" 
          className={clsx(classes.margin, classes.textField)}
          variant="outlined"
          label="PackageC"
          value={values.weight}
          onChange={handleChange('pricePC_USD')}
          
          InputProps={{
            endAdornment: <InputAdornment position="end">$</InputAdornment>,
          }}
        />
      
      
        </div>
  );
}