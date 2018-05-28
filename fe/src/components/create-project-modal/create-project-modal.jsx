import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import {
  Button,
  FormGroup,
  ControlLabel,
  FormControl,
} from 'react-bootstrap';

import { ModalWindow } from '../../components';

export class CreateProjectModal extends Component {
  static get propTypes() {
    return {
      isVisible: PropTypes.bool,
      onCancel: PropTypes.func,
			onSubmit: PropTypes.func,
			createProject: PropTypes.func.isRequired,
    };
  }

  static get defaultProps() {
    return {
      onCancel: () => {},
			onSubmit: () => {},
    };
  }

  constructor(props) {
    super(props);

    this.state = {
			projectName: '',
			projectKey: '',
    };

		this.saveProjectName = this.saveProjectName.bind(this);
		this.saveProjectKey = this.saveProjectKey.bind(this);
		this.createProject = this.createProject.bind(this);
	}

	saveProjectName(e) {
		const { value } = e.target;

		this.setState({ projectName: value });
	}

	saveProjectKey(e) {
		const { value } = e.target;

		this.setState({ projectKey: value });
	}

	createProject() {
		const {
			createProject,
		} = this.props;
		const {
			projectName,
			projectKey,
		} = this.state;

		createProject({
      name: projectName,
      key:projectKey,
    });
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
					title="Create a project"
					onClose={onCancel}
      >
        <form>
          <FormGroup
            controlId="projectName"
          >
            <ControlLabel>Enter a project name</ControlLabel>
            <FormControl
							type="text"
							placeholder="Project name"
              onChange={this.saveProjectName}
            />
          </FormGroup>
					<FormGroup
            controlId="projectKey"
          >
            <ControlLabel>Enter a project key(must be unique)</ControlLabel>
            <FormControl
							type="text"
							placeholder="Project key"
              onChange={this.saveProjectKey}
            />
          </FormGroup>
          <Button onClick={onCancel}>Cancel</Button>
          <Button onClick={this.createProject}>Create</Button>
        </form>
      </ModalWindow>
    );
  }
}