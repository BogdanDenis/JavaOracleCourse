import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import { BlogPostThumbnail } from '../';

import './blog-post-thumbnail-list.less';

export class BlogPostThumbnailList extends Component {
    render() {
        return (
            <section className="blog-feed">
                <h2 class="blog-feed-header">Looking for inspiration? Join us @bymolle</h2>
                {
                    this.props.blogPosts.map((blogPost, index) => {
                        return (
                            <BlogPostThumbnail
                                title={blogPost.title}
                                date={blogPost.date}
                                preview={blogPost.preview}
                                imageUrl={blogPost.imageUrl}
                            />
                        );
                    })
                }
            </section>
        );
    }
}