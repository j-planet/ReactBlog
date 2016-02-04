/**
 * Created by jj on 2/2/16.
 */

import React, { Component } from 'react';

export default class MainPage extends Component {
    render() {
        return (
            <div>
                <h1>The main page.</h1>

                <hr />
                { this.props.children }
            </div>
        );
    }
}