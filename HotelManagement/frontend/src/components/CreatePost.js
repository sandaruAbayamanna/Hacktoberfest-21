import React, { Component } from 'react'
import axios from 'axios';
import NavBarCus from './NavBarCus';
import feedCover from '../images/feedCover.jpg'


export default class CreatePost extends Component {

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

        const data ={
            feedbackType:feedbackType,
            serviceType:serviceType,
            dayVisited:dayVisited,
            name:name,
            email:email,
            fMessage:fMessage
        }
        console.log(data)
        //create method
        axios.post("/post/save",data).then((res)=>{
            if(res.data.success){
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

    render(){
        return(
            
           
            <div className = "container" >
            <NavBarCus/>
            <section style={{backgroundImage:`url(${feedCover})`,
            backgroundSize:'cover',
            height:'800px',
            backgroundPosition:'left',
           
         
            }}>
            <div className="col-md-8 mt-4 mx-auto">
                {/* */}
               
                <form class="needs-validation" onSubmit={this.onSubmit}>
                    <div class="form-row">
                    
                        <div class="col-md-4 mb-3">
                        <label for="validationTooltip01">First name</label>
                        <input type="text" className="form-control" name="name" id="validationTooltip01" placeholder="First name" required 
                        value={this.state.name} 
                        onChange={this.handleInputChange}/>
                        
                        </div>
                        

                        <div className="col-md-4 mb-3">
                        <label for="inputEmail4">Email</label>
                        <input type="email" className="form-control" name="email" placeholder="Email"
                        pattern="[a-zA-Z0-9._%+-]+@[a-z0-9]+\.[a-z]{2,3}"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        required
                        />
                        
                        </div>

                        <div class="col-md-4 mb-3">
                        <label for="validationTooltip01">This Feedback is a</label>
                        <input type="text" class="form-control" name="feedbackType" id="validationTooltip01" placeholder="Compliment/complain/Suggetion" required
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
                    <button class="btn btn-primary" type="submit" >Submit form</button>
                    
                    </form>
                    


            </div>
            </section>
            </div>
            
           
        )
    }
}
