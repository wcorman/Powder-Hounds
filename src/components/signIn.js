import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Logo from '../media/navLogo.svg';
import Image from 'react-bootstrap/Image';
import huskyLogo from '../media/huskyLogo.svg';

// import { FacebookLoginButton } from 'react-social-login-buttons';
import { createButton } from 'react-social-login-buttons';
import { Pets } from '@material-ui/icons';
// import AccountCircle from '@material-ui/icons/AccountCircle';

const buttonConfig = {
	text: 'Continue as guest (Balto)',
	icon: Pets,
	iconFormat: (name) => `fa fa-${name}`,
	style: { background: '#3b5998' },
	activeStyle: { background: '#293e69' }
};
const MyCustomLoginButton = createButton(buttonConfig);

const useStyles = makeStyles((theme) => ({
	root: {
		height: '100vh'
	},
	image: {
		backgroundImage: 'url(https://source.unsplash.com/collection/446755/1600x900)',
		backgroundRepeat: 'no-repeat',
		backgroundColor: theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
		backgroundSize: 'cover',
		backgroundPosition: 'center'
	},
	paper: {
		margin: theme.spacing(8, 4),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		height: '100vh'
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.primary.main
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1)
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
		height: '46px'
	}
}));

export default function SignIn(props) {
	const classes = useStyles();

	return (
		<Grid item xs={12} sm={8} md={5} component="signIn" elevation={6} square>
			<div style={{ marginTop: '16px', marginBottom: '16px' }} className={classes.paper}>
				{/* <Avatar className={classes.avatar} /> */}
				<Image src={Logo} className="signInLogo" />
				<Image src={huskyLogo} className="signInHuskyLogo" />
				<hr className="signInHuskyLogo" />

				<Typography component="h1" variant="h5">
					Sign in
				</Typography>

				<form className={classes.form} noValidate>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="email"
						label="Email Address"
						name="email"
						autoComplete="email"
						autoFocus
						onChange={(value) => props.updateField(value.currentTarget)}
					/>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
						autoComplete="current-password"
						onChange={(value) => props.updateField(value.currentTarget)}
					/>
					<p style={{ color: 'red', margin: '0' }}>{props.errorMessage}</p>
					{/* <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" /> */}
					<div>
						<LinearProgress hidden={!props.loading} />
					</div>
					<Button
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
						onClick={() => props.signIn()}
					>
						Sign In
					</Button>
					<Grid container>
						<Grid item xs>
							<Link
								href="https://powderhoundscustomers-test.auth.us-west-2.amazoncognito.com/forgotPassword?redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F&response_type=code&client_id=5f50njakuhd7g95sca83vm365d&identity_provider=COGNITO&scopes=phone%2Cemail%2Copenid%2Cprofile%2Caws.cognito.signin.user.admin&state=kolh8YFhXaCeRA4cBHNtHVk2REqaRxDi&code_challenge=nS7SYi0flCUqBs_5sjO7AZCmituYXYEMsqwsLf2AdOI&code_challenge_method=S256"
								variant="body2"
								target="_blank"
							>
								Forgot password?
							</Link>
						</Grid>
						<Grid item>
							<Link href="#" variant="body2" onClick={() => props.toggle()}>
								{"Don't have an account? Sign Up"}
							</Link>
						</Grid>
					</Grid>
					<hr style={{ marginTop: '24px' }} />
				</form>

				<div className="socialButtons">
					<MyCustomLoginButton onClick={() => props.signIn(true)} />
					{/* <FacebookLoginButton disabled onClick={() => props.facebookSignIn()}>
						<span>Continue with Facebook</span>
					</FacebookLoginButton> */}
					{/* <GoogleLoginButton /> */}
				</div>
				<Box mt={5}>{props.copyright()}</Box>
			</div>
		</Grid>
	);
}
