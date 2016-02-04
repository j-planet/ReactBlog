/**
 * Created by jj on 2/2/16.
 */

import React from 'react';
import { Route, IndexRoute } from 'react-router';   // IndexRoute when a path matches a parent but none of the children!!

import MainPage from './components/main_page';
import IndexPage from './components/index_page.jsx';
import NewPage from './components/new_page.jsx';
import PostPage from './components/post_page.jsx';


export default (
    <Route path="/" component={MainPage} >
        <IndexRoute component={IndexPage} />
        <Route path="posts/new" component={NewPage} />
        <Route path="posts/:id" component={PostPage} />
    </Route>
);