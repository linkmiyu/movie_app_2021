import {Component} from "react"; // 여러 기능이 이미 구현이 되어있기 떄문에 사용하기 편리

class App extends Component {

    constructor(props) {
        super(props)
        console.log('constructor')
    }

    componentDidMount() {
        console.log('componentDidMount')
    }

    componentDidUpdate() {
        console.log('componentDidUpdate')
    }

    state = {
        count: 0 ,
    }

    add = () => {
        this.setState({count: this.state.count + 1})
    }

    Minus = () => {
        this.setState({count: this.state.count - 1})
    }

    render() {
        console.log('render')
        return (
            <div>
                <h1>The number is: {this.state.count}</h1>
                <button onClick={this.add}>Add</button>
                <button onClick={this.Minus}>Minus</button>
            </div>
                 
        )
    }
}

export default App
