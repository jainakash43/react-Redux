import React from "react";
import ReactDOM from "react-dom";
import logo from './logo.svg';
import { Component } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import AgeStats from "./AgeStats";
import moment from "moment";
import './App.css';

class App extends Component {

    constructor() {
        super();
        this.state = {
            newDate: " ",
            showStats: false
        }
    }

    changeBirthday() {
        console.log(this.state);
    }
    render() {
        return (
            <div className="App">
                <h2>Input Your BirthDay </h2>
                <Form inline>
                    <FormControl type="date" onChange={event => this.setState({ newDate: event.target.value, showStats: !this.state.showStats })} max={moment().format("YYYY-MM-DD")} >
                    </FormControl>
                    {"  "}
                    <Button onClick={() => this.changeBirthday()} >
                        Submit
                    </Button>
                </Form>
                {this.state.showStats ?
                    <div className="fade age-stats">
                        <AgeStats date={this.state.newDate} />
                        </div>
                    : <div></div>
                    }
             </div>


        );
    }


}

export default App;
