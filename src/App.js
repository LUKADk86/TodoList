import React from 'react';
import TodoItems from './components/TodoItems/TodoItems';
import AddItem from './components/AddItem/AddItem';
import './App.css';

class App extends React.Component {
  state ={
    items:[
      { id:1,name:'steve', age:22},
      {id:2,name:'max', age:33},
      {id:3, name:'fill', age: 44}
    ]
  }
  deleteItem = (id)=>{
  let items=this.state.items.filter(item=>{
    return item.id !==id
  });

  this.setState({items})
  }
  addItem= (item) =>{
    item.id=Math.random();
    let items=this.state.items;
    items.push(item);
    this.setState({items});

  }
  render(){
  return (
    <div className="App">
      <h1>TodoList App</h1>
      <TodoItems items={this.state.items} deleteItem={this.deleteItem}/>
      <AddItem addItem={this.addItem}/>
    </div>
  );
  }
}

export default App;
