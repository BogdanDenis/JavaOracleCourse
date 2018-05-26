import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import {
	Button,
	FormControl,
	ControlLabel,
	FormGroup,
} from 'react-bootstrap';

export class CreateUserStory extends Component {
	static get propTypes() {
		return {
			onDataChange: PropTypes.func,
			userStory: PropTypes.object,
			sprints: PropTypes.array,
		};
	}

	static get defaultProps() {
		return {
			onDataChange: () => {},
			userStory: {},
			sprints: [],
		};
	}
	
	constructor(props) {
		super(props);

		this.saveStoryName = this.saveStoryName.bind(this);
		this.saveStoryDescription = this.saveStoryDescription.bind(this);
		this.saveStorySprint = this.saveStorySprint.bind(this);
	}

	saveStoryName(e) {
		const { value } = e.target;
		const {
			userStory,
			onDataChange,
		} = this.props;

		const newUserStory = {
			...userStory,
			name: value,
		};

		onDataChange(newUserStory);
	}

	saveStoryDescription(e) {
		const { value } = e.target;
		const {
			userStory,
			onDataChange,
		} = this.props;

		const newUserStory = {
			...userStory,
			description: value,
		};

		onDataChange(newUserStory);
	}

	saveStorySprint(e) {
		const { value } = e.target;
		const {
			userStory,
			onDataChange,
		} = this.props;

		const newUserStory = {
			...userStory,
			sprintId: value,
		};

		onDataChange(newUserStory);
	}

	render() {
		const { sprints } = this.props;

		return (
			<form>
				<FormGroup
					controlId="name"
				>
					<ControlLabel>User story name</ControlLabel>
					<FormControl
						type="text"
						placeholder="Name"
						onChange={this.saveStoryName}
					/>
				</FormGroup>
				<FormGroup
					controlId="description"
				>
					<ControlLabel>User story description</ControlLabel>
					<FormControl
						type="text"
						componentClass="textarea"
						placeholder="Description"
						onChange={this.saveStoryDescription}
					/>
				</FormGroup>
				<FormGroup
					controlId="sprintId"
				>
					<ControlLabel>Sprint</ControlLabel>
					<FormControl
						componentClass="select"
						onChange={this.saveStorySprint}
					>
						{
							sprints.map((sprint, index) => {
								return (
									<option value={sprint.id}>{sprint.name}</option>
								);
							})
						}
					</FormControl>
				</FormGroup>
			</form>
		);
	}
}
