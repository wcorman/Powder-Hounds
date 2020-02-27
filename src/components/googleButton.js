import React, { Component } from 'react';
import { Auth } from 'aws-amplify';
import { GoogleLoginButton } from 'react-social-login-buttons';

// To federated sign in from Google
export default class SignInWithGoogle extends Component {
	constructor(props) {
		super(props);
		this.signIn = this.signIn.bind(this);
	}

	componentDidMount() {
		const ga = window.gapi && window.gapi.auth2 ? window.gapi.auth2.getAuthInstance() : null;
		if (!ga) this.createScript();
	}

	signIn() {
		const ga = window.gapi.auth2.getAuthInstance();
		ga.signIn().then(
			(googleUser) => {
				this.getAWSCredentials(googleUser);
			},
			(error) => {
				console.log(error);
			}
		);
	}

	async getAWSCredentials(googleUser) {
		const { id_token, expires_at } = googleUser.getAuthResponse();
		const profile = googleUser.getBasicProfile();
		let user = {
			email: profile.getEmail(),
			name: profile.getName()
		};

		const credentials = await Auth.federatedSignIn('google', { token: id_token, expires_at }, user);
		console.log('credentials', credentials);
	}

	createScript() {
		// load the Google SDK
		const script = document.createElement('script');
		script.src = 'https://apis.google.com/js/platform.js';
		script.async = true;
		script.onload = this.initGapi;
		document.body.appendChild(script);
	}

	initGapi() {
		// init the Google SDK client
		const g = window.gapi;
		g.load('auth2', function() {
			g.auth2.init({
				client_id: '377403418372-uajrtl2a7ko17e875ne0hdfkqcfl1v38.apps.googleusercontent.com',
				// authorized scopes
				scope: 'profile email openid'
			});
		});
	}

	render() {
		return (
			<div>
				<GoogleLoginButton style={{ height: '43px', fontSize: '18px' }} onClick={this.signIn}>
					<span>Continue with Google</span>
				</GoogleLoginButton>
			</div>
		);
	}
}
