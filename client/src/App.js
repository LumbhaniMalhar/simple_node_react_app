import React, { Component } from "react";
import logo from "./sd-photo.jpeg";
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
                if (endpoint === "profile") {
                    this.setState({ subjectResponse: res });
                } else if (endpoint === "hobbies") {
                    this.setState({ projectResponse: res });
                }
            })
            .catch(err => console.error(err));
    }

    // componentDidMount() {
    //     this.callAPI("initial");
    // }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Sneashish Das portfoloio</h1>
                    {/* <p className="App-intro">{this.state.apiResponse}</p> */}
                    <div className="parent-button">
                        <button className="child-button" onClick={() => this.callAPI("profile")}>
                            My profile Summary
                        </button>
                        <button className="child-button" onClick={() => this.callAPI("hobbies")}>
                            My hobbies
                        </button>
                    </div>
                    <div>
                        <p className="api-res">{this.state.subjectResponse}</p>
                        <p className="api-res">{this.state.projectResponse}</p>
                    </div>
                </header>
            </div>
        );
    }
}

export default App;
