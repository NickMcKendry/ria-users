import React from 'react';
import { SingleDatePicker } from 'react-dates';


export default class UserForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: props.user ? props.user.firstName : '',
      lastName: props.user ? props.user.lastName : '',
      address: props.user ? props.user.address : '',
      error: ''
    };
  };


  onFirstNameChange = (e) => {
    const firstName = e.target.value;
    this.setState(() => ({ firstName }));
  };

  onLastNameChange = (e) => {
    const lastName = e.target.value;
    this.setState(() => ({ lastName }));
  };

  onAddressChange = (e) => {
    const address = e.target.value;
    this.setState(() => ({ address }))
  };

  onSubmit = ((e) => {
    e.preventDefault();

    if (!this.state.firstName || !this.state.lastName || !this.state.address) {
      this.setState(() => ({ error: 'Please provide a firstName, lastName and address!' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        address: this.state.address
      })
    }
  })

  render() {
    return (
        <form onSubmit={this.onSubmit} className="form">
          { this.state.error && <p className="form__error">{this.state.error}</p> }
          <input
            type="text"
            placeholder="First Name"
            autoFocus
            value={this.state.firstName}
            onChange={this.onFirstNameChange}
            className="text-input"
          />
          <input
            type="text"
            placeholder="Last Name"
            value={this.state.lastName}
            onChange={this.onLastNameChange}
            className="text-input"
          />
          <input
            type="text"
            placeholder="Address"
            value={this.state.address}
            onChange={this.onAddressChange}
            className="text-input"
          />
            <div>
              <button className="button">Save User</button>
            </div>

        </form>
    )
  }
};
