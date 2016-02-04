import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { fetchPost, deletePost } from '../actions/index';



class Post_Page extends Component {

    constructor(props) {
        super(props);

        this.onDeleteClick = this.onDeleteClick.bind(this);
    }

    static contextTypes = {
        router: PropTypes.object
    };

    componentWillMount() {
        this.props.fetchPost(this.props.params.id);
    }

    onDeleteClick() {
        this.props.deletePost(this.props.params.id)
            .then(() => {
                this.context.router.push('/')
            });
    }

    render() {

        const { post } = this.props;

        if (!post) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <Link to="/"> Back to Index </Link>

                <button
                    className="btn btn-danger pull-right"
                    onClick={this.onDeleteClick}
                >
                    Delete Post
                </button>

                <h3> {post.title} </h3>
                <h6> Categories: {post.categories} </h6>
                <p> {post.content} </p>
            </div>

        );
    }
}


export default connect(
    state => { return {post: state.posts.active} },
    { fetchPost, deletePost })(Post_Page);