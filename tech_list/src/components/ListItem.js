import React, { Component } from 'react';
import { 
	Text, 
	TouchableWithoutFeedback, 
	View,
	LayoutAnimation 
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';
//* as actions means all of them as an object called actions
class ListItem extends Component {

	componentWillUpdate() {
		LayoutAnimation.configureNext({
			duration:200,
			create:{
				type: LayoutAnimation.Types.linear,
				property: LayoutAnimation.Properties.opacity
			},
			update:{
				type: LayoutAnimation.Types.curveEaseInEaseOut
			}
		});
	}


	renderDescription() {
		const { library, expanded } = this.props;
		if (expanded) {
			return (
				<CardSection>
					<Text style={{flex:1}}>
						{library.item.description}
					</Text>
				</CardSection>
			)
		}
	}


	render() {
		const { titleStyle } = styles;
		const { id, title } = this.props.library.item;

		return (
			<TouchableWithoutFeedback
				onPress={() => this.props.selectLibrary(id)}
			>
				<View>
					<CardSection>
						<Text style={titleStyle}>
							{title}
						</Text>
					</CardSection>
					{this.renderDescription()}
				</View>
			</TouchableWithoutFeedback>
		)
	}
}


const styles = {
	titleStyle: {
		fontSize: 18,
		paddingLeft: 15
	}
}

//ownprops is props passed to components
const mapStateToProps = (state, ownProps) => {
	const expanded = state.selectedLibraryId === ownProps.library.item.id;
	return { expanded };
}

//first argument is for mapstatetoprops, passes state as props
//second argument is for actions object, passes action creators as props
//automatically dispatches actions for you
export default connect(mapStateToProps, actions)(ListItem);
