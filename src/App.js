import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Info from "./components/info";

function Username(props) {
  return (
    <p
      onClick={() => {
        props.nameClickHandler(props.username);
      }}
    >
      {props.username}
    </p>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      elements: [],
      message: ""
    };
  }

  changeName() {
    this.setState({
      name: "Anna"
    });
  }

  addElement() {
    const oldElements = this.state.elements;
    this.setState({
      elements: oldElements.concat(oldElements.length + 1)
    });
  }

  changeMessageInput(event) {
    this.setState({
      message: event.target.value
    });
  }

  userWasClicked(username) {
    alert(username);
  }

  render() {
    let updateParagraph = "";
    let nameParagraphClass = "";
    if (this.state.name != this.props.name) {
      updateParagraph = <p>Name updated!</p>;
      nameParagraphClass = "updated";
    }

    let list = this.state.elements.map(element => {
      const liStyle = { backgroundColor: element % 2 === 0 ? "red" : "green" };
      return (
        <li key={element} style={liStyle}>
          {element}
        </li>
      );
    });

    return (
      <div>
        <Username username="Chris" nameClickHandler={this.userWasClicked} />
        <Username username="Anna" nameClickHandler={this.userWasClicked} />
        <p className={nameParagraphClass}>{this.state.name}</p>
        {updateParagraph}
        <button onClick={this.changeName.bind(this)}>Change Name</button>
        <button onClick={this.addElement.bind(this)}>New Element</button>
        <ul>{list}</ul>
        <input
          type="text"
          value={this.state.message}
          onChange={this.changeMessageInput.bind(this)}
        />
        <p>{this.state.message}</p>
      </div>
      // <div className="App">
      //   <Info/>
      // </div>
    );
  }
}

export default App;
