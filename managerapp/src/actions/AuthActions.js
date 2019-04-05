import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { 
	EMAIL_CHANGED, 
	PASSWORD_CHANGED,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAIL,
	LOGIN_USER
} from './types';

export const emailChanged = (text) => {
	return {
		type: EMAIL_CHANGED,
		payload: text
	}
}

export const passwordChanged = (text) => {
	return {
		type: PASSWORD_CHANGED,
		payload: text
	}
}

export const loginUser = ({ email, password}) => {
	//returns function, then we wait for async function
	//upon return we call dispatch to send action to application
	//can dispatch as many actions as we would like from one dispatch method
	return (dispatch) => {
		dispatch({ type: LOGIN_USER });

		firebase.auth().signInWithEmailAndPassword(email,password)
			.then(user => loginUserSuccess(dispatch, user))
			.catch(() => {
				firebase.auth().createUserWithEmailAndPassword(email, password)
					.then(user => loginUserSuccess(dispatch, user))
					.catch(() => loginUserFail(dispatch))
			})
	}
}

const loginUserFail = (dispatch) => {
	dispatch({ type: LOGIN_USER_FAIL })
}

const loginUserSuccess = (dispatch, user) => {
	dispatch({
		type: LOGIN_USER_SUCCESS,
		payload: user
	});

	//navigates to scene with key employeeList
	Actions.main();

}









