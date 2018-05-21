import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import {
  Button,
  FormGroup,
  ControlLabel,
  FormControl,
} from 'react-bootstrap';

import { ModalWindow } from '../../components';
import { ISSUE_FIELDS } from '../../constants';

export class LogWorkModal extends Component {
  static get propTypes() {
    return {
      isVisible: PropTypes.bool,
      onCancel: PropTypes.func,
      issueKey: PropTypes.string.isRequired,
      changeIssue: PropTypes.func.isRequired,
    };
  }

  static get defaultProps() {
    return {
      onCancel: () => {},
    };
  }

  constructor(props) {
    super(props);

    this.state = {
      workTime: '',
    };

    this.saveWorkTime = this.saveWorkTime.bind(this);
    this.logWorkTime = this.logWorkTime.bind(this);
  }

  saveWorkTime(e) {
    const { value } = e.target;

    this.setState({ workTime: parseInt(value, 10) });
  }

  logWorkTime() {
    const {
      issueKey,
      changeIssue,
    } = this.props;
    const {
      workTime,
    } = this.state;

    const issueTimeDTO = {
      key: issueKey,
      time: workTime,
    };

    changeIssue(issueTimeDTO, ISSUE_FIELDS.ESTIMATION_USED);
  }

  render() {
    const {
      isVisible,
      onCancel,
    } = this.props;

    return (
      <ModalWindow
          isVisible={isVisible}
          title="Add work log"
      >
        <form>
          <FormGroup
            controlId="time"
          >
            <ControlLabel>Enter time (minutes)</ControlLabel>
            <FormControl
              type="text"
              placeholder="Work time"
              onChange={this.saveWorkTime}
            />
          </FormGroup>
          <Button onClick={onCancel}>Cancel</Button>
          <Button onClick={this.logWorkTime}>Save</Button>
        </form>
      </ModalWindow>
    );
  }
}