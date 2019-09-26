class App extends React.Component {
    render() {
        return (
            <div>
                <Input/>
            </div>
        );
    }
}

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {number: ''};
    this.handleNumberInput = this.handleNumberInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNumberInput() {
  }

  handleSubmit() {
  }

  render() {
    return (
      <div>
          <form>
            <label>Enter number: </label>
            <input type="text" />
            <input type="submit" value="Submit" />
          </form>

          <div>
            <p>The number input value:</p>
            <p>{this.state.number}</p>
          </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
