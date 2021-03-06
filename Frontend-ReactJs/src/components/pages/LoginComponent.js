import React,{useState} from 'react';
import { Button, TextField, Card } from "@material-ui/core";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {useStyles} from '../../styles/styles';

import {useDispatch} from 'react-redux';

import {LoginAction} from '../../redux/actions/AuthActions';

import {useHistory,Link} from 'react-router-dom'; 


function LoginComponent() {

  const history = useHistory();
  //console.log(history);
  const classes = useStyles();
  
  const dispatch = useDispatch();

  const [fields, setState] = useState({
    email: "",
    password: "",
  });


  const handleFieldChange = e => {
    setState({
        ...fields,
        [e.target.id] : e.target.value
    })
  }

  const UserLogin = (e) => {
      e.preventDefault();
      
      console.log(fields);
      
    dispatch(LoginAction(fields, history));
      
    };
      
  return (
    <div>
      <div className={classes.centerItem}>
        <Card>
          <h2><b>Login</b></h2>
          <form onSubmit={UserLogin}>
            <div>
              <TextField
                type="email"
                className={classes.fullWidth}
                required
                margin="normal"
                variant="outlined"
                label="Email"
                id="email"
                value={fields.email}
                onChange={handleFieldChange}
              />
            </div>

            <div>
              <div>
                <TextField
                  className={classes.fullWidth}
                  label="Senha"
                  type="password"
                  margin="normal"
                  variant="outlined"
                  required
                  id="password"
                  value={fields.password}
                  onChange={handleFieldChange}
                />
              </div>

              <div>
                <Button
                  type="submit"
                  className={classes.fullWidth}
                  variant="contained"
                  color="primary"
                  endIcon={<AccountCircleIcon />}
                >
                  <b>Login</b>
                </Button>
                <br />

                <div className={classes.linkContainer}>
                  <Link to="/user/register">Cadastro</Link>
                </div>
              </div>

              <div className={classes.linkContainer}>
                <Link to="/home">Voltar </Link>
              </div>

              <div></div>
            </div>
          </form>
        </Card>
      </div>
    </div>
  )
}

export default LoginComponent
