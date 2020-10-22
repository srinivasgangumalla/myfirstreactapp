import React, { Component } from 'react';

class MyCalculator extends Component {
  operations = [];
  constructor(props) {
    super(props);
    this.state = {
      num1: 1,
      num2: 2,
      num3: 3,
      num4: 4,
      num5: 5,
      num6: 6,
      num7: 7,
      num8: 8,
      num9: 9,
      num0: 0,
      result: 0,
      test: 0,
      temp: 0,
      option: ''
    }
  }
  // evt is event that is occured on HTML element
  // num1Change=(evt)=> {
  //     this.setState({num1: evt.target.value});
  // }
  // num2Change(evt) {
  //     this.setState({num2: evt.target.value});
  // }

  handleInputChange = (evt) => {
    // update all state properties based on 
    // 'name' received from HTML elements
    // [evt.target.name]: return the array of elements 
    // based on 'name' attribute
    // setState() method will update the state property
    // by matching its name with 'name' of element
    // this.setState({[evt.target.name]:evt.target.value});  

    this.setState({ temp: parseInt(evt.target.value) })
    this.setState({ test: parseInt(this.state.test) + parseInt(evt.target.value) });

  }



  // ES 6 function expression
  add = () => {
    //let result = parseInt(this.state.num1) + parseInt(this.state.num2);
    //let test = this.stack;
    //this.setState({result:result});
    let result = this.state.test;
    //alert(result)
    this.setState({ result: result });
    //this.setState({test:tempvalue});
  }
  subst = () => {
    this.state.option = '-';

  }
  mul = () => {
    let result = parseInt(this.state.num1) * parseInt(this.state.num2);
    this.setState({ result: result });
  }
  div = () => {
    let result = parseInt(this.state.num1) / parseInt(this.state.num2);
    this.setState({ result: result });
  }
  equal = () => {
    if (this.state.option == '-') {
      let result = parseInt(this.state.test) - parseInt(this.state.temp);
      this.setState({ result: result });
    }
    //let result = parseInt(this.state.num1) + parseInt(this.state.num2);
    //this.setState({result:result});

  }

  render() {
    return (
      <div className="container">
        <h2>My Calculator</h2>
        <table><tbody>
          <tr><td width="182">
            <input type="text"  className="form-control"
              value={this.state.test} readOnly
            />
          </td></tr>
        </tbody>
        </table>
        <table>
          <tbody>
            <tr>
              <td>
                <input type="button" className="btn btn-success"
                  value={this.state.num1}
                  name="num1"
                  onClick={this.handleInputChange.bind(this)}
                />
              </td>
              <td>
                <input type="button" className="btn btn-success"
                  value={this.state.num2}
                  name="num2"
                  onClick={this.handleInputChange.bind(this)}
                />
              </td>
              <td>
                <input type="button" className="btn btn-success"
                  value={this.state.num3}
                  name="num3"
                  onClick={this.handleInputChange.bind(this)}
                />

              </td>
              <td>

                <input type="button" className="btn btn-success"
                  value={this.state.num4}
                  name="num4"
                  onClick={this.handleInputChange.bind(this)}
                />

              </td>
              <td>

                <input type="button" className="btn btn-success"
                  value={this.state.num5}
                  name="num5"
                  onClick={this.handleInputChange.bind(this)}
                />

              </td>

            </tr>
            <tr>
              <td>

                <input type="button" className="btn btn-success"
                  value={this.state.num6}
                  name="num6"
                  onClick={this.handleInputChange.bind(this)}
                />

              </td>
              <td>

                <input type="button" className="btn btn-success"
                  value={this.state.num7}
                  name="num7"
                  onClick={this.handleInputChange.bind(this)}
                />

              </td>
              <td>

                <input type="button" className="btn btn-success"
                  value={this.state.num8}
                  name="num8"
                  onClick={this.handleInputChange.bind(this)}
                />
              </td>
              <td>

                <input type="button" className="btn btn-success"
                  value={this.state.num9}
                  name="num9"
                  onClick={this.handleInputChange.bind(this)}
                />
              </td><td>

                <input type="button" className="btn btn-success"
                  value={this.state.num0}
                  name="num0"
                  onClick={this.handleInputChange.bind(this)}
                />

              </td>

            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>
              <td>
                <input type="button" value="+" className="btn btn-danger"
                  onClick={this.add.bind(this)} />
              </td>
              <td>
                <input type="button" value="-" className="btn btn-danger"
                  onClick={this.subst.bind(this)} readOnly />
              </td>
              <td>
                <input type="button" value="x" className="btn btn-danger"
                  onClick={this.mul.bind(this)} readOnly />
              </td>
              <td>
                <input type="button" value="/" className="btn btn-danger"
                  onClick={this.div.bind(this)} readOnly />
              </td>
              <td>
                <input type="button" value="=" className="btn btn-danger"
                  onClick={this.equal.bind(this)} readOnly />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default MyCalculator;