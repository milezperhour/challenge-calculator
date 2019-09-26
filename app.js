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
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
