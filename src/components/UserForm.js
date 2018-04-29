import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';


export default class UserForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: props.user ? props.user.firstName : '',
      lastName: props.user ? props.user.lastName : '',
      address: props.user ? props.expense.address : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
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

  onDateChange = (createdAt) => {
    if(createdAt){
      this.setState(() => ({ createdAt }));
    }
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }))
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
        createdAt: this.state.createdAt.valueOf(),
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
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
            <div>
              <button className="button">Save User</button>
            </div>

        </form>
    )
  }
};
