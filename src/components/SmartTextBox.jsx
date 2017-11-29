import React, { Component } from 'react';
import PropTypes from 'prop-types';


class SmartTextBox extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      searchText: ''
    }
  }

  handleChange(ev) {
    ev.preventDefault();
    this.setState({
      searchText: ev.target.value
    });
  }

  renderOption() {
    let condition;
    return this.props.options.map( (option, i) => {
      if(this.state.searchText) {
        condition = option.name.includes(this.state.searchText)
      } else {
        condition = i < 20
      }
      if(condition) {
        return (<option key={option.id}>{option.name}</option>);
      }
    });
  }

  render() {
    console.log('this', this);
    return (
      <div>
        <h1>SmartTextBox</h1>
        <input
          type="text"
          placeholder="Search"
          value={this.state.searchText}
          onChange={this.handleChange}
        />
        <br />
        <select >
          {this.renderOption()}
        </select>
      </div>
    );
  }
}

SmartTextBox.propTypes = {
  options: PropTypes.array,
};

export default SmartTextBox;
