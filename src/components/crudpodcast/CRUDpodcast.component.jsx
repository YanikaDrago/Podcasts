import React from "react";
// import { Navigate } from "react-router-dom";
import CrudInput from "../crud-input/CrudInput.component";
import Button from "../button/Button.component";

import "./crud-podcast.styles.css"

class CRUDpodcast extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      fname: '',
      lname: '',
      city: '',
      country: '',
      google: '',
      spotify: '',
      яндекс: '',
      description: '',
    };
  };


  handleSubmit = event => {
    event.preventDefault();

    this.setState({
        name: '',
        fname: '',
        lname: '',
        city: '',
        country: '',
        google: '',
        spotify: '',
        яндекс: '',
        description: '',
      });
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  

  render() {
    return (
      <div className='container'>

        <form  onSubmit={this.handleSubmit}>
          <CrudInput
            name='name'
            type='text'
            handleChange={this.handleChange}
            value={this.state.name}
            label='Podcast name'
            required
          />
          <CrudInput
            name='fname'
            type='text'
            value={this.state.fname}
            handleChange={this.handleChange}
            label='First Name'
            required
          />
          <CrudInput
            name='lname'
            type='text'
            value={this.state.lname}
            handleChange={this.handleChange}
            label='Last Name'
            required
          />
          <CrudInput
            name='city'
            type='text'
            value={this.state.city}
            handleChange={this.handleChange}
            label='City'
            required
          />
          <CrudInput
            name='country'
            type='text'
            value={this.state.country}
            handleChange={this.handleChange}
            label='Country'
            required
          />
          <CrudInput
            name='google'
            type='text'
            value={this.state.google}
            handleChange={this.handleChange}
            label='Google'
            required
          />
          <CrudInput
            name='spotify'
            type='text'
            value={this.state.spotify}
            handleChange={this.handleChange}
            label='Spotify'
            required
          />
          <CrudInput
            name='яндекс'
            type='text'
            value={this.state.яндекс}
            handleChange={this.handleChange}
            label='Яндекс'
            required
          />
          <CrudInput
            name='description'
            type='text'
            value={this.state.description}
            handleChange={this.handleChange}
            label='Description'
            required
          />
          <div className='crud-buttons'>
            <Button bottonStyle="button-crud" type='submit'> Сохранить </Button>
            <Button bottonStyle="button-crud" type='submit'> Отмена </Button>
 
          </div>
        </form>
      </div>
    );
  }
}

export default CRUDpodcast;