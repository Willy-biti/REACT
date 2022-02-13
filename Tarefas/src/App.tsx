import { useState } from 'react'
import * as C from './App.styles'
import { Item } from './types/item';
import {ListItem} from './components/ListItem'
import { AddArea } from './components/AddArea';

const App = () =>{
  const [list, setList] = useState<Item[]>([
    {id: 1, name: 'Comprar sabonete', done: false},
    {id: 2, name: 'Comprar sabão', done: true},
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id:list.length + 1,
      name: '',
      done:false
    })
    setList(newList)
  }

  return(
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        {/* {Adicionar novas tarefas} */}
        <AddArea onEnter = {handleAddTask} />

        {list.map((item, index)=>(
            <ListItem key={index} item={item} />
          ))}
        
      </C.Area>
    </C.Container>
  );
}


export default App