import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import {
  Button,
  FormGroup,
  ControlLabel,
  FormControl,
} from 'react-bootstrap';

import { ModalWindow } from '../../components';

export class SelectSprintModal extends Component {
  static get propTypes() {
    return {
			startSprint: PropTypes.func.isRequired,
			isVisible: PropTypes.bool,
      onCancel: PropTypes.func,
			sprints: PropTypes.array,
    };
  }

  static get defaultProps() {
    return {
      onCancel: () => {},
			sprints: [],
    };
  }

  constructor(props) {
    super(props);

    this.state = {
      selectedSprint: null,
		};
		
		this.saveSelectedSprint = this.saveSelectedSprint.bind(this);
		this.startSprint = this.startSprint.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		if (!this.state.selectedSprint && nextProps.sprints.length) {
			this.setState({ selectedSprint: nextProps.sprints[0] });
		}
	}
	
	saveSelectedSprint(e) {
		const { value } = e.target;
		const { sprints } = this.props;

		const selectedSprint = sprints.find(sprint => sprint.id === value);
		console.log(value, selectedSprint, sprints);
		this.setState({ selectedSprint });
	}

	startSprint() {
		const { selectedSprint } = this.state;
		const { startSprint } = this.props;

		startSprint(selectedSprint.id);
	}

  render() {
    const {
      isVisible,
      onCancel,
			onSubmit,
			sprints,
    } = this.props;

    return (
      <ModalWindow
          isVisible={isVisible}
					title="Select a sprint"
					onClose={onCancel}
      >
        <form>
          <FormGroup
            controlId="sprint"
          >
            <ControlLabel>Future sprints</ControlLabel>
            <FormControl
							componentClass="select"
              onChange={this.saveSelectedSprint}
            >
							{
								sprints.map(sprint => {
									return (
										<option value={sprint.id}>{sprint.name}</option>
									);
								})
							}
						</FormControl>
          </FormGroup>
          <Button onClick={onCancel}>Cancel</Button>
          <Button onClick={this.startSprint}>Select</Button>
        </form>
      </ModalWindow>
    );
  }
}