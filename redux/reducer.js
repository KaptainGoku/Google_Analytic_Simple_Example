import {combineReducers} from 'redux';
import Router from '../router';
import { createNavigationReducer} from 'react-navigation-redux-helpers';

const navReducer = createNavigationReducer(Router);

export default combineReducers({
<<<<<<< HEAD
  nav: navReducer
=======
 nav: navReducer
>>>>>>> 0dcc8a6... Google analytics - update
});
