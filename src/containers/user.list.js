import React, { Component } from "react";
import { bindActionCreator, bindActionCreators } from "redux";
import { connect } from "react-redux";
import { selectUser } from "../actions/index";

class UserList extends Component {
  createListItem() {
    return this.props.users.map(user => {
      return (
        <li key={user.id}
        onClick={() => this.props.selectUser(user)}>
          {user.first} {user.last}
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <ul>{this.createListItem()}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

const matchDispachToProps = dispatch => {
  return bindActionCreators({ selectUser: selectUser }, dispatch);
};

export default connect(mapStateToProps, matchDispachToProps)(UserList);
