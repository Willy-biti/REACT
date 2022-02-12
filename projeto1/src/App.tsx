import { useState } from 'react';
import { Header } from './components/Header';
import {Footer} from './components/Footer'
const App = () => {

    const [name, setName] = useState ('Willy');
    const [age, setAge] = useState (24);
    const [bg, setBg] = useState ('#391');


    const [list, setList] = useState([
      "Uhuuuuuuuuuuuuuuuu",
      "Ahaaaaaaaaaaaaaaaaaa",
      "Ohooooooooooooooo"
    ])

    const handle24 = () => {
      setAge(24)
      setBg('#391')
    }
    const handle90 = () => {
      setAge(90)
      setBg('#39e2')
    }

    return(
      <div style={{backgroundColor: bg}}>
        <Header name={name} age={age}  />

        {age === 90 && 
        <button onClick={handle24}>Tenho 24 anos</button> 
        }

        {age === 24 && 
          <button onClick={handle90}>Tenho 90 anos</button>
        }

        <hr />

        <ul>
            {list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
        </ul>
        {/* {age > 30 && "Ebaaaaaaaaaaaaaa"} */}



        <Footer / >
      </div>
    )
}

export default App