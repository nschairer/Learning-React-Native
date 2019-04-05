import React, { Component } from 'react';
//import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';//essentially middleware
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';


class App extends Component {

	componentWillMount() {
		const config = {
		    apiKey: 'AIzaSyCbF-LlGBbhdr6Pgu5aSGRkrC_9XXGWbBI',
		    authDomain: 'auth-b2211.firebaseapp.com',
		    databaseURL: 'https://auth-b2211.firebaseio.com',
		    projectId: 'auth-b2211',
		    storageBucket: 'auth-b2211.appspot.com',
		    messagingSenderId: '366204881923'
		  };
	  	firebase.initializeApp(config);
	}

	render() {
		//first argument is reducers, second is initial state, third is middleware or 'store enhancers'
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
		return (
			<Provider store={store}>
				<Router />
			</Provider>
		)
	}
}

export default App;

//mapStateToProps assigns slices of state to components so your whole app doesn't rerender for
//Each component changing?

//Don't need safeareaview with router

// <SafeAreaView flex>
// 					<LoginForm/>
// 				</SafeAreaView>