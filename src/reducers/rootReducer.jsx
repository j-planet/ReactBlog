/**
 * Created by jj on 1/19/16.
 */

import { combineReducers } from 'redux';
import PostsReducer from './posts_reducer';
import { reducer as formReducer } from 'redux-form';


export default combineReducers({
    posts: PostsReducer,
    form: formReducer   // HAS TO BE "form"
});