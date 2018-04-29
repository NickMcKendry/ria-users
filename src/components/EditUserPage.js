import React from 'react';
import UserForm from './UserForm';
import { connect } from 'react-redux';
import { startEditUser, startRemoveUser } from '../actions/users';

export class EditUserPage extends React.Component {


  onSubmit = (user) => {
    this.props.editUser(this.props.user.id, user);
    this.props.history.push('/');
  };

  onClick = () => {
    this.props.removeUser({ id: this.props.user.id });
    this.props.history.push('/');
  }

  render() {
    return(
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit user</h1>
          </div>
        </div>
        <div className="content-container">
          <UserForm
            user={this.props.user}
            onSubmit={this.onSubmit}
          />
          <button onClick={this.onClick} className="button button--secondary">Remove User</button>
        </div>
      </div>
    );
  };
};

const mapStateToProps = (state, props) => {
  return {
    user: state.users.find((user) => user.id === props.match.params.id)
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  editUser: (id, user) => dispatch(startEditUser(id, user)),
  removeUser: (id) => dispatch(startRemoveUser(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditUserPage);
