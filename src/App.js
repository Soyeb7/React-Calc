import React, {Component} from 'react';
import Button from './components/Buttons'


class App extends Component {
  
  constructor(props) {
  super(props);

  this.state = {
    current: '',
    previous: []
  }
}

reset = () => {
  this.setState({results: '0'});
}

addToCurrent = (symbol) => {
  this.setState({current: this.state.current + symbol});
}


  render() {
    const buttons = [
      {symbol: 'C', cols:3, action: this.reset},
      {symbol: '/', cols: 1, action: this.addToCurrent},
      {symbol: '7', cols: 1, action: this.addToCurrent},
      {symbol: '8', cols: 1, action: this.addToCurrent},
      {symbol: '9', cols: 1, action: this.addToCurrent},
      {symbol: '*', cols: 1, action: this.addToCurrent},
      {symbol: '4', cols: 1, action: this.addToCurrent},
      {symbol: '5', cols: 1, action: this.addToCurrent},
      {symbol: '5', cols: 1, action: this.addToCurrent},
      {symbol: '-', cols: 1, action: this.addToCurrent},
      {symbol: '1', cols: 1, action: this.addToCurrent},
      {symbol: '2', cols: 1, action: this.addToCurrent},
      {symbol: '3', cols: 1, action: this.addToCurrent},
      {symbol: '+', cols: 1, action: this.addToCurrent},
      {symbol: '0', cols: 2, action: this.addToCurrent},
      {symbol: '.', cols: 1, action: this.addToCurrent},
      {symbol: '=', cols: 1, action: this.addToCurrent},

      
    ];
  return (
      <div className="App">
        <input className="result" type="text" value={this.state.current}>
        </input>

      {buttons.map((btn, i) => {
        return <Button symbol={btn.symbol} cols={btn.cols} action={(
          symbol) => btn.action}></Button>
      })}

      </div>
    );
  }
}
 

export default App;
