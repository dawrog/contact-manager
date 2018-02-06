import * as React from "react";
import { Component } from "react";
import "./App.css";

function AppHeader() {
	return (
		<div>
			<nav className="navbar navbar-default">
				<div className="col-md-offset-4 container-fluid">
					<div className="navbar-header">
						<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
						<a className="navbar-brand" href="#">Contact List</a>
					</div>

					<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
						<ul className="nav navbar-nav">
							<li className="btn btn-default"><a href="#">Add<span class="sr-only">(current)</span></a></li>
							<li className="btn btn-default"><a href="#">Link</a></li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
}

const allUsers = ["Michal", "Kasia", "Jacek", "Marta", "Tomek", "Ania"];

class FormFilter extends React.Component {
	constructor() {
		super();    
    
		this.state = {
			filteredUsers: allUsers
		};
	}

	filterUsers(e) {
		const text = e.currentTarget.value;
		const filteredUsers = this.getFilteredUsersForText(text);
		this.setState({
			filteredUsers
		});
	}
  
	getFilteredUsersForText(text) {
		return allUsers.filter(user => user.toLowerCase().includes(text.toLowerCase()));
	}
  
	render () {
		return (
			<div>
				<input onInput={this.filterUsers.bind(this)} />
				<UsersList users={this.state.filteredUsers} />
			</div>
		);
	}
}

const UsersList = ({ users }) => {
	if (users.length > 0) {
		return (
			<ul>
				{users.map(user => <li key={user}>{user}</li>)}
			</ul>
		);
	}

	return (
		<p>No results!</p>
	);
};


class Parent extends React.Component {
	constructor(props) {
		super(props);
   
		this.state = {
			input: null,
			forwardValue: null
		};
   
		this.handleClick = this.handleClick.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
   
	handleChange(event) {
		this.setState({ input: event.target.value });
	}
   
	handleClick() {
		this.setState({ forwardValue: this.state.input });
	}
   
	render() {
		return(
			<div>
				<input onChange={this.handleChange} type="number" />
				<button onClick={this.handleClick}>Propagate to child</button>
				{this.state.forwardValue && <Child value={this.state.forwardValue}/>}
			</div>
		);
	}
}
   
class Child extends React.Component {
	constructor(props) {
		super(props);
   
		this.state = {
			fromParent: Number(props.value),
			current: Number(props.value),
		};
   
		this.handleIncrement = this.handleIncrement.bind(this);
		this.handleDecrement = this.handleDecrement.bind(this);
	}
   
	componentWillReceiveProps(nextProps) {
		if (nextProps.value != this.state.fromParent) {
			this.setState({
				fromParent: Number(nextProps.value),
				current: Number(nextProps.value),
			});
		}
	}
   
	handleIncrement() {
		this.setState({ current: this.state.current + 1 });
	}
   
	handleDecrement() {
		this.setState({ current: this.state.current - 1 });
	}
   
	render() {
		return(
			<div>
				<label>{this.state.current}</label>
				<button onClick={this.handleIncrement}>+</button>
				<button onClick={this.handleDecrement}>-</button>
			</div>
		);
	}
}

class NameCaller extends React.Component {
	constructor(props) {
		super(props);
		this.state = {fname: "",
			lname: ""};
	}

	render() {
		return (
			<div className="text-center">
				First name: <input type="text" oninput={this.output.bind(this)} />
				<output>{this.state.fname}</output>
				Last name: <input type="text" oninput={this.output.bind(this)} />
				<output>{this.state.lname}</output>
			</div>
		);
	}

}

class ClickCounter extends React.Component {
	constructor() {
		super();
		this.state = {counter: 0,
			doubleClick: 0,
			totalCount: 0};
	}

	render() {
		return (
			<div className="text-center">
				<button onClick={this.increment.bind(this)}>+1</button>
				<div onDoubleClick={this.doubleClickMachine.bind(this)}>
					<output>Kliknięcia: {this.state.counter}</output>
					<output>Suma kliknięć: {this.state.totalCount}</output>
					<output>Podwójne kliknięcia: {this.state.doubleClick}</output>
				</div>

				<button onClick={this.decrement.bind(this)}>-1</button>	
			</div>
		);	
	}	

	increment() {
		this.setState({
			counter: this.state.counter + 1,
			totalCount: this.state.totalCount + 1
		});
	}	
	decrement() {
		this.setState({
			counter: this.state.counter - 1,
			totalCount: this.state.totalCount + 1
		});
	}
	doubleClickMachine() {
		this.setState({
			doubleClick: this.state.doubleClick + 1
		});
	}
}

function ContactsList() {
	return (
		<div>
			<div className="list-group text-center">
				<ContactItem
					avatarLogin="sunbites@gmail.com"
					name="Matt"
					department="Java Developer"
				/>
				<ContactItem
					avatarLogin="admin666"
					name="Stephan"
					department="UX Design"
				/>
				<ContactItem
					avatarLogin="qwerty123"
					name="Maria"
					department="Wordpress Developer"
				/>     
			</div>
		</div>
	);
}

function ContactItem( { avatarLogin, name, department } ) {
	return (
		<div className="item">
			<a href="#" className="list-group-item">
				<UserAvatar login={avatarLogin} />
				<h4>{name}</h4> 
				<p>{department}</p>
			</a>
		</div>
	);
}
 
function UserAvatar( { login } ) {
	let imgUrl;
 
	if (login.includes("@")) {
		imgUrl = "https://78.media.tumblr.com/avatar_4ed6e2f869e8_128.pnj";

	} else {
		imgUrl = "https://78.media.tumblr.com/avatar_37cec57dd00d_128.png";

	}
	return (
		<img src={imgUrl}/>
	);
}

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<AppHeader />
				<NameCaller />
				<ContactsList />
				<ClickCounter />
			</div>
		);
	}
}

export default App;
