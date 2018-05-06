import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import {
  Modal,
  Button,
} from 'react-bootstrap';

export class ModalWindow extends Component {
  static get propTypes() {
    return {
      isVisible: PropTypes.bool,
      title: PropTypes.string,
      onClose: PropTypes.func,
    };
  }

  static get defaultProps() {
    return {
      isVisible: false,
      title: '',
      onClose: () => {},
    };
  }

  render() {
    const {
      isVisible,
      title,
      onClose,
      children,
    } = this.props;

    return (
      <div className="static-modal modal-window">
        {
          isVisible
          && 
          <Modal.Dialog>
            <Modal.Header>
              <Modal.Title>
                {title}
                <Button
                  className="close"
                  onClick={onClose}
                >
                  x
                </Button>
              </Modal.Title>
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
