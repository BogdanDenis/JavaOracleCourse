import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import './blog-post-thumbnail.less';

export class BlogPostThumbnail extends Component {
    static get propTypes() {
        return {
            imageUrl: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
        };
    }

    render() {
        return (
            <section className="blog-feed-post">
                <img className="blog-feed-post-image" src={this.props.imageUrl} />
                <h3 className="blog-feed-post-title">{this.props.title}</h3>
                <p className="blog-feed-post-date">{this.props.date}</p>
                <p className="blog-feed-post-text">{this.props.preview}</p>
            </section>
        );
    }
}
