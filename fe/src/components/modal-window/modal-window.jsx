import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import {
  Modal,
} from 'react-bootstrap';

export class ModalWindow extends Component {
  static get propTypes() {
    return {
      isVisible: PropTypes.bool,
      title: PropTypes.string,
    };
  }

  static get defaultProps() {
    return {
      isVisible: false,
      title: '',
    };
  }

  render() {
    const {
      isVisible,
      title,
      children,
    } = this.props;

    return (
      <div className="static-modal modal-window">
        {
          isVisible
          && 
          <Modal.Dialog>
            <Modal.Header>
              <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {children}
            </Modal.Body>
          </Modal.Dialog>
        }
      </div>
    );
  }
}
