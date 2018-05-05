import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import {
  Button,
  FormGroup,
  ControlLabel,
  FormControl,
} from 'react-bootstrap';

import { ModalWindow } from '../../components';

export class CreateSprintModal extends Component {
  static get propTypes() {
    return {
      isVisible: PropTypes.bool,
      onCancel: PropTypes.func,
      onSubmit: PropTypes.func,
      projectKey: PropTypes.string.isRequired,
      createSprint: PropTypes.func.isRequired,
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
      sprintName: '',
    };

    this.saveSprintName = this.saveSprintName.bind(this);
    this.createSprint = this.createSprint.bind(this);
  }

  saveSprintName(e) {
    const { value } = e.target;

    this.setState({ sprintName: value });
  }

  createSprint() {
    const {
      projectKey,
      onSubmit,
      createSprint,
    } = this.props;
    const {
      sprintName,
    } = this.state;

    const sprint = {
      name: sprintName,
      projectKey,
    };

    createSprint(sprint);
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
          title="Start a sprint"
      >
        <form>
          <FormGroup
            controlId="name"
          >
            <ControlLabel>Enter sprint name</ControlLabel>
            <FormControl
              type="text"
              placeholder="Sprint name"
              onChange={this.saveSprintName}
            />
          </FormGroup>
          <Button onClick={onCancel}>Cancel</Button>
          <Button onClick={this.createSprint}>Submit</Button>
        </form>
      </ModalWindow>
    );
  }
}