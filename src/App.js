import react,{Component} from 'react';
import CardList from './CardList';
import {robots} from './robots';
import SearchBox from './SearchBox';



class App extends Component{
    constructor(){
        super();
        this.state={
            robots:robots,
            serachfield:''
        }
    }

    onSearchChange = (event) => {
       this.setState({serachfield: event.target.value})
    }
    render(){
        const filterRobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.serachfield.toLowerCase());
        })
        return (
            <div className="tc">
                <h1>Robo Friends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={filterRobots}/>
            </div>
    
        );
    } 
}
   


export default App;
