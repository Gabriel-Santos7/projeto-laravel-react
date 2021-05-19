import React,{useState} from 'react'
import { useStyles } from '../../styles/styles';
import { Button, TextField, Card } from "@material-ui/core";
import {Link } from "react-router-dom";
import {RegisterActionAddress} from '../../redux/actions/AuthActions';
import {useDispatch} from 'react-redux';


function AddressComponent(){
  
  const classes = useStyles();

  const dispatch = useDispatch();

  const [fields, setState] = useState({
    address: "",
  });

  const handleFieldChange = e => {
      setState({
          ...fields,
          [e.target.id] : e.target.value
      })
  }
  const UserRegisterAddress = (e) => {
    e.preventDefault();
    console.log(fields);
    dispatch(RegisterActionAddress(fields));
    alert('Endereço Cadastrado com Sucesso');
  };
  
  return(
    <div>
      <div className={classes.centerItem}>
        <Card>
          <h2>
            <b>Cep</b>
          </h2>

          <form onSubmit={UserRegisterAddress}>
            <div>
              <TextField
                type="text"
                className={classes.fullWidth}
                required
                margin="normal"
                variant="outlined"
                label="Cep"
                id="address"
                value={fields.address}
                onChange={handleFieldChange}
                inputProps = {{maxLength:8}}
              />
            </div>
            <div>
              <div>
                <Button
                  type="submit"
                  className={classes.fullWidth}
                  variant="contained"
                  color="primary"
                >
                  <b>Cadastrar</b>
                </Button>
                <br />
              </div>

              <div className={classes.linkContainer}>
                <Link to="/user/view-profile">Voltar </Link>
              </div>

              <div></div>
            </div>
          </form>
        </Card>
      </div>
    </div>
  )
}

export default AddressComponent;