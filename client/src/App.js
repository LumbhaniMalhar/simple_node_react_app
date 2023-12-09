import React, { Component } from "react";
import logo from "./weather.png";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "", torontoResponse: "", jalandharResponse: "" };
    }

    callAPI(endpoint) {
        fetch(`http://localhost:9000/testAPI/${endpoint}`)
            .then(res => res.text())
            .then(res => {
                if (endpoint === "initial") {
                    this.setState({ apiResponse: res });
                }
                if (endpoint === "toronto") {
                    this.setState({ torontoResponse: res });
                } else if (endpoint === "jalandhar") {
                    this.setState({ jalandharResponse: res });
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
                    <h1 className="App-title">Get live temperature of the following cities: </h1>
                    {/* <p className="App-intro">{this.state.apiResponse}</p> */}
                    <div className="parent-button">
                        <button className="child-button" onClick={() => this.callAPI("toronto")}>
                            Toronto
                        </button>
                        <button className="child-button" onClick={() => this.callAPI("jalandhar")}>
                            Jalandhar
                        </button>
                    </div>
                    <div>
                        <p className="api-res">{this.state.torontoResponse ? `Current temperature in Toronto: ${this.state.torontoResponse}°C` : ''}</p>
                        <p className="api-res">{this.state.jalandharResponse ? `Current temperature in Jalandhar: ${this.state.jalandharResponse}°C` : ''}</p>
                    </div>
                </header>
            </div>
        );
    }
}

export default App;
