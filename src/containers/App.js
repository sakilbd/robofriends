import react,{Component} from 'react';
import CardList from '../components/CardList';

import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';



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
        const  {robots,serachfield} = this.state;
        
        const filterRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(serachfield.toLowerCase());
        })
        return !robots.length?
             <h1>Loading...</h1>:
            (
       
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

   


export default App;
