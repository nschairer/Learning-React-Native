//Import library to help create a component
import React from 'react';
import {View, AppRegistry} from 'react-native';
import Header from './src/components/Header'
import AlbumList from './src/components/AlbumList'

//Create component
const App = () => (
	//flex 1 covers the view to the entire screen I believe
	<View style={{flex: 1}}>
		<Header headerText={'Albums'}/>
		<AlbumList/>
	</View>
);

//Render it to the devices
AppRegistry.registerComponent('albums', () => App);