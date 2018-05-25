import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import {
  Button,
  FormGroup,
  ControlLabel,
  FormControl,
} from 'react-bootstrap';

import { ModalWindow } from '../../components';

export class CreateWorkloadModal extends Component {
  static get propTypes() {
    return {
      isVisible: PropTypes.bool,
      onCancel: PropTypes.func,
      onSubmit: PropTypes.func,
			projectKey: PropTypes.string.isRequired,
			developers: PropTypes.array,
    };
  }

  static get defaultProps() {
    return {
      onCancel: () => {},
			onSubmit: () => {},
			developers: [],
    };
  }

  constructor(props) {
    super(props);

    this.state = {
      developerId: 0,
    };

		this.saveDeveloperId = this.saveDeveloperId.bind(this);
		this.createWorkload = this.createWorkload.bind(this);
	}

	saveDeveloperId(e) {
		const { value } = e.target;

		this.setState({ developerId: value });
	}

	createWorkload() {
		const {
			projectKey,
			createWorkload,
		} = this.props;
		const { developerId } = this.state;

		createWorkload({ projectKey, developerId });
	}

  render() {
    const {
      isVisible,
      onCancel,
			onSubmit,
			developers,
    } = this.props;

    return (
      <ModalWindow
          isVisible={isVisible}
					title="Add a developer"
					onClose={onCancel}
      >
        <form>
          <FormGroup
            controlId="developerId"
          >
            <ControlLabel>Select a developer</ControlLabel>
            <FormControl
							componentClass="select"
              onChange={this.saveDeveloperId}
            >
							{
								developers.map(developer => ((
									<option value={developer.id}>{`${developer.name} ${developer.email}`}</option>
								)))
							}
						</FormControl>
          </FormGroup>
          <Button onClick={onCancel}>Cancel</Button>
          <Button onClick={this.createWorkload}>Add</Button>
        </form>
      </ModalWindow>
    );
  }
}