import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PostsService } from '../../services';


class IndexPage extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      posts: [],
      newPost: {
        title: '',
        body: '',
        userId: 1,
      },
    };
  }
  
  async componentDidMount() {
    try {
      const posts = await PostsService.getPostsByUserId(1);
  
      // const getComments = (posts) => {
      //   const promises = posts.map(async (post) => {
      //     try {
      //       return await CommentsService.getCommentsByPostId(post.id);
      //     } catch (e) {
      //       console.log(e);
      //     }
      //   });
      //   return Promise.all(promises);
      // };
      
      this.setState({ posts });
    } catch (e) {
      console.log(e);
    }
  }
  
  async deletePost(id) {
    try {
      const result = await PostsService.deletePostById(id + 1);
      if (result) {
        const { posts } = this.state;
        posts.splice(id, 1);
        this.setState({ posts });
      }
    } catch (e) {
      console.log(e);
    }
  }
  
  async createPost() {
    try {
      const { newPost, posts } = this.state;
      const result = await PostsService.createPost(newPost);
      posts.push(result);
      this.setState({ posts, newPost: { userId: 1 } });
    } catch (e) {
      console.log(e);
    }
  }
  
  handleChange(e) {
    const { target: { value, name } } = e;
    const { newPost } = this.state;
    newPost[name] = value;
    this.setState({ newPost });
  }
  
  render() {
    const { posts, newPost: { title, body } } = this.state;
    
    return (
      <div>
        My blog:
        {posts.map((post, postId) => {
          return (
            <div className="post" key={postId}>
              <Link to={`/post/${post.id}`}>
                <div className="post-title">
                  {`${postId + 1}. ${post.title}`}
                </div>
              </Link>
                <div className="sub-text">
                  {post.comments && post.comments.length} comments | <span className="delete" onClick={() => this.deletePost(postId)}>delete</span>
                </div>
            </div>
          );
        })}
        <br />
        
        <div>
          <div className="post-title">
            New post
          </div>
          <div>
            <input name="title" type="text" placeholder="Title" value={title || ''} onChange={e => this.handleChange(e)} />
          </div>
          <br />
          <div>
            <textarea name="body" type="text" placeholder="Text" value={body || ''} onChange={e => this.handleChange(e)}></textarea>
          </div>
          <span className="delete" onClick={() => this.createPost()}>create</span>
        </div>
      </div>
    );
  }
}

export default IndexPage;
