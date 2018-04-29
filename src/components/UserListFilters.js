import React from 'react';
import { connect } from 'react-redux';
import {
  setTextFilter,
  sortByDate,
  sortByFirstName,
  sortByLastName,
  sortByAddress,
  setbirthDate,
  setEndDate
} from '../actions/filters';
import { DateRangePicker } from 'react-dates';


export class UserListFilters extends React.Component {
  state = {
    calendarFocused: null,

  };

  onDatesChange = ({ birthDate, endDate }) => {
    this.props.setbirthDate(birthDate);
    this.props.setEndDate(endDate);
  };

  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  };

  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  };

  onSortChange = (e) => {
      console.log(e.target.value);
      if(e.target.value === 'date'){
        this.props.sortByDate();
      } else if(e.target.value === 'first-name'){
        this.props.sortByFirstName();
      } else if(e.target.value === 'last-name'){
        this.props.sortByLastName();
      } else if(e.target.value === 'address'){
        this.props.sortByAddress();
      }
    };

  render() {
    return (
      <div className="content-container">
        <div className="input-group">
          <div className="input-group__item">
              <input
                type="text"
                value={this.props.filters.text}
                onChange={this.onTextChange}
                className="text-input"
                placeholder="Search Users"
              />
          </div>
          <div className="input-group__item">
            <select
              value={this.props.filters.sortBy}
              onChange={this.onSortChange}
              className="select"
            >
              <option value="first-name">First Name</option>
              <option value="last-name">Last Name</option>
              <option value="address">Address</option>
              <option value="date">Date</option>
            </select>
          </div>
          <div className="input-group__item">
            <DateRangePicker
              startDate={this.props.filters.birthDate}
              endDate={this.props.filters.endDate}
              onDatesChange={this.onDatesChange}
              focusedInput={this.state.calendarFocused}
              onFocusChange={this.onFocusChange}
              showClearDates={true}
              numberOfMonths={1}
              isOutsideRange={() => false}
              startDateId="birthDate1"
              endDateId="endDate1"
            />
          </div>
        </div>
      </div>
    )
  }
};

const mapStateToProps = (state) => ({
  filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByFirstName: () => dispatch(sortByFirstName()),
  sortByLastName: () => dispatch(sortByLastName()),
  sortByAddress: () => dispatch(sortByAddress()),
  setbirthDate: (birthDate) => dispatch(setbirthDate(birthDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserListFilters);
