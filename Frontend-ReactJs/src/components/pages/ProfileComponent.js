import React,{useEffect} from 'react';
import {Card} from '@material-ui/core';
import {useStyles} from '../../styles/styles';
import {useDispatch, useSelector} from 'react-redux';
import {LoadProfileAction} from '../../redux/actions/ProfileActions';
import {Link } from "react-router-dom";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


export default function ProfileView() {

  const url = "http://127.0.0.1:8000/storage/";

  const classes = useStyles();

  const dispatch = useDispatch();

  const profileResponse = useSelector(state=>state.userDetails.userProfile);


  useEffect(() => {
    dispatch(LoadProfileAction());
      return () => {
      
      };
  }, [dispatch])

  return (
    <div className={classes.fullWidthProfile}>
      <Card>
        {
          profileResponse !== "" && profileResponse !== null && profileResponse.success === true ?
          <div>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={url+profileResponse.data.image}
            title="User Image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {profileResponse.data.name}
            </Typography>
            <b><p className="h4 text-left ">Seus dados:</p></b>
            <p className="h5 text-left ">Email: {profileResponse.data.email}</p>
            <p className="h5 text-left ">Cpf: {profileResponse.data.cpf}</p>
            <p className="h5 text-left ">Cep: {profileResponse.data.address}</p>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            <Link to="/user/address">Cadastrar Cep</Link>
          </Button>
          <Button size="small" color="primary">
            <Link to="/user/image">Enviar Foto</Link>
          </Button>
        </CardActions>
          </div>
          :
          <div>Carregando dados...</div>
        }
      </Card>
    </div>
  );
}
