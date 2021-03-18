import PropTypes from "prop-types";
import { Component } from "react";
import style from './ContactForm.module.css';

class ContactForm extends Component{
  state = {
    name: "",
    number: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };
  
  reset = () => {
    this.setState({ name: "", number: "" });
  };

  handleAdd = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  render() {
    return (
      <form onSubmit={this.handleAdd}>
        <label className={style.labelForm}>
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label className={style.labelForm}>
          Number
          <input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit" className={style.butForm}>Add contact</button>
      </form>
    );
  }
}
ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default ContactForm;
