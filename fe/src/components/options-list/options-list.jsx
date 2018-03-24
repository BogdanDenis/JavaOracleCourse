import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

export class OptionsList extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  static get propTypes() {
    return {
      options: PropTypes.array,
      onChange: PropTypes.func,
    };
  }

  static get defaultProps() {
    return {
      options: [],
      onChange: () => {},
    };
  }

  handleChange(selected) {
    const {
      options,
      onChange,
    } = this.props;
    const id = selected.id;
    const selectedIndex = options.findIndex(option => option.id === id);
    onChange(options[selectedIndex]);
  }

  render() {
    const {
      options,
    } = this.props;

    return (
      <select
        className="options-list"
        onChange={this.handleChange}
      >
        {
          options.map(option => {
            return (
              <option value={option.id}>{option.value}</option>
            );
          })
        }
      </select>
    );
  }
}
