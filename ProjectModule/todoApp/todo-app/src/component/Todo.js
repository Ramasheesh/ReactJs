import { Component } from "react";

class Todo extends Component{
    constructor(){
        super();
        this.state={
            // tasks:[{task:"A",id:"1"},{task:"B",id:"2"}],
            tasks:[],
            currentTask:""
        }
    }
    handleChange = (ele)=>{
       this.setState({
        currentTask: ele.target.value
       })
    }
    handleAddTask = ()=>{
        this.setState({
            tasks: [...this.state.tasks ,{task: this.state.currentTask , id: this.state.tasks.length+1}],
            currentTask:""
        })
    }
    handeDelete = (id)=>{
        let newArr = this.state.tasks.filter((taskObj) =>{
            return taskObj.id !== id;
           })
           this.setState({
            tasks: [...newArr]
           })
        }
    render(){
        return(
           <div>
                <input type="text" value={this.state.currentTask} onChange = {this.handleChange}/>
                <button onClick={this.handleAddTask}>Add Tasks</button>
                <ul>
                    {this.state.tasks.map((taskObj)=>(
                        <li id={taskObj.id}>
                            <p>{taskObj.task}</p>
                            <button onClick={ ()=> this.handeDelete(taskObj.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
               
           </div>
        )
    }
}
export default Todo;