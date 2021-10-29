import React from "react";
import ReactToPrint from "react-to-print";
import axios from 'axios';
import NavBar from './NavBar';

const thStyle = {
  fontFamily: "Anton",
  fontWeight: "normal",
  fontStyle: "normal"
};

class ComponentToPrint extends React.Component {
    
    constructor(props) {
        super(props);
    
        this.state = {
          posts: []
        };
    
      }
    
      componentDidMount() {
        this.retrievePosts();
      }
    
      retrievePosts() {
        axios.get("/posts").then(res => {
          if (res.data.success)
            this.setState({
              posts: res.data.existingPosts
            });
          console.log(this.state.posts);
    
        });
      }
  
    render() {
    return (
        <div className="container">
        <NavBar />
        <div className="row">
          <div className="col-lg-9 mt-2 mb-2">
            <h4>All posts</h4>
          </div>
        
        </div>



        <p>Admin Page</p>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">DayVisited</th>
              <th scope="col">FeedbackType</th>
              <th scope="col">Message</th>
              
            </tr>

          </thead>
          <tbody>
            {this.state.posts.map((posts, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>
                  <a  style={{ textDecoration: 'none' }}>
                    {posts.name}
                  </a>
                </td>
                <td>{posts.email}</td>
                <td>{posts.dayVisited}</td>
                <td>{posts.feedbackType}</td>
                <td>{posts.fMessage}</td>
                

              </tr>
            ))}
          </tbody>


        </table>

        
      </div>
    );
  }
}

class Example extends React.Component {
  render() {
    return (
      <div>
        <ReactToPrint
          trigger={() => <button type="button" className="btn btn-dark" style={{color:'white', width:'12%',float: 'right', transform: 'translate(-100%,260%)' }}>Print this out!</button>}
          content={() => this.componentRef}
        />
        <ComponentToPrint ref={(el) => (this.componentRef = el)} />
      </div>
    );
  }
}

export default Example;