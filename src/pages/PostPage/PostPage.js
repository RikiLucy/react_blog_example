import React, { Component } from 'react';
import { PostsService } from '../../services';


class PostPage extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      post: [],
    };
  }
  
  async componentDidMount() {
    try {
      const post = await PostsService.getPostById(this.props.match.params.id);
      this.setState({ post });
    } catch (e) {
      console.log(e);
    }
  }
  
  render() {
    const { post } = this.state;
    
    return (
      <div>
        <h2>{post.title} | {post.user && post.user.username}</h2>
        <h4>{post.body}</h4>
        <br />
        <span className="post-title">comments:</span>
        {post.comments && post.comments.map((comment, commentId) => {
          return (
            <div className="post" key={commentId}>
              <div className="post-title">
                {`${commentId + 1}. ${comment.name}`} | <b>{comment.email}</b>
              </div>
              <div className="sub-text">
                {comment.body}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default PostPage;
