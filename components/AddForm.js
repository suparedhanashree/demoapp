
import React from 'react'
class AddForm extends React.Component{
    constructor(){
        super();
        this.state={
            message:'',
            dataObj:{
                name:'',
                email:'',
                password:'',
                age:''
            
            },
           
        }
       
        
    }
    fnSignup(){
      

    }
    // fnOnChange(eve){
    //     const {name,value,type,checked} =eve.target
    //     this.setState({
    //         dataObj:{
    //             ...this.state.dataObj,
    //             [name]:value
    //         }
    //     })
    //   }

    onCreateEmployee=()=>{
        let empInfo={
            name:this.ref.name.value,
            email:this.ref.email.value,
            password:this.ref.password.value,
            age:this.ref.age.value,

        };
        fetch('https://api-nodejs-todolist.herokuapp.com/user/register',{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(empInfo)
        }).then(r=>r.json).then(res=>{
            if(res)
            {
                this.setState({message:'New success'});
            }
        })
    }
    
    componentDidMount(){
       //AJAX
     //  this.fnGetStudents()

    }
 
    render(){
        const {name,uid,pwd} =this.state.dataObj;
        return <div>
            <h1>Sign up</h1>
            <p>
                <b>Name:</b><input name="name"  ref="name" />
            </p>
            <p>
                <b>Uid:</b><input name="email"  ref="email" />
            </p>
            <p>
                <b>Uid:</b><input name="password"  ref="password" />
            </p>
            <p>
                <b>Uid:</b><input name="age"  ref="age" />
            </p>
           
            <button onClick={this.onCreateEmployee} >Signup</button>
            <p>{this.state.message}</p>
            </div>
    }
}
export default AddForm;
