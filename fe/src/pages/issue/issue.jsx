import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import {
  Button,
} from 'react-bootstrap';

import {
	InputWithSave,
	SelectWithSave,
	CommonHeader,
	LogWorkModalContainer,
} from '../../components';
import {
	ISSUE_TYPES,
	ISSUE_STATUSES,
	ISSUE_FIELDS,
} from '../../constants';

import './issue.sass';

export class Issue extends Component {
	static get propTypes() {
		return {
			getViewedIssue: PropTypes.func.isRequired,
			getStory: PropTypes.func.isRequired,
			changeIssue: PropTypes.func.isRequired,
			issue: PropTypes.object,
			developers: PropTypes.array,
		};
	}

	static get defaultProps() {
		return {
			issue: {},
			developers: [],
		};
	}

	constructor(props) {
		super(props);

		this.state = {
			issue: {},
			issueTypes: [],
			issueStatuses: [],
			issueAssignee: [],
		};

		this.saveIssueType = this.saveIssueType.bind(this);
		this.saveIssueStatus = this.saveIssueStatus.bind(this);
		this.saveIssueName = this.saveIssueName.bind(this);
		this.saveIssueDescription = this.saveIssueDescription.bind(this);
		this.saveIssueAssignee = this.saveIssueAssignee.bind(this);
		this.toggleLogWorkModal = this.toggleLogWorkModal.bind(this);
	}

	componentDidMount() {
		this.checkIssueUpdate();
	}

	componentWillReceiveProps(nextProps) {
		const {
			issue,
			getStory,
			developers,
		} = this.props;

		if (issue.key !== nextProps.issue.key) {
			getStory(nextProps.issue.storyKey);
		}

		this.setState({ issue: nextProps.issue });
		this.saveIssueTypeList(nextProps.issue);
		this.saveIssueStatusList(nextProps.issue);

		if (developers !== nextProps.developers) {
			this.saveDevelopersList(nextProps.issue, nextProps.developers);
		}
	}

	checkIssueUpdate(props = this.props) {
		const {
			match,
			issue,
			getViewedIssue,
			getStory,
		} = props;
		const { issueKey } = match.params;

		if (issueKey && issue.key !== issueKey) {
			getViewedIssue(issueKey);
		} else {
			this.setState({ issue });
			this.saveIssueTypeList(props.issue);
			this.saveIssueStatusList(props.issue);
			this.saveDevelopersList(props.issue, props.developers);
		}
	}

	saveIssueTypeList(issue) {
		const types = Object.values(ISSUE_TYPES).map(type => {
      return {
        value: type,
        text: type,
        selected: type === issue.type,
      };
    });

    this.setState({ issueTypes: types });
	}

	saveIssueStatusList(issue) {
		const statuses = Object.values(ISSUE_STATUSES).map(status => {
      return {
        value: status,
        text: status,
        selected: status === issue.status,
      };
    });

    this.setState({ issueStatuses: statuses });
	}

	saveDevelopersList(issue, developers) {
		const developersList = developers.map(developer => {
			return {
				value: developer.id,
				text: `${developer.name} ${developer.email}`,
				selected: issue.assigneeId === developer.id,
			};
		});

		this.setState({ issueAssignee: developersList });
	}

	saveIssueType() {
		const { changeIssue } = this.props;
		const {
			issue,
			issueTypes,
		} = this.state;

		const selectedType = issueTypes.find(type => type.selected);
		const issueTypeDTO = {
			key: issue.key,
			type: selectedType.value,
		};

		changeIssue(issueTypeDTO, ISSUE_FIELDS.TYPE);
	}

	saveIssueStatus() {
		const { changeIssue } = this.props;
		const {
			issue,
			issueStatuses,
		} = this.state;

		const selectedStatus = issueStatuses.find(status => status.selected);
		const issueStatusDTO = {
			key: issue.key,
			status: selectedStatus.value,
		};

		changeIssue(issueStatusDTO, ISSUE_FIELDS.STATUS);
	}

	saveIssueName() {
		const { changeIssue } = this.props;
		const { issue } = this.state;

		const issueNameDTO = {
			key: issue.key,
			name: issue.name,
		};

		changeIssue(issueNameDTO, ISSUE_FIELDS.NAME);
	}

	saveIssueDescription() {
		const { changeIssue } = this.props;
		const { issue } = this.state;

		const issueDescDTO = {
			key: issue.key,
			description: issue.description,
		};

		changeIssue(issueDescDTO, ISSUE_FIELDS.DESCRIPTION);
	}

	saveIssueAssignee() {
		const { changeIssue } = this.props;
		const {
			issue,
			issueAssignee,
		} = this.state;

		const selectedAssignee = issueAssignee.find(assignee => assignee.selected);

		const issueAssigneeDTO = {
			key: issue.key,
			assigneeId: selectedAssignee.value,
		};

		changeIssue(issueAssigneeDTO, ISSUE_FIELDS.ASSIGNEE);
	}

	toggleLogWorkModal() {
		this.setState({ logWorkModalVisible: !this.state.logWorkModalVisible });
	}

	render() {
		const { match } = this.props;
		const { issueKey } = match.params;
		const {
			issue,
			issueTypes,
			issueStatuses,
			issueAssignee,
			logWorkModalVisible,
		} = this.state;

		return (
			<section className="issue-page">
				<CommonHeader />
				<section className="issue">
					<SelectWithSave
							name="type"
							label="Type"
							placeholder="Issue type"
							options={issueTypes}
							onInputChange={(issueTypes) => {this.setState({ issueTypes })}}
							onChangeSave={this.saveIssueType}
							onChangeCancel={(issueTypes) => {this.setState({ issueTypes })}}
					/>
					<SelectWithSave
							name="status"
							label="Status"
							placeholder="Issue status"
							options={issueStatuses}
							onInputChange={(issueStatuses) => {this.setState({ issueStatuses })}}
							onChangeSave={this.saveIssueStatus}
							onChangeCancel={(issueStatuses) => {this.setState({ issueStatuses })}}
					/>
					<InputWithSave
						scope={issue}
						type="text"
						name="name"
						label="Name"
						placeholder="Issue name"
						onInputChange={(issue) => this.setState({ issue })}
						onChangeSave={this.saveIssueName}
						onChangeCancel={(issue) => this.setState({ issue })}
					/>
					<InputWithSave
						scope={issue}
						type="text"
						name="description"
						label="Description"
						placeholder="Issue description"
						onInputChange={(issue) => this.setState({ issue })}
						onChangeSave={this.saveIssueDescription}
						onChangeCancel={(issue) => this.setState({ issue })}
					/>
					<SelectWithSave
							name="assignee"
							label="Assignee"
							placeholder="Issue assignee"
							options={issueAssignee}
							onInputChange={(issueAssignee) => {this.setState({ issueAssignee })}}
							onChangeSave={this.saveIssueAssignee}
							onChangeCancel={(issueAssignee) => {this.setState({ issueAssignee })}}
					/>
					<section className="issue__estimation">
						<p className="issue__estimation__value">
							{`Estimation original: ${issue.estimationOriginal} m`}
						</p>
						<p className="issue__estimation__value">
							{`Estimation used: ${issue.estimationUsed} m`}
							<Button
								className="issue__estimation__value__log-work"
								onClick={this.toggleLogWorkModal}
							>Log work</Button>
						</p>						
					</section>
				</section>
				<LogWorkModalContainer
					isVisible={logWorkModalVisible}
					onCancel={this.toggleLogWorkModal}
					issueKey={issue.key}
				/>
			</section>
		)
	}
}