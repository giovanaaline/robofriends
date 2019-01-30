import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
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
		const filteredRobots = this.state.robots.filter(r => {
			return r.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		if (this.state.robots.lenght ===0)
		{
			return <h1>carregando</h1>
		}
		else{
			return (
			<div className='tc'>
			<h1 className='f1'>RoboSavyfriends</h1>
			<SearchBox searchChange={this.onSearchChange}/>
			<CardList robots={filteredRobots}/>
			</div>
			);
		}
		
	}
}
export default App;