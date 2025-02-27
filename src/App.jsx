import { Col, Image, Row } from 'antd';
import { useEffect, useState } from 'react';

function App() {
  const [memes, setMemes] = useState([])
  const [picture,setPicture] = useState(null)
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  function getMemes(){
    fetch('https://mygo-api.onrender.com/mygo/all_img',{
      method:'GET',
      headers:{
        'Content-Type':'application/json',
      }})
    .then(res=>res.json())
    .then(data=>{
      setMemes(data.urls)
    })
  }


  useEffect(()=>{
    getMemes()
  },[])

  if(!memes.length) return(<></>)
  return (
    <div>
    <Row>
      {memes.map((item,key)=>(
        <Col key={key} className='p-2' xs={12} md={12} lg={6} xl={6} xxl={6}>
            <Image alt={item.alt} src={item.url} />
        </Col>
      ))}
    </Row>
    </div>
  )
}

export default App
