import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import {
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
} from 'react-bootstrap';

export class SelectWithSave extends Component {
  static get propTypes() {
    return {
      onInputChange: PropTypes.func,
      onChangeSave: PropTypes.func,
      onChangeCancel: PropTypes.func,
      name: PropTypes.string.isRequired,
      label: PropTypes.string,
      options: PropTypes.array,
    };
  }

  static get defaultProps() {
    return {
      onInputChange: () => {},
      onChangeSave: () => {},
      onChangeCancel: () => {},
      label: '',
      placeholder: '',
      options: [],
    };
  }

  constructor(props) {
    super(props);

    this.state = {
      originalOptions: null,
    };

    this.onChange = this.onChange.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.originalOptionsInitialized = false;
  }

  componentWillReceiveProps(nextProps) {
    const {
      options,
    } = nextProps;

    if (options.length && !this.originalOptionsInitialized) {
      this.setState({ originalOptions: [...options] });
      this.originalOptionsInitialized = true;
    }
  }

  onChange(e) {
    const {
      options,
      onInputChange,
    } = this.props;

    const changedOptions = options.map((option, index) => {
      return {
        ...option,
        selected: index === e.target.selectedIndex,
      };
    });

    onInputChange(changedOptions);
  }

  onCancel(e) {
    const {
      onChangeCancel,
    } = this.props;
    const {
      originalOptions,
    } = this.state;

    onChangeCancel(originalOptions);
  }

  render() {
    const {
      options,
      name,
      label,
      placeholder,
      onChangeSave,
    } = this.props;

    return (
      <FormGroup
        controlId={name}
      >
        <ControlLabel>{label}</ControlLabel>
        <FormControl
          onChange={this.onChange}
          placeholder={placeholder}
          componentClass="select"
        >
          {
            options.map(option => {
              return (
                <option
                  value={option.value}
                  selected={option.selected}
                >{option.text}</option>
              );
            })
          }
        </FormControl>
        <Button onClick={onChangeSave}>Save</Button>
        <Button onClick={this.onCancel}>Cancel</Button>
      </FormGroup>
    );
  }
}
