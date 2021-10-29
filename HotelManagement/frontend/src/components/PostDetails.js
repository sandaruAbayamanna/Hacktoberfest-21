import React, { Component } from 'react'
import axios from 'axios'
import NavBar from './NavBar';

export default class PostDetails extends Component {
    constructor(props){
        super(props);

        this.state={
            post:{}
        };
    }
    componentDidMount(){
        const id = this.props.match.params.id;

            axios.get(`/post/${id}`).then((res)=>{
                    if(res.data.success){
                        this.setState({
                            post:res.data.post
                        });
                        console.log(this.state.post);
                    }
            });
        
    }
    render() {
        const {feedbackType,serviceType,dayVisited,name,email,fMessage}=this.state.post;
        return (
          <div className = "container" >
          <NavBar/>
        <div style={{marginTop:'20px'}}>
          <h4>{name}</h4><br/>
    
      <dl class="row">
      <dt class="col-sm-3">Feedback Type</dt>
      <dd class="col-sm-9">{feedbackType}</dd>
    
      <dt class="col-sm-3">Date</dt>
      <dd class="col-sm-9">{dayVisited}</dd>
    
      <dt class="col-sm-3">Email</dt>
      <dd class="col-sm-9">{email}</dd>
    
      <dt class="col-sm-3">Message</dt>
      <dd class="col-sm-9">{fMessage}</dd>
    
      </dl>
    
        </div>
        </div>
    
        )
        
      }
}
