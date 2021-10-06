import React from "react"
import axios from "axios"

class App extends React.Component {
    state = {
        isLoading: true,
        moives: [],
    }

    getMovies = async () => {
        const {
            data: {
                data: {moives}
            }
        } = await axios.get('https://yts-proxy.now.sh/list_movies.json')
        // const moives
        console.log(moives.data.data.moives)
    }

    componentDidMount() {
        this.getMovies()
        axios.get('https://yts-proxy.now.sh/list_movies.json')

        // setTimeout( () => {
        //     this.setState({ isLoading : false })
        // }, 6000)
    }

    render() {
        const { isLoading } = this.state
        return (
            <div>
                {isLoading ? 'Loading...' : '영화 데이터 출력'}
            </div>
        )
    }
}

export default App