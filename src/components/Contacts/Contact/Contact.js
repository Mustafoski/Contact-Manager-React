import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import  {Consumer} from '../../../contacts';


class Contact extends Component {

  state = { 
    showContactInfo: false
  };

  onShowHandler = (e) => {
    this.setState({showContactInfo: !this.state.showContactInfo}); //toggle person
  };

  onDeleteHandler = async(id,dispatch) => {
    try{
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
        dispatch({type:'DELETE_CONTACT', payload:id});
      } catch(e) {
        dispatch({type:'DELETE_CONTACT', payload:id});
      }
  };

  render() {

    const { id, name , email ,phone} = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
        return (
          <div className="card card-body mb-3">
              <h4>{name} {' '}
              <i className="fas fa-sort-down"
              style={{cursor: 'pointer'}}
              onClick={this.onShowHandler} 
              /> 

              <i className="fas fa-times" 
              style={{cursor: 'pointer', float:'right', color:'red'}}
              onClick={this.onDeleteHandler.bind(this,id,dispatch)}></i>

              <Link to={`contact/edit/${id}`}>
              
                <i
                style={{
                  cursor:'poiner',
                  float:'right',
                  color:'black',
                  marginRight:'1rem'
                }} 
                className="fas fa-pencil-alt"></i>
              </Link>

              </h4>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">{email}</li>
                  <li className="list-group-item">{phone}</li>
                </ul>
              ): null}
          
          </div>
          
        )}}
        </Consumer>
      
    );
  }
};

Contact.propTypes = {
    contact:PropTypes.object.isRequired
    
};

export default Contact;