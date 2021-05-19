import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';

import Profile from './components/pages/ProfileComponent';
import AddressComponent from './components/pages/AddressComponent';
import ImageComponent from './components/pages/ImageComponent';

export default function UserPrivateRoute(props) {
  return (
    <div>
      {/*<Header/>*/}
       <Switch>
          <Route exact path={`${props.match.path}/view-profile`} component={Profile}/>
          <Route exact path={props.match.path} render={props=> (
            <Redirect to={{ pathname: `${props.match.path}/view-profile` }} />
          )} />

          <Route exact path={`${props.match.path}/address`} component={AddressComponent}/>
          <Route exact path={props.match.path} render={props=> (
            <Redirect to={{ pathname: `${props.match.path}/address` }} />
          )} />

          <Route exact path={`${props.match.path}/image`} component={ImageComponent}/>
          <Route exact path={props.match.path} render={props=> (
            <Redirect to={{ pathname: `${props.match.path}/image` }} />
          )} />
       </Switch>
    </div>
  );
}
