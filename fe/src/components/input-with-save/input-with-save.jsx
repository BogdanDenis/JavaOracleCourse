import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import {
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
} from 'react-bootstrap';

export class InputWithSave extends Component {
  static get propTypes() {
    return {
      onInputChange: PropTypes.func,
      onChangeSave: PropTypes.func,
      onChangeCancel: PropTypes.func,
      scope: PropTypes.object,
      type: PropTypes.string,
      componentClass: PropTypes.string,
      name: PropTypes.string.isRequired,
      label: PropTypes.string,
      placeholder: PropTypes.string,
    };
  }

  static get defaultProps() {
    return {
      onInputChange: () => {},
      onChangeSave: () => {},
      onChangeCancel: () => {},
      scope: {},
      type: 'text',
      componentClass: 'input',
      label: '',
      placeholder: '',
    };
  }

  constructor(props) {
    super(props);

    this.state = {
      originalScope: null,
    };

    this.onChange = this.onChange.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.originalScopeInitialized = false;
  }

  componentWillReceiveProps(nextProps) {
    const {
      scope,
    } = nextProps;

    if (Object.keys(scope).length && !this.originalScopeInitialized) {
      this.setState({ originalScope: {...scope} });
      this.originalScopeInitialized = true;
    }
  }

  onChange(e) {
    const {
      scope,
      name,
      onInputChange,
    } = this.props;

    const { value } = e.target;
    const changedScope = scope;
    changedScope[name] = value;

    onInputChange(changedScope);
  }

  onCancel(e) {
    const {
      originalScope,
    } = this.state;
    const {
      scope,
      name,
      onChangeCancel,
    } = this.props;

    const value = originalScope[name];
    const changedScope = scope;
    changedScope[name] = value;

    onChangeCancel(changedScope);
  }

  render() {
    const {
      scope,
      name,
      label,
      placeholder,
      type,
      onChangeSave,
      componentClass,
    } = this.props;
    const value = scope[name];

    return (
      <FormGroup
        controlId={name}
      >
        <ControlLabel>{label}</ControlLabel>
        <FormControl
          type={type}
          value={value}
          onChange={this.onChange}
          placeholder={placeholder}
          componentClass={componentClass}
        />
        <Button onClick={onChangeSave}>Save</Button>
        <Button onClick={this.onCancel}>Cancel</Button>
      </FormGroup>
    );
  }
}
