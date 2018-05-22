import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import {
  Button,
  FormGroup,
  ControlLabel,
  FormControl,
} from 'react-bootstrap';

import { ModalWindow } from '../../components';
import {
	CreateUserStoryContainer,
	CreateIssueContainer,
} from './components';

const CREATE_TYPES = {
	USER_STORY: 'User story',
	ISSUE: 'Issue',
};

export class CreateModal extends Component {
  static get propTypes() {
    return {
      isVisible: PropTypes.bool,
      onCancel: PropTypes.func,
			createUserStory: PropTypes.func.isRequired,
			createIssue: PropTypes.func.isRequired,
			userId: PropTypes.number,
    };
  }

  static get defaultProps() {
    return {
			onCancel: () => {},
			userId: 0,
    };
  }

  constructor(props) {
    super(props);

    this.state = {
			selectedType: CREATE_TYPES.USER_STORY,
			userStory: {},
			issue: {
				reporterId: props.userId,
			},
		};

		this.saveSelectedType = this.saveSelectedType.bind(this);
		this.create = this.create.bind(this);
	}
	
	saveSelectedType(e) {
		const { value } = e.target;

		this.setState({ selectedType: CREATE_TYPES[value] });
	}

	create() {
		const {
			selectedType,
			userStory,
			issue,
		} = this.state;
		const {
			createUserStory,
			createIssue,
		} = this.props;

		switch(selectedType) {
			case CREATE_TYPES.USER_STORY:
				return createUserStory(userStory);
			case CREATE_TYPES.ISSUE:
				return createIssue(issue);
			default:
				return;
		}
	}

	renderForm() {
		const {
			selectedType,
			userStory,
			issue,
		} = this.state;

		switch(selectedType) {
			case CREATE_TYPES.USER_STORY:
				return (
					<CreateUserStoryContainer
						onDataChange={(story) => {this.setState({ userStory: story })}}
						userStory={userStory}
					/>
				);
			case CREATE_TYPES.ISSUE:
				return (
					<CreateIssueContainer
						onDataChange={(newIssue) => {this.setState({ issue: newIssue })}}
						issue={issue}
					/>
				);
			default:
			return null;
		}
	}

  render() {
    const {
      isVisible,
      onCancel,
      onSubmit,
		} = this.props;

    return (
      <ModalWindow
          isVisible={isVisible}
					title="Create issue"
					onClose={onCancel}
      >
        <form>
					<FormGroup
						controlId="create-type"
					>
						<FormControl
							onChange={this.saveSelectedType}
							componentClass="select"
						>
							{
								Object.keys(CREATE_TYPES).map(key => {
									return (
										<option value={key}>{CREATE_TYPES[key]}</option>
									);
								})
							}
						</FormControl>
						{this.renderForm()}
					</FormGroup>
          <Button onClick={onCancel}>Cancel</Button>
          <Button onClick={this.create}>Create</Button>
        </form>
      </ModalWindow>
    );
  }
}