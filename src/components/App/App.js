import './App.css';
import { Switch, Route } from 'react-router-dom';
import routes from '../../utilities/routes'

import Landing from '../../pages/Landing/Landing'
import Signup from '../../pages/Signup/Signup'
import Signin from '../../pages/Signin/Signin'
import Pantry from '../../pages/Pantry/Pantry'
import SpaceList from '../../pages/SpaceList/SpaceList'
import SpaceView from '../../pages/SpaceView/SpaceView'
import SpaceForm from '../../pages/SpaceForm/SpaceForm'
import TypeList from '../../pages/TypeList/TypeList'
import TypeView from '../../pages/TypeView/TypeView'
import ExpandedItem from '../../pages/ExpandedItem/ExpandedItem'
import ItemForm from '../../pages/ItemForm/ItemForm'
import PageNotFound from '../../pages/PageNotFound/PageNotFound'


function App() {
  return (
    <div className='App'>
      <h1>PYE Pantry Organizing App</h1>
      <Switch>
        <Route exact path={routes.landing}>
          <Landing />
        </Route>
        <Route path={routes.signup}>
          <Signup />
        </Route>
        <Route path={routes.signin}>
          <Signin />
        </Route>
        <Route exact path={routes.pantry}>
          <Pantry />
        </Route>
        <Route exact path={routes.spaceList}>
          <SpaceList />
        </Route>
        <Route path={routes.spaceView}>
          <SpaceView />
        </Route>
        <Route exact path={routes.spaceForm}>
          <SpaceForm />
        </Route>
        <Route exact path={routes.typeList}>
          <TypeList />
        </Route>
        <Route path={routes.typeView}>
          <TypeView />
        </Route>
        <Route path={routes.expandedItem}>
          <ExpandedItem />
        </Route>
        <Route exact path={routes.itemForm}>
          <ItemForm />
        </Route>
        <Route >
          <PageNotFound />
        </Route>
      </Switch>
    </div>
  )
  
  
}

export default App