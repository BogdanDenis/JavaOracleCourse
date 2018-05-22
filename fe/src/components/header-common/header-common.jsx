import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  NavDropdown,
  MenuItem,
} from 'react-bootstrap';

import {
  Header,
  CreateModalContainer,
} from '../../components';
import * as routes from '../../constants';

import './header-common.sass';

export class CommonHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      createModalVisible: false,
    };

    this.toggleCreateModal = this.toggleCreateModal.bind(this);
  }

  toggleCreateModal() {
    this.setState({ createModalVisible: !this.state.createModalVisible });
  }

  render() {
    const { createModalVisible } = this.state;

    return (
      <Header>
        <NavDropdown
          title="Projects"
          className="dropdown"
        >
          <MenuItem>
            <Link
              to={routes.ALL_PROJECTS_ROUTE}
              className="link"
            >
              View All Projects
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              to={routes.MY_PROJECTS_ROUTE}
              className="link"
            >
              View My Projects
            </Link>
          </MenuItem>
        </NavDropdown>
        <NavDropdown
          title="Issues"
          className="dropdown"
        >
          <MenuItem>
            <Link
              to={routes.MY_ISSUES_ROUTE}
              className="link"
            >
              My Open Issues
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              to={routes.REPORTED_BY_ME_ROUTE}
              className="link"
            >
            Reported By Me
            </Link>
          </MenuItem>
        </NavDropdown>
        <Button
          className="btn create-us"
          bsStyle="primary"
          onClick={this.toggleCreateModal}
        >Create</Button>
        <CreateModalContainer
          isVisible={createModalVisible}
          onCancel={this.toggleCreateModal}
        />
      </Header>
    );
  }
}
