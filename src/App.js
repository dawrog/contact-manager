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
							<li className="btn btn-default"><a href="#">Add<span className="sr-only">(current)</span></a></li>
							<li className="btn btn-default"><a href="#">Link</a></li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
}

class UserBox extends React.Component {
	constructor() {
	  super();
  
	  this.state = {
		filteredUsers: allUsers,
		selectedUser: null // tutaj
	  };
	}
  
	render() {
	  return (
		<div>
		  {this.state.selectedUser}
		  {/* … */}
		</div>
	  );
	}
  }

  class UserChild extends React.Component {

	onUserSelected = (selectedUser) => {
		this.setState({
		  selectedUser
		});
	  }

	render() {
		return (
		  <div>
			{/* … */}
			<UsersList userSelected={this.onUserSelected} users={this.state.filteredUsers} />
		  </div>
		);
	  }

  }

const allUsers = ['Stefan', 'Kunegunda', 'Rudolfa', 'Dawid'];

class SearchForm extends React.Component { 
	constructor(props) {
		super(props);
		this.state = {
			filteredUsers: allUsers

		}	
	}
                               
	filterUsers = (e) =>  {
		const text = e.currentTarget.value;
		this.getFilteredUsersForText(text).then(
			filteredUsers =>
			this.setState({filteredUsers:filteredUsers})
			).catch(err => console.log(err));
	}	
		
	getFilteredUsersForText(text)  {
		return new Promise(resolve => {
		  const time = (Math.random() + 1) * 250;
		  setTimeout(() => {
			const filteredUsers = allUsers.filter(user => user.toLowerCase().includes(text.toLowerCase()));
			resolve(filteredUsers);
		  }, time) ;
		});
	  }

	render() {
		return (
			<div>
				<input onInput={this.filterUsers} />
        		<UsersList users={this.state.filteredUsers} />
			</div>
		);
	}

}

const UsersList = ({ users }) => {
	return (
		<ul>
			{users.map(user => <li key={user}>{user}</li>)}
		</ul>
	);
};

class Parent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			input: null,
			addedValue: null
		};
	}

		inputChange = (action) => {
			this.setState({
				input: action.target.value
			});
		}	
		
		onButtonClick = () => {
			this.setState(state => ({ 
				addedValue: this.state.input
			}));
		}

		render() {
			return (
				<div>
					<input onChange={this.inputChange} type="number"/>
					<button onClick={this.onButtonClick}>Wyślij do Child</button>
					{this.state.addedValue && <Child value={this.state.addedValue}/>}
				</div>
			);
		}
	}
	  
class Child extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			parentNumbah: Number(props.value),
			currentNumbah: Number(props.value)
		}; 
	}

	componentWillReceiveProps = (addedProps) => {
	  if (addedProps.value != this.state.parentNumbah) {
		this.setState({
			parentNumbah: Number(addedProps.value),
			currentNumbah: Number(addedProps.value)
		});
	  }
	}	

	incrementNumbah = () => {
		this.setState({
			currentNumbah: this.state.currentNumbah + 1
		});
	}	

	decrementNumbah = () => {
		this.setState({
			currentNumbah: this.state.currentNumbah - 1
		});
	}

	render() {
		return (
			<div>
				<output>{this.state.currentNumbah}</output>
				<button onClick={this.incrementNumbah}></button>
				<button onClick={this.decrementNumbah}></button>
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
				<label htmlFor="…">First name:</label> <input oninput=                    	{this.onInputNameChange}/>		                      {this.state.fname}
				<label htmlFor="…">Last name:</label> <input oninput=
					{this.onInputNameChange}/>
				{this.state.lname}
			</div>
		);
	}

	onInputNameChange = () => {
		this.setState({
			fname: this.state.fname.target.value,
			lname: this.state.lname.target.value
		});
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
				<button onClick={this.increment}>+1</button>
				<div onDoubleClick={this.doubleClickMachine}>
					<output>Kliknięcia: {this.state.counter}</output>
					<output>Suma kliknięć: {this.state.totalCount}</output>
					<output>Podwójne kliknięcia: {this.state.doubleClick}</output>
				</div>
				<button onClick={this.decrement}>-1</button>	
			</div>
		);	
	}	

	increment = () => {
		this.setState({
			counter: this.state.counter + 1,
			totalCount: this.state.totalCount + 1
		});
	}	
	decrement = () => {
		this.setState({
			counter: this.state.counter - 1,
			totalCount: this.state.totalCount + 1
		});
	}
	doubleClickMachine = () => {
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

function ContactItem( { avatarLogin, name, department, selectedUser } ) {

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
				<Parent />
				<NameCaller />
				<SearchForm />
				<ContactsList />
				<ClickCounter />
				<UserBox />
			</div>
		);
	}
}

export default App;
