import React from 'react';
const TodoItems=(props) => {
  const {items, deleteItem}=props;
  let length = items.length;

  const ListItems = length ? (items.map(item=>{
    return(
      <div key={item.id}>
      <span>nom: </span>
        <span>{item.name}</span><br/>
        <span> age: </span>
        <span>{item.age}</span><br/>
        <span> action: </span>
        <span onClick={()=>deleteItem(item.id)}>&times;</span><br/>
        <div>_____________</div>
      </div>
    )
  })):(
     <p>vous avez tout supprimer</p>
  )

  return (
    <div>



      {ListItems}
    </div>
  )
}
export default TodoItems
