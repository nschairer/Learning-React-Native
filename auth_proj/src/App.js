import firebase from 'firebase';
import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {

	state = { loggedIn: null };

	componentWillMount(){
		//Automatically invoked --lifecylce method
		firebase.initializeApp({
			
		});

		//Called everytime we sign in or sign out
		firebase.auth().onAuthStateChanged((user) => {
			if(user) {
				this.setState({ loggedIn: true });
			} else {
				this.setState({ loggedIn: false });
			}
		});
	}

	renderContent() {
		switch(this.state.loggedIn) {
			case true:
				return (
					<Button onPress={() => firebase.auth().signOut()}>
					Log Out
					</Button>
				);
			case false:
				return <LoginForm />
			default:
				return <Spinner size='large'/>
		}
	}

	render() {
		return (
			<View>
				<Header headerText='Authentication'/>
				{this.renderContent()}
			</View>
		)
	}
}

export default App;