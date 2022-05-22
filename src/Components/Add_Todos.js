import React, { Component } from 'react'

export default class Add_Todos extends Component {
    constructor() {
        super();

        this.state = {
            todos: [{ title: "ahmed", edit: false }, { title: "Raza", edit: false }, { title: "React", edit: false }],
            value: "",
        }
    }

    add_todo = () => {
        let obj = { title: this.state.value, edit: false }
        this.setState({
            todos: [...this.state.todos, obj],
            value: '',
        })
    }

    delete_todo = (i) => {
        this.state.todos.splice(i, 1);
        this.setState({
            todos: this.state.todos,
        })
    }
    edit_todo = (i) => {
        if (this.state.todos[i].edit == false) {
            this.state.todos[i].edit = true
            this.setState({
                todos: this.state.todos,
            })
        } else {
            this.setState({
                todos: this.state.todos,
            })
            this.state.todos[i].edit = false
        };
    }

    handleChange = (e, i) => {
        this.state.todos[i].title = e.target.value
        this.setState({
            todos: this.state.todos,
        })
    }
    render() {
        // const [todo, value] = this.state;
        return (
            <div>

                <h1>
                    Add_Todos
                </h1>

                <input onChange={(e) => { this.setState({ value: e.target.value }) }} value={this.state.value} type={"text"} style={{ height: "30px", width: "200px" }} />
                <button onClick={() => { this.add_todo() }} style={{ height: "32px", width: "70px", backgroundColor: "blue", border: "none" }}>Add</button>

                <div>
                    {this.state.todos.map((value, i) => (
                        <li key={i}>

                            {value.edit ?
                                <input type={"text"} value={value.title} onChange={(e) => { this.handleChange(e, i) }} />
                                : value.title}

                            {value.edit ? <button onClick={() => { this.edit_todo(i) }} style={{ backgroundColor: "green", border: "none", margin: "10px" }}>Update</button>
                                : <button onClick={() => { this.edit_todo(i) }} style={{ backgroundColor: "yellow", border: "none", margin: "10px" }}>Edit</button>}

                            <button onClick={() => { this.delete_todo(i) }} style={{ backgroundColor: "red", border: "none", margin: "2px" }}>Delete</button>

                        </li>
                    )
                    )}
                </div>
            </div>

        )

    }
}
