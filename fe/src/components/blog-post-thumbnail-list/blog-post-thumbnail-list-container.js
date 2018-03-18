import { connect } from 'react-redux';

import { BlogPostThumbnailList } from './blog-post-thumbnail-list';

const mapStateToProps = state => ({
    blogPosts: state.thumbnails.blogPosts,
});

const mapDispatchToProps = {};

export const BlogPostThumbnailListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(BlogPostThumbnailList);
