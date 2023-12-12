import React, { Component } from 'react'
import "./App.css"
import Todoitem from './components/Todoitem'

export default class App extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         input: "",
         todolist: [] 
      }
    }
    inputChange=(e)=>{
        this.setState({
          input : e.target.value  
        })
    }
    formsubmit=(e)=>{
        e.preventDefault()  
        if(this.state.input.length>0){

            this.setState({
                input:"",
                todolist: [...this.state.todolist,this.state.input]
            })
        }
    }
    
componentDidUpdate(){
    console.log(this.state.todolist);
}
update=(newItem,index)=>{
    let arr = this.state.todolist
    arr.splice(index,1,newItem)
    this.setState({
        todolist: arr
    })
}
deleteitem=(index)=>{
    let arr= this.state.todolist
    arr.splice(index,1)
    
    this.setState({
      todolist: arr
    })
}

  
    render() {
    return (
      <div>
        <h1>To-Do-LiSt</h1>
        <form onSubmit={this.formsubmit}>
            <input  className='input-box' type='text' onChange={this.inputChange} value={this.state.input}></input>
            <button className='add'>ADD</button>
        </form> 
        <p>{this.state.input}</p>
        <div className='todolist'>
            <h2>List</h2>
            {this.state.todolist.length==0 ? <h1>List is empty</h1> :
        (this.state.todolist.map((e,i)=>{
                return <Todoitem e={e} i={i} deleteitem={this.deleteitem} update={this.update} />
            }))}
        </div>

      </div>
    )
  }
}
