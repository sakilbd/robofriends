import react,{Component} from 'react';
import CardList from './CardList';
import {robots} from './robots';
import SearchBox from './SearchBox';
import Scroll from './Scroll';



class App extends Component{
    constructor(){
        super();
        this.state={
            robots:[],
            serachfield:''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users =>this.setState({robots:users}));
    }

    onSearchChange = (event) => {
       this.setState({serachfield: event.target.value})
    }
    render(){
        const filterRobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.serachfield.toLowerCase());
        })
        if(this.state.robots.length === 0){
            return <h1>Loading...</h1>

        }
        else{
            return (
                <div className="tc">
                    <h1>Robo Friends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList robots={filterRobots}/>
                    </Scroll>
                    
                </div>
        
            );
        }
       
    } 
}
   


export default App;
