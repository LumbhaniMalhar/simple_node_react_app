import React, { Component } from "react";
import logo from "./Picture1.png";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "", subjectResponse: "", projectResponse: "" };
    }

    callAPI(endpoint) {
        fetch(`http://localhost:9000/testAPI/${endpoint}`)
            .then(res => res.text())
            .then(res => {
                if (endpoint === "initial") {
                    this.setState({ apiResponse: res });
                }
                if (endpoint === "subject") {
                    this.setState({ subjectResponse: res });
                } else if (endpoint === "project") {
                    this.setState({ projectResponse: res });
                }
            })
            .catch(err => console.error(err));
    }

    componentDidMount() {
        this.callAPI("initial");
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Web app for term project</h1>
                    <p className="App-intro">{this.state.apiResponse}</p>
                    <div className="parent-button">
                        <button className="child-button" onClick={() => this.callAPI("subject")}>
                            Get Subject details from backend
                        </button>
                        <button className="child-button" onClick={() => this.callAPI("project")}>
                            Get project details from backend
                        </button>
                    </div>
                    <div>
                        <p>{this.state.subjectResponse}</p>
                        <p>{this.state.projectResponse}</p>
                    </div>
                </header>
            </div>
        );
    }
}

export default App;
