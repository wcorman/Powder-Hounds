import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import threeMore from '../media/loyaltyCards/3more.svg';
import twoMore from '../media/loyaltyCards/2more.svg';
import oneMore from '../media/loyaltyCards/1more.svg';
import free from '../media/loyaltyCards/free.svg';

function RewardCards(props) {
	return (
		<div>
			{!props.loading &&
			props.displayrewardcard &&
			props.rewardStatus === 0 && (
				<Form>
					<Form.Row>
						<Form.Group style={{ width: '100%' }}>
							<Form.Label />
							This is your reward card. For every 3 snow clearings, you get one clearing for{' '}
							<strong>FREE</strong>
							.
							<hr />
							<div className="text-center">
								<img src={threeMore} alt="3 more to go" className="rewardCard" />
							</div>
							<hr />
						</Form.Group>
					</Form.Row>

					<Button disabled={props.validphone} variant="primary" onClick={() => props.nextStage('rewardCard')}>
						Next
					</Button>
				</Form>
			)}

			{!props.loading &&
			props.displayrewardcard &&
			props.rewardStatus === 1 && (
				<Form>
					<Form.Row>
						<Form.Group style={{ width: '100%' }}>
							<Form.Label />
							This is your reward card. For every 3 snow clearings, you get one clearing for{' '}
							<strong>FREE</strong>
							.
							<hr />
							<div className="text-center">
								<img src={twoMore} alt="3 more to go" className="rewardCard" />
							</div>
							<hr />
						</Form.Group>
					</Form.Row>

					<Button disabled={props.validphone} variant="primary" onClick={() => props.nextStage('rewardCard')}>
						Next
					</Button>
				</Form>
			)}

			{!props.loading &&
			props.displayrewardcard &&
			props.rewardStatus === 2 && (
				<Form>
					<Form.Row>
						<Form.Group style={{ width: '100%' }}>
							<Form.Label />
							This is your reward card. For every 3 snow clearings, you get one clearing for{' '}
							<strong>FREE</strong>
							.
							<hr />
							<div className="text-center">
								<img src={oneMore} alt="3 more to go" className="rewardCard" />
							</div>
							<hr />
						</Form.Group>
					</Form.Row>

					<Button disabled={props.validphone} variant="primary" onClick={() => props.nextStage('rewardCard')}>
						Next
					</Button>
				</Form>
			)}

			{!props.loading &&
			props.displayrewardcard &&
			props.rewardStatus === 3 && (
				<Form>
					<Form.Row>
						<Form.Group style={{ width: '100%' }}>
							<Form.Label />
							This is your reward card. For every 3 snow clearings, you get one for <strong>FREE</strong>
							.
							<hr />
							<div className="text-center">
								<img src={free} alt="free" className="rewardCard" />
							</div>
							<hr />
						</Form.Group>
					</Form.Row>

					<Button disabled={props.validphone} variant="primary" onClick={() => props.nextStage('rewardCard')}>
						Next
					</Button>
				</Form>
			)}
		</div>
	);
}

export default RewardCards;
