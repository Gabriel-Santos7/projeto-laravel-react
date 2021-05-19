import React,{useState} from 'react'
import { useStyles } from '../../styles/styles';
import { Button, TextField, Card } from "@material-ui/core";
import {Link } from "react-router-dom";
import {useDispatch} from 'react-redux';
import Typography from '@material-ui/core/Typography';
import {RegisterActionImage} from '../../redux/actions/AuthActions';

function ImageComponent(){  
  
  const classes = useStyles();
  
  const dispatch = useDispatch();

  const [selectedFile, setState] = useState({
    selectedFile: null
  });

  const handleFieldChange = e => {
    setState({
      selectedFile: e.target.files[0]
      
  })
    console.log( selectedFile);
  }
  
  const UserRegisterImage = (e) => {
    e.preventDefault();
    console.log(selectedFile);
    dispatch(RegisterActionImage(selectedFile));
  };
  
  return (
      <div><br></br>
        <div className={classes.centerItem}>
        <Card>
          <Typography gutterBottom variant="h5" component="h2">
              <b>Imagem</b>
          </Typography>
          <form onSubmit={UserRegisterImage}>
            <div>
              <TextField
                type="file"
                className={classes.fullWidth}
                required
                margin="normal"
                variant="outlined"
                label="Foto"
                id="image"
                name="image"
                value={selectedFile.name}
                onChange={handleFieldChange}
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
                  <b>Enviar</b>
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

export default ImageComponent;
