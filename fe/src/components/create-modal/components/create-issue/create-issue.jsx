import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import {
	Button,
	FormControl,
	ControlLabel,
	FormGroup,
} from 'react-bootstrap';

import {
	ISSUE_TYPES,
} from '../../../../constants';

export class CreateIssue extends Component {
	static get propTypes() {
		return {
			onDataChange: PropTypes.func,
			issue: PropTypes.object,
			stories: PropTypes.array,
			developers: PropTypes.array,
		};
	}

	static get defaultProps() {
		return {
			onDataChange: () => {},
			issue: {},
			stories: [],
			developers: [],
		};
	}
	
	constructor(props) {
		super(props);

		this.saveIssueName = this.saveIssueName.bind(this);
		this.saveIssueDescription = this.saveIssueDescription.bind(this);
		this.saveIssueStory = this.saveIssueStory.bind(this);
		this.saveIssueAssignee = this.saveIssueAssignee.bind(this);
		this.saveIssueType = this.saveIssueType.bind(this);
		this.saveIssueEstimateOriginal = this.saveIssueEstimateOriginal.bind(this);
		this.saveIssueEstimateUsed = this.saveIssueEstimateUsed.bind(this);

		const newIssue = {
			...props.issue,
			storyKey: props.stories[0] ? props.stories[0].key : '',
			type: ISSUE_TYPES.TASK,
			assigneeId: props.developers[0] ? props.developers[0].id : 0,
		};

		props.onDataChange(newIssue);
	}

	saveIssueName(e) {
		const { value } = e.target;
		const {
			issue,
			onDataChange,
		} = this.props;

		const newIssue = {
			...issue,
			name: value,
		};

		onDataChange(newIssue);
	}

	saveIssueDescription(e) {
		const { value } = e.target;
		const {
			issue,
			onDataChange,
		} = this.props;

		const newIssue = {
			...issue,
			description: value,
		};

		onDataChange(newIssue);
	}

	saveIssueStory(e) {
		const { value } = e.target;
		const {
			issue,
			onDataChange,
		} = this.props;

		const newIssue = {
			...issue,
			storyKey: value,
		};

		onDataChange(newIssue);
	}

	saveIssueType(e) {
		const { value } = e.target;
		const {
			issue,
			onDataChange,
		} = this.props;

		const newIssue = {
			...issue,
			type: value,
		};

		onDataChange(newIssue);
	}

	saveIssueAssignee(e) {
		const { value } = e.target;
		const {
			issue,
			onDataChange,
		} = this.props;

		const newIssue = {
			...issue,
			assigneeId: value,
		};

		onDataChange(newIssue);
	}

	saveIssueEstimateOriginal(e) {
		const { value } = e.target;
		const {
			issue,
			onDataChange,
		} = this.props;

		const newIssue = {
			...issue,
			estimationOriginal: value,
		};

		onDataChange(newIssue);
	}

	saveIssueEstimateUsed(e) {
		const { value } = e.target;
		const {
			issue,
			onDataChange,
		} = this.props;

		const newIssue = {
			...issue,
			estimationUsed: value,
		};

		onDataChange(newIssue);
	}

	render() {
		const {
			stories,
			developers,
		} = this.props;

		return (
			<form>
				<FormGroup
					controlId="storyKey"
				>
					<ControlLabel>User story</ControlLabel>
					<FormControl
						componentClass="select"
						onChange={this.saveIssueStory}
					>
						{
							stories.map((story, index) => {
								return (
									<option value={story.key}>{`${story.key} ${story.name}`}</option>
								);
							})
						}
					</FormControl>
				</FormGroup>
				<FormGroup
					controlId="type"
				>
					<ControlLabel>Issue type</ControlLabel>
					<FormControl
						componentClass="select"
						onChange={this.saveIssueType}
					>
						{
							Object.keys(ISSUE_TYPES).map(key => {
								return (
									<option value={ISSUE_TYPES[key]}>{ISSUE_TYPES[key]}</option>
								);
							})
						}
					</FormControl>
				</FormGroup>
				<FormGroup
					controlId="assigneeId"
				>
					<ControlLabel>Issue assignee</ControlLabel>
					<FormControl
						componentClass="select"
						onChange={this.saveIssueAssignee}
					>
						{
							developers.map(developer => {
								return (
									<option value={developer.id}>{`${developer.name} ${developer.email}`}</option>
								);
							})
						}
					</FormControl>
				</FormGroup>
				<FormGroup
					controlId="name"
				>
					<ControlLabel>Issue name</ControlLabel>
					<FormControl
						type="text"
						placeholder="Name"
						onChange={this.saveIssueName}
					/>
				</FormGroup>
				<FormGroup
					controlId="description"
				>
					<ControlLabel>Issue description</ControlLabel>
					<FormControl
						type="textarea"
						componentClass="textarea"						
						placeholder="Description"
						onChange={this.saveIssueDescription}
					/>
				</FormGroup>
				<FormGroup
					controlId="estimationOriginal"
				>
					<ControlLabel>Estimation original</ControlLabel>
					<FormControl
						type="text"
						placeholder="Estimation (in minutes)"
						onChange={this.saveIssueEstimateOriginal}
					/>
				</FormGroup>
				<FormGroup
					controlId="estimationUsed"
				>
					<ControlLabel>Estimation used</ControlLabel>
					<FormControl
						type="text"
						placeholder="Estimation (in minutes)"
						onChange={this.saveIssueEstimateUsed}
					/>
				</FormGroup>
			</form>
		);
	}
}
