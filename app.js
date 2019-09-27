class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Header/>
                <Input/>
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>String Calculator</h1>
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
        const numbersArr = this.state.number.split(',');
        let newArr = [];
        let negativeNums = [];

        for (var i=0; i<numbersArr.length; i++){
            let string = numbersArr[i];
            let integer = parseInt(string);

            //checks if integer is a negative number
            if (integer < 0){
                negativeNums.push(integer);
            }

            //ignore numbers greater than 1000
            if (integer > 1000){
                continue;
            }
            newArr.push(integer);
        }

        if (negativeNums.length > 0){
            alert(negativeNums.length + ' negative numbers were submitted: '  + negativeNums + '\n' + 'Please enter only positive numbers.');

        } else {
            const total = newArr.reduce((a, b) => a + b, 0);
            alert('total: ' + total);
        }
        e.preventDefault();
    }

    render() {
        return (
            <div className="calculator">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" className="number-input" value={this.state.number} onChange={this.handleNumberInput} ref="best"/>
                    <button type="submit" className="btn submit-btn" value="Submit">+</button>
                </form>

                <div>
                    <p>Current input value:</p>
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
