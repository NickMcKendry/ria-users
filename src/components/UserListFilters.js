import React from 'react';
import { connect } from 'react-redux';
import {
  setTextFilter,
  sortByFirstName,
  sortByLastName,
} from '../actions/filters';


export class UserListFilters extends React.Component {

  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  };

  onSortChange = (e) => {
    if(e.target.value === 'first-name'){
        this.props.sortByFirstName();
      } else if(e.target.value === 'last-name'){
        this.props.sortByLastName();
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
            </select>
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
  sortByFirstName: () => dispatch(sortByFirstName()),
  sortByLastName: () => dispatch(sortByLastName()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserListFilters);
