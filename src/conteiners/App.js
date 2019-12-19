import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components//Scroll';
// import { robots } from './robots';
import './App.css';


class App extends Component{
	constructor(){
		super()
		this.state ={
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(responde => responde.json())
		.then(users => this.setState({robots: users}));
		// this.setState({robots: robots});
	}

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value});
		
		// console.log(filteredRobots);
		}
		
	render(){
		const {robots, searchfield} = this.state; //ao invez de usar this.state.robots por exemplo
		const filteredRobots = robots.filter(r => {
			return r.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		if (robots.lenght ===0)
		{
			return <h1>carregando</h1>
		}
		else{
			return (
			<div className='tc'>
			<h1 className='f1'>RoboSavyfriends</h1>
			<SearchBox searchChange={this.onSearchChange}/>
			<Scroll>
			<CardList robots={filteredRobots}/>
			</Scroll>
			</div>
			);
		}
		
	}
}
export default App;