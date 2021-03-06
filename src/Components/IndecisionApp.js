import React from 'react';
import AddOption from './AddOption.js';
import Header from './Header.js';
import Action from './Action.js';
import Options from './Options.js';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  };
  handleDeleteOptions=()=> {
    this.setState(() => ({ options: [] }));
  };
  handleDeleteOption=(optionToRemove)=> {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  };
  handlePick=()=> {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(()=> ({
      selectedOption:option
    }));
  };
  handleClearModal=()=>{
    this.setState(()=>({selectedOption: undefined }));

  };
  handleAddOption=(option)=> {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }

    this.setState((prevState) => ({
      options: prevState.options.concat(option)
    }));
  };
    
    componentDidMount(){
      try{
        const json=localStorage.getItem('options');
        const options=JSON.parse(json);
        if(options){
          this.setState(()=>({ options }));
        }
      } catch(e){
  
      }
    }
    
    componentDidUpdate(prevProps,prevState){
       if(prevState.options.length !== this.state.options.length){
         const json = JSON.stringify(this.state.options);
         localStorage.setItem('options',json);
       } 
      
    }
    componentWillUnmount(){
      console.log('component will unmount');
    }
   
    render() {
      const subtitle = 'Put your life in the hands of a computer';
  
      return (
        <div>
          <Header subtitle={subtitle} />
          <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div class="widget">
          <Options
            options={this.state.options}
            handleDeleteOptions={this.handleDeleteOptions}
            handleDeleteOption={this.handleDeleteOption}
          />
          <AddOption
            handleAddOption={this.handleAddOption}
          />

          </div>
         

          <OptionModal 
          selectedOption={this.state.selectedOption}
          handleClearModal={this.handleClearModal}
          /> 

          </div>
         
        </div>
      );
    }
  }
  export default IndecisionApp;
  