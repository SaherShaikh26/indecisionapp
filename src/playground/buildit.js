import React from 'react';
import ReactDOM from 'react-dom';

class Visibility extends React.Component{
  constructor(props){
    super(props);
    
    this.handleVisibilty=this.handleVisibilty.bind(this);
    this.state={
      visibility:false
    };
  }
  handleVisibilty(){
    this.setState((prevState)=>{
      return{
        visibility: ! prevState.visibility
    };
  });

  }
  render(){
    return(
      <div>
    <h1>Visibility toggle</h1>
    <button  onClick={this.handleVisibilty}>
      {this.state.visibility? 'Hide details' : 'Show details'}
    </button>
    <br></br>
    {this.state.visibility? 'Hey these are some details':' '}
    </div>
    )
  }
}

ReactDOM.render(
  <Visibility />,
  document.getElementById('root')
);
