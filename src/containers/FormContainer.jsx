import React, { Component } from 'react';
import "../App.css"

/* Import Components */
import CheckBox from '../components/CheckBox';
import Input from '../components/Input';
import TextArea from '../components/TextArea';
import Select from '../components/Select';
import Button from '../components/Button'

class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        title: '',
        desc: '',
        target: '',
        timeframe: '',
        region: '',
        rewardbudget: '',
        pointbudget: '',
        socialimpact: '',
        envimpact: '',
        finimpact: '',
        name: '',
        age: '',
        gender: '',
        skills: [],
        about: ''

      },

      targetOptions: ['100', '200', '500', '1000', '2000', '5000', '10000'],
      timeframeOptions: ['10', '30', '60', '100', '200', '360'],
      rewardBudgetOptions: ['1000', '5000', '10000', '20000', '30000', '50000', '75000', '100000'],
      genderOptions: ['Male', 'Female', 'Others'],
      skillOptions: ['Programming', 'Development', 'Design', 'Testing']

    }
    this.handleTextArea = this.handleTextArea.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleDesc = this.handleDesc.bind(this);
    this.handleAge = this.handleAge.bind(this);
    this.handleFullName = this.handleFullName.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleCheckBox = this.handleCheckBox.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  /* This lifecycle hook gets executed when the component mounts */

  handleTitle(e) {
    let value = e.target.value;
    this.setState(prevState => ({
      newUser:
      {
        ...prevState.newUser, title: value
      }
    }), () => console.log(this.state.newUser))
  }

  handleDesc(e) {
    let value = e.target.value;
    this.setState(prevState => ({
      newUser:
      {
        ...prevState.newUser, title: value
      }
    }), () => console.log(this.state.newUser))
  }

  handleTarget(e) {
    let value = e.target.value;
    this.setState(prevState => ({
      newUser:
      {
        ...prevState.newUser, title: value
      }
    }), () => console.log(this.state.newUser))
  }

  handleTimeframe(e) {
    let value = e.target.value;
    this.setState(prevState => ({
      newUser:
      {
        ...prevState.newUser, title: value
      }
    }), () => console.log(this.state.newUser))
  }

  handleRegion(e) {
    let value = e.target.value;
    this.setState(prevState => ({
      newUser:
      {
        ...prevState.newUser, title: value
      }
    }), () => console.log(this.state.newUser))
  }

  handleReardBudget(e) {
    let value = e.target.value;
    this.setState(prevState => ({
      newUser:
      {
        ...prevState.newUser, title: value
      }
    }), () => console.log(this.state.newUser))
  }

  handlePointBudget(e) {
    let value = e.target.value;
    this.setState(prevState => ({
      newUser:
      {
        ...prevState.newUser, title: value
      }
    }), () => console.log(this.state.newUser))
  }
  handleSocialImpact(e) {
    let value = e.target.value;
    this.setState(prevState => ({
      newUser:
      {
        ...prevState.newUser, title: value
      }
    }), () => console.log(this.state.newUser))
  }

  handleEnvImpact(e) {
    let value = e.target.value;
    this.setState(prevState => ({
      newUser:
      {
        ...prevState.newUser, title: value
      }
    }), () => console.log(this.state.newUser))
  }

  handleFinImpact(e) {
    let value = e.target.value;
    this.setState(prevState => ({
      newUser:
      {
        ...prevState.newUser, title: value
      }
    }), () => console.log(this.state.newUser))
  }

  handleFullName(e) {
    let value = e.target.value;
    this.setState(prevState => ({
      newUser:
      {
        ...prevState.newUser, name: value
      }
    }), () => console.log(this.state.newUser))
  }

  handleAge(e) {
    let value = e.target.value;
    this.setState(prevState => ({
      newUser:
      {
        ...prevState.newUser, age: value
      }
    }), () => console.log(this.state.newUser))
  }

  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(prevState => ({
      newUser:
      {
        ...prevState.newUser, [name]: value
      }
    }), () => console.log(this.state.newUser))
  }

  handleTextArea(e) {
    console.log("Inside handleTextArea");
    let value = e.target.value;
    this.setState(prevState => ({
      newUser: {
        ...prevState.newUser, about: value
      }
    }), () => console.log(this.state.newUser))
  }


  handleCheckBox(e) {

    const newSelection = e.target.value;
    let newSelectionArray;

    if (this.state.newUser.skills.indexOf(newSelection) > -1) {
      newSelectionArray = this.state.newUser.skills.filter(s => s !== newSelection)
    } else {
      newSelectionArray = [...this.state.newUser.skills, newSelection];
    }

    this.setState(prevState => ({
      newUser:
        { ...prevState.newUser, skills: newSelectionArray }
    })
    )
  }

  handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.newUser;

    fetch('http://example.com', {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }).then(response => {
      response.json().then(data => {
        console.log("Successful" + data);
      })
    })
  }

  handleClearForm(e) {

    e.preventDefault();
    this.setState({
      newUser: {
        title: '',
        desc: '',
        target: '',
        timeframe: '',
        region: '',
        rewardbudget: '',
        pointbudget: '',
        socialimpact: '',
        envimpact: '',
        finimpact: '',
        name: '',
        age: '',
        gender: '',
        skills: [],
        about: ''
      },
    })
  }

  render() {
    return (

      <form className="container-fluid" onSubmit={this.handleFormSubmit}>


        <Input inputType={'text'}
          title={'Title'}
          name={'title'}
          value={this.state.newUser.title}
          placeholder={'Enter title of yaag'}
          handleChange={this.handleInput}

        /> {/* title of the yaag */}

        <TextArea
          title={'Description'}
          rows={10}
          value={this.state.newUser.desc}
          name={'desc'}
          handleChange={this.handleTextArea}
          placeholder={'Describe about your yaag'} />{/* Description */}

        <Select title={'Set Target'}
          name={'settarget'}
          options={this.state.targetOptions}
          value={this.state.newUser.target}
          placeholder={'Select Scale out user count'}
          handleChange={this.handleInput}
        /> {/* Set Target Selection */}

        <Select title={'Set Timeframe'}
          name={'settimeframe'}
          options={this.state.timeframeOptions}
          value={this.state.newUser.timeframe}
          placeholder={'Select Scale out user count'}
          handleChange={this.handleInput}
        /> {/* Set Target Selection */}

        <Input inputType={'text'}
          title={'Region'}
          name={'name'}
          value={this.state.newUser.region}
          placeholder={'Enter name of city/state/locality you want to scale out'}
          handleChange={this.handleInput}
        /> {/* Region to scale out */}

        <Select title={'Reward Budget'}
          name={'rewardbudget'}
          options={this.state.rewardBudgetOptions}
          value={this.state.newUser.rewardbudget}
          placeholder={'Select Scale out user count'}
          handleChange={this.handleInput}
        /> {/* Reward budget Selection */}

        <Input inputType={'number'}
          name={'Point Budget'}
          title={'Point Budget'}
          value={this.state.newUser.pointbudget}
          placeholder={'Enter your Point Budget'}
          handleChange={this.handlePointBudget} /> {/* Point Budget */}

        <Input inputType={'text'}
          title={'Full Name'}
          name={'name'}
          value={this.state.newUser.name}
          placeholder={'Enter your name'}
          handleChange={this.handleInput}

        /> {/* Name of the user */}

        <Input inputType={'number'}
          name={'age'}
          title={'Age'}
          value={this.state.newUser.age}
          placeholder={'Enter your age'}
          handleChange={this.handleAge} /> {/* Age */}


        <Select title={'Gender'}
          name={'gender'}
          options={this.state.genderOptions}
          value={this.state.newUser.gender}
          placeholder={'Select Gender'}
          handleChange={this.handleInput}
        /> {/* Age Selection */}
        <CheckBox title={'Skills'}
          name={'skills'}
          options={this.state.skillOptions}
          selectedOptions={this.state.newUser.skills}
          handleChange={this.handleCheckBox}
        /> {/* Skill */}
        <TextArea
          title={'About you.'}
          rows={10}
          value={this.state.newUser.about}
          name={'currentPetInfo'}
          handleChange={this.handleTextArea}
          placeholder={'Describe your past experience and skills'} />{/* About you */}

        <Button
          action={this.handleFormSubmit}
          type={'primary'}
          title={'Submit'}
          style={buttonStyle}
        /> { /*Submit */}

        <Button
          action={this.handleClearForm}
          type={'secondary'}
          title={'Clear'}
          style={buttonStyle}
        /> {/* Clear the form */}

      </form>

    );
  }
}

const buttonStyle = {
  margin: '10px 10px 10px 10px'
}

export default FormContainer;