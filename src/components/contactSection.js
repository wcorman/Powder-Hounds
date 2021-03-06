import React, { Component } from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ContactModal from '../components/contactModal';

import MailLogo from '../media/contactLogo.svg';
import Tilt from 'react-tilt';

import '../App.css';

class ContactSection extends Component {
	constructor() {
		super();
		this.state = {
			name: '',
			message: '',
			showModal: false,
			validation: {
				name: false,
				message: false
			}
		};
	}

	updateField = (input) => {
		console.log(input.value);

		const field = input.id;

		this.setState({
			...this.state,
			[field]: input.value
		});

		if (field === 'name') {
			if (input.value.length > 1) {
				this.setState({
					validation: {
						...this.state,
						name: true
					}
				});
			} else if (input.value.length < 2) {
				this.setState({
					...this.state,
					validation: {
						...this.state,
						name: false
					}
				});
			}
		} else {
			if (field === 'message' && input.value.length > 10) {
				this.setState({
					validation: {
						...this.state,
						message: true
					}
				});
			} else if (field === 'message' && input.value.length < 11) {
				this.setState({
					...this.state,
					validation: {
						...this.state,
						message: false
					}
				});
			}
		}

		console.log(document.getElementById('message'));
	};

	submitForm = () => {
		window.open(
			`mailto:powderhoundscontact@gmail.com?subject=${'Hey, this is ' + this.state.name}&body=${this.state
				.message}`
		);
		this.setState({
			name: '',
			message: '',
			showModal: false,
			validation: {
				name: false,
				message: false
			}
		});
	};

	render() {
		return (
			<div className="container-fluid contactContainer">
				<div className="row no-gutter">
					<div className="d-none d-md-flex col-md-4 col-lg-6" id="contact">
						<Tilt className="contactLogo Tilt" options={{ max: 25 }} style={{ height: 350, width: 350 }}>
							<img
								src={MailLogo}
								alt="mail logo"
								className="Tilt-inner"
								onClick={() =>
									this.setState({
										showModal: true
									})}
							/>
						</Tilt>
					</div>

					<Card className="col-md-8 col-lg-6 contactCard">
						<Card.Header as="h3">Any questions?</Card.Header>
						<Card.Body className="contactSectionBody">
							<Card.Title>
								<ul>
									<li>Need more shoveled than just your sidewalk & driveway?</li>
									<li>Need to pay with cash?</li>
									<li>Want to say hi? 😊</li>
								</ul>
							</Card.Title>

							<Card.Text>
								Send us a message and we'll get back to you as soon as possible.
							</Card.Text>
							<Button
								variant="primary"
								onClick={() =>
									this.setState({
										showModal: true
									})}
							>
								Send message...
							</Button>
						</Card.Body>
					</Card>
				</div>
				<ContactModal
					show={this.state.showModal}
					validation={this.state.validation}
					name={this.state.name}
					message={this.state.message}
					updateField={this.updateField}
					onSend={this.submitForm}
					onHide={() =>
						this.setState({
							showModal: false
						})}
				/>
			</div>
		);
	}
}

export default ContactSection;
