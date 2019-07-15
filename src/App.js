import React, {Component} from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      textColor: 'blue',
    }
  }

  handleClick = (e) => {
    this.changeColor();
  }

  changeColor = () => {
    let letters = '0123456789ABCDEF';
    let newColor = '#';
    for (var i = 0; i < 6; i++) {
      newColor += letters[Math.floor(Math.random() * 16)];
    };
    this.setState({
      textColor: newColor,
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 style={{color: this.state.textColor}}>Hello World</h1>
          <button onClick={this.handleClick}>Click me!</button>
        </header>
      </div>
    );
  }
}

export default App;
