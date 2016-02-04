import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';

import { createPost } from '../actions/index';



class NewPage extends Component {

    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    // gives this.context.router. use context ONLY when we are using router
    static contextTypes = {
        router: PropTypes.object
    };

    onSubmit(props) {
        this.props.createPost(props)
            .then(() => {
                // blog post has been created, navigate the user to the index
                this.context.router.push('/');
            });
    }

    render() {

        const { fields: { title, categories, content }, handleSubmit } = this.props;   // from reduxForm

        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <h3> Create A New Post </h3>

                <div
                    className={"form-group" + (title.touched && title.invalid ? " alert-danger" : '')}
                >
                    <label>Title</label>
                    <input type="text" className="form-control" {...title} />
                    <div className="text-help">
                        {title.touched ? title.error : ''}
                    </div>
                </div>

                <div
                    className={"form-group" + (categories.touched && categories.invalid ? " alert-danger" : '')}
                >
                    <label>Categories</label>
                    <input type="text" className="form-control"  {...categories} />
                    <div className="text-help">
                        {categories.touched ? categories.error : ''}
                    </div>
                </div>

                <div
                    className={"form-group" + (content.touched && content.invalid ? " alert-danger" : '')}
                >
                    <label>Content</label>
                    <textarea className="form-control" {...content} />
                    <div className="text-help">
                        {content.touched ? content.error : ''}
                    </div>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }
}


function validate(values) {

    const errors = {};

    for (var field of ['title', 'categories', 'content']) {

        if (!values[field]) {
            errors[field] = `Enter a ${field}.`;
        }
    }


    return errors;
}


// reduxForm params: config, mapStateToProps, mapDispatchToProps

export default reduxForm(
    {
        form: 'NewPost',    // unique key used in the global state
        fields: ['title', 'categories', 'content'],
        validate
    },
    null,
    { createPost }
)(NewPage);