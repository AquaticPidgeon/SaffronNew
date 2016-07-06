import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './reducers/AuthReducer.js';
import userInfoReducer from './reducers/UserInfoReducer.js';
import authErrorReducer from './reducers/AuthErrorReducer.js';
import ingredientsReducer from './reducers/ingredientsReducer.js';
import RecommendationReduce from './reducers/RecommendationReducer.js';
import PopularReducer from './reducers/PopularReducer.js';

export default combineReducers({
  // ...sharedReducers,
  pops: PopularReducer,
  recom: RecommendationReduce,
  user: userInfoReducer,
  suggestedIngredients: ingredientsReducer,
  authenticated: authReducer,
  authErrorMessage: authErrorReducer,
  form: formReducer,
  routing: routerReducer,
});
