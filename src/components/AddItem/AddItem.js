import React from 'react';
class AddItem extends React.Component {
state={
  name:'',
  age:''
}
handleChange=(e) =>{
  this.setState({
    [e.target.id]:e.target.value
  })

}
handleSubmit= (e) =>{
  if(e.target.name.value===""){
    return false
  }else{
  e.preventDefault();
  this.props.addItem(this.state);
  this.setState({
    name:'',
    age: ''
  })
  }
}
  render(){
  return (
    <div>
      <form onSubmit={this.handleSubmit}>
      <input type='text' placerholder="nom" id='name' value={this.state.name} onChange={this.handleChange}/>
      <input type='number' placerholder="age" id='age' value={this.state.age} onChange={this.handleChange}/>
      <input type='submit' value="ajouter" id='submit' />
      </form>
    </div>
  );
  }
}

export default AddItem;
