import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PostsService } from '../../services';


class AllPostsPage extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      posts: [],
    };
  }
  
  async componentDidMount() {
    try {
      const posts = await PostsService.getAllPosts();
      this.setState({ posts });
    } catch (e) {
      console.log(e);
    }
  }
  
  render() {
    const { posts } = this.state;
    
    return (
      <div>
        All posts:
        {posts.map((post, postId) => {
          return (
            <div className="post" key={postId}>
              <Link to={`/post/${post.id}`}>
                <div className="post-title">
                  {`${postId + 1}. ${post.title}`} | <b>{post.user.username} </b>
                </div>
                <div className="sub-text">
                  {post.comments.length} comments
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default AllPostsPage;
