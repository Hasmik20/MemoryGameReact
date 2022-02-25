import {useState} from 'react'
import Card from './Card'

const Cards = () => {
      const [items, setItems] = useState([
        { id: 1, img: './img/piggy.jpg', stat: "" },
        { id: 1, img: './img/piggy.jpg', stat: "" },
        { id: 2, img: './img/mario.png', stat: "" },
        { id: 2, img: './img/mario.png', stat: "" },
        { id: 3, img: './img/masha.jpg', stat: "" },
        { id: 3, img: './img/masha.jpg', stat: "" },
        { id: 4, img: './img/bear.jpg', stat: "" },
        { id: 4, img: './img/bear.jpg', stat: "" },
        { id: 5, img: './img/harry.jpg', stat: "" },
        { id: 5, img: './img/harry.jpg', stat: "" },
        { id: 6, img: './img/zizzy.jpg', stat: "" },
        { id: 6, img: './img/zizzy.jpg', stat: "" },
        { id: 7, img: './img/vini.jpg', stat: "" },
        { id: 7, img: './img/vini.jpg', stat: "" },
        { id: 8, img: './img/bean.jpg', stat: "" },
        { id: 8, img: './img/bean.jpg', stat: "" }
      ].sort(() => Math.random() - 0.5))
  
   const [prev, setPrev] = useState(-1)
  
  const check = (current) => {
    if (items[current].id === items[prev].id) {
      items[current].stat = 'correct'
      items[prev].stat = 'correct'
       setItems([...items])
      setPrev(-1)
    } else {
       items[current].stat = 'wrong'
      items[prev].stat = 'wrong'
      setItems([...items])
      setTimeout(() => {
         items[current].stat = ''
      items[prev].stat = ''
       setItems([...items])
      setPrev(-1)
      },1000)
    }
  }

  const handelClick = (id) => {
    if (prev === -1) {
      items[id].stat = 'active'
      setItems([...items])
      setPrev(id)
    } else {
      check(id)
    }
  }
  
  return (
    <main className='main'>
      {
        items.map((item, index) => <Card key={index} {...item} handelClick={handelClick} index={ index}/>)
      }
    </main>
  )
}

export default Cards