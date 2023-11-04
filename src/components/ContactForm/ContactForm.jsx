import React from "react"
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

class ContactForm extends React.Component {

    nameId = nanoid();
    telId = nanoid();
   
  state = {
        id: "",
        name: "",
        number: "",
    }; 
    
    handleChange = (evt) => {
        const {name,value} = evt.currentTarget;
        this.setState({[name]: value});
    };

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.onSubmit(this.state);
        this.reset();
    };

    reset = () => {
        this.setState({
            id: "",
            name: "",
            number: "",
        });
    };

    render() {
    return (
        <form className ={styles.contactForm} onSubmit={this.handleSubmit}>
            <label className={styles.inputLabel} htmlFor = {this.nameId}>
                Name
        <input
        className= {styles.inputContent}
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
                    id={this.nameId}
                    value={this.state.name}
                    onChange={this.handleChange}
/>
            </label>
            <label className={styles.inputLabel} htmlFor={this.telId}>
                Number
                <input
                className= {styles.inputContent}
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={this.state.number}
                    id={this.telId}
                    onChange={this.handleChange}
/>
            </label>
<button type = "submit" className= {styles.addContact}>
Add contact
</button>
</form>
    );
    }
}

ContactForm.propTypes = {
    state: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  };
export default ContactForm;