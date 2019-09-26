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

    handleNumberInput(e) {
        this.setState({
          number: e.target.value
        });
    }

    handleSubmit(e) {
        alert('A number was submitted: ' + this.state.number);
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Enter number: </label>
                    <input type="text" value={this.state.number} onChange={this.handleNumberInput} />
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
