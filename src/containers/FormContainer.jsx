import React, { Component } from 'react';
import "../App.css"
import {Redirect} from 'react-router-dom';
import { withRouter } from 'react-router-dom'

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
        video: '',
        logo: ''
      },

      targetOptions: ['100', '200', '500', '1000', '2000', '5000', '10000'],
      timeframeOptions: ['10', '30', '60', '100', '200', '360'],
      rewardBudgetOptions: ['1000', '5000', '10000', '20000', '30000', '50000', '75000', '100000'],
      
    }
    this.handleTextArea = this.handleTextArea.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleDesc = this.handleDesc.bind(this);
    this.handleTarget = this.handleTarget.bind(this);
    this.handleTimeframe = this.handleTimeframe.bind(this);
    this.handleRegion = this.handleRegion.bind(this);
    this.handleRewardBudget = this.handleRewardBudget.bind(this);
    this.handlePointBudget = this.handlePointBudget.bind(this);
    this.handleSocialImpact = this.handleSocialImpact.bind(this);
    this.handleEnvImpact = this.handleEnvImpact.bind(this);
    this.handleFinImpact = this.handleFinImpact.bind(this);
    this.handleVideo = this.handleVideo.bind(this);
    this.handleLogo = this.handleLogo.bind(this);
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
        ...prevState.newUser, desc: value
      }
    }), () => console.log(this.state.newUser))
  }

  handleTarget(e) {
    let value = e.target.value;
    this.setState(prevState => ({
      newUser:
      {
        ...prevState.newUser, target: value
      }
    }), () => console.log(this.state.newUser))
  }

  handleTimeframe(e) {
    let value = e.target.value;
    this.setState(prevState => ({
      newUser:
      {
        ...prevState.newUser, timeframe: value
      }
    }), () => console.log(this.state.newUser))
  }

  handleRegion(e) {
    let value = e.target.value;
    this.setState(prevState => ({
      newUser:
      {
        ...prevState.newUser, region: value
      }
    }), () => console.log(this.state.newUser))
  }

  handleRewardBudget(e) {
    let value = e.target.value;
    this.setState(prevState => ({
      newUser:
      {
        ...prevState.newUser, rewardbudget: value
      }
    }), () => console.log(this.state.newUser))
  }

  handlePointBudget(e) {
    let value = e.target.value;
    this.setState(prevState => ({
      newUser:
      {
        ...prevState.newUser, pointbudget: value
      }
    }), () => console.log(this.state.newUser))
  }
  handleSocialImpact(e) {
    let value = e.target.value;
    this.setState(prevState => ({
      newUser:
      {
        ...prevState.newUser, socialimpact: value
      }
    }), () => console.log(this.state.newUser))
  }

  handleEnvImpact(e) {
    let value = e.target.value;
    this.setState(prevState => ({
      newUser:
      {
        ...prevState.newUser, envimpact: value
      }
    }), () => console.log(this.state.newUser))
  }

  handleFinImpact(e) {
    let value = e.target.value;
    this.setState(prevState => ({
      newUser:
      {
        ...prevState.newUser, finimpact: value
      }
    }), () => console.log(this.state.newUser))
  }

  handleVideo(e) {
    let value = e.target.value;
    this.setState(prevState => ({
      newUser:
      {
        ...prevState.newUser, video: value
      }
    }), () => console.log(this.state.newUser))
  }

  handleLogo(e) {
    let value = e.target.value;
    this.setState(prevState => ({
      newUser:
      {
        ...prevState.newUser, logo: value
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
        ...prevState.newUser, desc: value
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
    console.log("USER DATA");
    console.log(JSON.stringify(userData));

    /*fetch('/users').then(Response => {
      Response.json().then(data => {
        console.log("Successful " + data);
      })
    );
    }*/ 
    
    fetch('/create', {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }).then(response => {
      response.json().then(data => {
        console.log("Successful" + data);
        this.props.history.push('/CD');
      })
//      console.log("REDIRECTING TO YDS");
      
    }) 
    
     // return (<Redirect to={'/YDS'}/>)
    
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
        video: '',
        logo: '',
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
          name={'target'}
          options={this.state.targetOptions}
          value={this.state.newUser.target}
          placeholder={'Select Scale out user count'}
          handleChange={this.handleInput}
        /> {/* Set Target Selection */}

        <Select title={'Set Timeframe'}
          name={'timeframe'}
          options={this.state.timeframeOptions}
          value={this.state.newUser.timeframe}
          placeholder={'Select Scale out user count'}
          handleChange={this.handleInput}
        /> {/* Set Timeframe Selection */}

        <Input inputType={'text'}
          title={'Region'}
          name={'region'}
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
          title={'Social Impact'}
          name={'socialimpact'}
          value={this.state.newUser.socialimpact}
          placeholder={'Describe Social Impact'}
          handleChange={this.handleInput}
        /> {/* Social Impact */}

        <Input inputType={'text'}
          title={'Environmental Impact'}
          name={'envimpact'}
          value={this.state.newUser.envimpact}
          placeholder={'Describe Environmental Impact'}
          handleChange={this.handleInput}
        /> {/* Env Impact  to scale out */}
        
        <Input inputType={'text'}
          title={'Financial Impact'}
          name={'finimpact'}
          value={this.state.newUser.finimpact}
          placeholder={'Describe Financial Impact'}
          handleChange={this.handleInput}
        /> {/* Financial Impact to scale out */}

        <Input inputType={'text'}
          title={'Video'}
          name={'video'}
          value={this.state.newUser.video}
          placeholder={'Upload Video'}
          handleChange={this.handleInput}
        /> {/* Video about Yaag */}

        <Input inputType={'text'}
          title={'Logo'}
          name={'logo'}
          value={this.state.newUser.logo}
          placeholder={'Upload Logo'}
          handleChange={this.handleInput}
        /> {/* Logo of your yaag */}

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