import React, { Component } from 'react';
import {ScrollView} from 'react-native';
import AlbumDetail from './AlbumDetail'

class AlbumList extends Component {
	//only requirement of class based components is that you return some JSX in the render method

	//initialize state
	//state is for internal record keeping
	//props are for child to parent vice versa communication
	state = { albums: [] };


	componentWillMount() {
		return fetch('https://rallycoding.herokuapp.com/api/music_albums')
			.then((response) => response.json())
			.then((responseJson) => {
				//This is the ONLY way you can set the state for the component
				//When you call this.setState, the component automatically calls render
				this.setState({
					albums: responseJson
				});
			});
	}

	renderAlbums() {
		return this.state.albums.map(album => 
			//Typically just use an id for the key
			<AlbumDetail key={album.title} album={album}/>
		);
	}


	render() {
		console.log(this.state);

		return (
			//THIS IS JSX
			<ScrollView>
				{this.renderAlbums()}
			</ScrollView>
		);
	}
};



export default AlbumList