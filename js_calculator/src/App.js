
import React from 'react';
import './App.css';


function containsOperator(preview) {
  let hasOperator = 
         preview.toString().endsWith(' * ') || 
         preview.toString().endsWith(' / ') || 
         preview.toString().endsWith(' - ') || 
         preview.toString().endsWith(' + ');

  return hasOperator;
}

function replaceOperator(preview, operator) {
  if (containsOperator(preview)) {
    return preview.substr(0, preview.length - 3) + operator;
  }
  return preview + operator;
}

class App extends React.Component {

  constructor(props) {
    
    super(props);
    
    this.state = {
      input: 0,
      firstOperand: undefined,
      secondOperand: undefined,
      operation: '',
      preview: ''
    }

    this.handleNumberClick = this.handleNumberClick.bind(this);
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
    this.handleClick4 = this.handleClick4.bind(this);
    this.handleClick5 = this.handleClick5.bind(this);
    this.handleClick6 = this.handleClick6.bind(this);
    this.handleClick7 = this.handleClick7.bind(this);
    this.handleClick8 = this.handleClick8.bind(this);
    this.handleClick9 = this.handleClick9.bind(this);
    this.handleClick0 = this.handleClick0.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleDot = this.handleDot.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleEquals = this.handleEquals.bind(this);
    this.handleSubtract = this.handleSubtract.bind(this);
    this.handleMultiply = this.handleMultiply.bind(this);
    this.handleDivide = this.handleDivide.bind(this);
  }

  handleClear() {
    this.setState({ input: 0, preview: '' });
  }

  handleDot() {
    if (this.state.input.toString().indexOf(".") === -1) {
      this.setState({ 
        input: this.state.input.toString() + ".", 
        preview: this.state.preview + '.'
      });
    }
  }

  handleNumberClick(number) {
    if (this.state.input === 0) {
      this.setState({ input: number, preview: this.state.preview + number.toString() });
    } else {
      if (! this.state.input.toString().indexOf(".") !== -1) {
        this.setState({ 
          input: this.state.input.toString() + number.toString(),
          preview: this.state.preview + number.toString().toString()
        })
      } else {
        this.setState({ 
          input: parseInt(this.state.input.toString() + number.toString()),
          preview: this.state.preview + parseInt(number.toString()).toString()
        })
      }
    }
  }

  handleClick1() {
    this.handleNumberClick(1);
  }
  
  handleClick2() {
    this.handleNumberClick(2);
  }
  
  handleClick3() {
    this.handleNumberClick(3);
  }
  
  handleClick4() {
    this.handleNumberClick(4);
  }
  
  handleClick5() {
    this.handleNumberClick(5);
  }
  
  handleClick6() {
    this.handleNumberClick(6);
  }

  handleClick7() {
    this.handleNumberClick(7);
  }

  handleClick8() {
    this.handleNumberClick(8);
  }
  
  handleClick9() {
    this.handleNumberClick(9);
  }
  
  handleClick0() {
    this.handleNumberClick(0);
  }

  handleAdd() {
      this.setState({ 
        firstOperand: this.state.input, 
        input: '', 
        operation: '+',
        preview: replaceOperator(this.state.preview, ' + ')
      });
  }

  handleSubtract() {
      this.setState({ 
        firstOperand: this.state.input, 
        input: '', 
        operation: '-',
        preview: replaceOperator(this.state.preview, ' - ')
      });
  }
  
  handleMultiply() {
      this.setState({ 
        firstOperand: this.state.input, 
        input: '', 
        operation: '*',
        preview: replaceOperator(this.state.preview, ' * ') 
      });
  }

  handleDivide() {
      this.setState({ 
        firstOperand: this.state.input, 
        input: '', 
        operation: '/',
        preview: replaceOperator(this.state.preview, ' / ') 
      });
  }


  handleEquals() {
    
    let result = eval(this.state.preview);

    try {
      this.setState({
        input: result,
        preview: result
      });
    } catch(err) {
      this.setState({
        input: 'ERROR',
        preview: result
      });
    }
  }

  render() {
    return (
      <div className="App">
        <table>
          <tbody>
            <tr>
              <td id="preview" colSpan="4">
                {this.state.preview}
              </td>
            </tr>
            <tr>
              <td id="display" colSpan="4">
                {this.state.input}
              </td>
            </tr>
            <tr>
              <td className="clearButton" onClick={this.handleClear} id="clear" colSpan="2">AC</td>
              <td onClick={this.handleDivide} className="operationButton" id="divide">/</td>
              <td onClick={this.handleMultiply} className="operationButton" id="multiply">X</td>
            </tr>
            <tr>
              <td className="numberButton" onClick={this.handleClick7} id="seven">7</td>
              <td className="numberButton" onClick={this.handleClick8} id="eight">8</td>
              <td className="numberButton" onClick={this.handleClick9} id="nine">9</td>
              <td onClick={this.handleSubtract} className="operationButton" id="subtract">-</td>
            </tr>
            <tr>
              <td className="numberButton" onClick={this.handleClick4}id="four">4</td>
              <td className="numberButton" onClick={this.handleClick5}id="five">5</td>
              <td className="numberButton" onClick={this.handleClick6}id="six">6</td>
              <td onClick={this.handleAdd} className="operationButton" id="add">+</td>
            </tr>
            <tr>
              <td className="numberButton"  onClick={this.handleClick1} id="one">1</td>
              <td className="numberButton"  onClick={this.handleClick2} id="two">2</td>
              <td className="numberButton"  onClick={this.handleClick3} id="three">3</td>
              <td onClick={this.handleEquals} id="equals" rowSpan="2">=</td>
            </tr>
            <tr>
              <td className="zeroButton" onClick={this.handleClick0} id="zero" colSpan="2">0</td>
              <td onClick={this.handleDot} id="decimal">.</td>
            </tr>
          </tbody>
        </table>
      </div>
    );  
  }
}

export default App;
