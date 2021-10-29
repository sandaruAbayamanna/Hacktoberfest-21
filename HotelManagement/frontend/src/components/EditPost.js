import React, { Component } from 'react'
import axios from 'axios';
import NavBar from './NavBar';

export default class EditPost extends Component {


    constructor(props){
        super(props);
        this.state={
            feedbackType:"",
            serviceType:"",
            dayVisited:"",
            name:"",
            email:"",
            fMessage:"",
            rate:""
        }
    }

    handleInputChange = (e)=>{
        const{name,value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }

    onSubmit = (e)=>{
        e.preventDefault();

        const{feedbackType,serviceType,dayVisited,name,email,fMessage} =this.state;
        const id = this.props.match.params.id;

        const data ={
            feedbackType:feedbackType,
            serviceType:serviceType,
            dayVisited:dayVisited,
            name:name,
            email:email,
            fMessage:fMessage
        }
        console.log(data)
        //update method
        axios.put(`/post/update/${id}`,data).then((res)=>{
            if(res.data.success){
                alert("Feedback Updated succesfully")
                this.setState({
                    
                    feedbackType:"",
                    serviceType:"",
                    dayVisited:"",
                    name:"",
                    email:"",
                    fMessage:""
                    
                })
            }
        })
    }



    //Read Method
    componentDidMount(){
        const id = this.props.match.params.id;

            axios.get(`/post/${id}`).then((res)=>{
                    if(res.data.success){
                        this.setState({
                            name:res.data.post.name,
                            email:res.data.post.email,
                            feedbackType:res.data.post.feedbackType,
                            serviceType:res.data.post.serviceType,
                            dayVisited:res.data.post.dayVisited,
                            fMessage:res.data.post.fMessage



                        });
                        console.log(this.state.post);
                    }
            });
        
    }


    render() {
        return (
            <div className = "container" >
            <NavBar/>
            <div>
                <form class="needs-validation" onSubmit={this.onSubmit}>
                    <div class="form-row">
                        <div class="col-md-4 mb-3">
                        <label for="validationTooltip01">name</label>
                        <input type="text" 
                        className="form-control" 
                        name="name" 
                        required
                        value={this.state.name}
                        onChange={this.handleInputChange}/>
                        
                        </div>
                        
                        <div class="col-md-4 mb-3">
                        <label for="inputEmail4">Email</label>
                        <input type="email" class="form-control" name="email" placeholder="Email" required
                         pattern="[a-zA-Z0-9._%+-]+@[a-z0-9]+\.[a-z]{2,3}"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        />
                        
                        </div>

                        <div class="col-md-4 mb-3">
                        <label for="validationTooltip01">This Feedback is a</label>
                        <input type="text" class="form-control" name="feedbackType" placeholder="Compliment/complain/Suggetion" required
                        value={this.state.feedbackType}
                        onChange={this.handleInputChange}
                        />
                        </div>

                        <div class="col-md-4 mb-3">
                        <label for="validationTooltip01">About Which Service</label>
                        <input type="text" class="form-control" name="serviceType" id="validationTooltip01" placeholder="Spa /Bar /Pool" required
                        value={this.state.serviceType}
                        onChange={this.handleInputChange}
                        />
                        </div>

                        <div class="col-md-3 mb-3">
                        <label for="validationTooltip04">Date You Visited</label>
                        <input type="date" class="form-control" name="dayVisited" id="validationTooltip04" placeholder="Date " required
                        value={this.state.dayVisited}
                        onChange={this.handleInputChange}
                        />
                        </div>

                        <div class="col-md-4 mb-3">
                        <label for="exampleFormControlTextarea1">Type Your Feedback Message</label>
                        <textarea class="form-control" name="fMessage" id="exampleFormControlTextarea1" rows="3"  value={this.state.fMessage} onChange={this.handleInputChange} required></textarea>
                        </div>

                    </div>
                    <button class="btn btn-primary" type="submit">Update</button>&emsp;&emsp;
                    <button type="button" className="btn btn-primary"><a href="/FeedbackHome" style={{textDecoration:'none',color:'white'}}>Back</a></button>
                    </form>


            </div>
            </div>
        )
    }
}
