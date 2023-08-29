import React, { Component } from 'react'

export default class Todo extends Component {
    constructor() {
        super();
        this.state = {
            tasks: [{ task: 'add your tasks', id: 1 }],
            currtask: ''
        }
    }
    handlecinput = (e) => {
        console.log(e.target.value)
        this.setState({
            currtask: e.target.value
        })

    }
    handlesubmit = () => {
        this.setState({
            tasks: [...this.state.tasks, { task: this.state.currtask, id: this.state.length }]
            , currtask: ''
        })
    }
    handledelete=(id)=>{
        let narr = this.state.tasks.filter((taskob)=>{
            return taskob.id!=id
        })
        this.setState({
                tasks:[...narr]
        })

    }
    render() {
        return (
            <div>
                <input type='text' value={this.state.currtask} onChange={this.handlecinput}></input>
                <button onClick={this.handlesubmit}>Submit</button>
                <ol>
                    {
                        this.state.tasks.map((taskob) => (
                            <li key={taskob.id}>
                                <p>{taskob.task}</p>
                                <button onClick={()=>this.handledelete(taskob.id)}>Delete</button>
                            </li>
                        ))
                    }
                </ol>
                
            </div>


        )
    }
}
