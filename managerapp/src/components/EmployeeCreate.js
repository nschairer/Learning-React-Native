import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions'
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
	//have to bind when callback is written within the class

	// componentWillMount() {
	// 	_.each(this.props.employee, (value, prop) => {
	// 		this.props.employeeUpdate({ prop, value });
	// 	})
	// }


	onButtonPress() {
		const { name, phone, shift } = this.props;
		this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
	}

	render() {
		return (
			<Card>
				
				<EmployeeForm {...this.props} />
				<CardSection>
					<Button onPress={this.onButtonPress.bind(this)}>
						Create
					</Button>
				</CardSection>

			</Card>
		)
	}
}



const mapStateToProps = (state) => {
	const { name, phone, shift } = state.employeeForm;
	return { name, phone, shift };
}

export default connect(mapStateToProps, { 
	employeeUpdate, employeeCreate 
})(EmployeeCreate);





