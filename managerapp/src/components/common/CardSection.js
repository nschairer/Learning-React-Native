import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
	//styling with [], style most to the right overrides styles to the left
	return (
		<View style={[styles.containerStyle, props.style]}>
			{props.children}
		</View>
	);
};

const styles = {
	containerStyle: {
		borderBottomWidth: 1,
		padding: 5,
		backgroundColor: '#FFF',
		justifyContent: 'flex-start',
		flexDirection: 'row',
		borderColor: '#ddd',
		position: 'relative'
	}
}


export { CardSection };