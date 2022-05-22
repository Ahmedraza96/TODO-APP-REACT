import React, { Component } from 'react'

export default class Todo_List extends Component {
    render() {
        return (
            <div>
                <h1>
                    Todo_List
                </h1>

                <div>
                    <form>
                        <input type={'text'} />
                        <input type={'submit'} onSubmit="" />
                    </form>
                </div>

            </div>
        )
    }
}
