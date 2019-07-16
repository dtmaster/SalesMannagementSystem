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
      marginTop: theme.spacing(3)
    },
    textField: {
      flexBasis: 200,
    },
  }));
  
  export default function OutlinedInputAdornments(props) {
    const classes = useStyles();
    const [values, setValues] = React.useState({
      localvar : '',
    });
  
    const handleChange = prop => event => {
      setValues({ ...values, [prop]: event.target.value });
    };
  
    return (
  <div className={classes.root}>
      <h3 className={clsx(classes.margin, classes.textField)}>{props.title}</h3>
        <TextField
          id="outlined-adornment-packageA"
          className={clsx(classes.margin, classes.textField)}
          variant="outlined"
          label={props.label}
          value={values.weight}
          onChange={handleChange('localvar')}
          
          InputProps={{
            endAdornment: <InputAdornment position="end">{props.placeholder}</InputAdornment>,
          }}
        />       
   </div>
  )}