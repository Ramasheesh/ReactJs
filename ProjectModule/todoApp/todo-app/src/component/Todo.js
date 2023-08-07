import { Component } from "react";

class Todo extends Component{
    constructor(){
        super();
        this.state={
            tasks:["A","B",'C',"D"],
        }
    }
    render(){
        return(
           <div>
                <input type="text"/>
                <button>Add Tasks</button>
                <ul>
                    {this.state.tasks.map((ele)=>(
                        <li>
                            <p>{ele}</p>
                        </li>
                    ))}
                </ul>
               
           </div>
        )
    }
}
export default Todo;