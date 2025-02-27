import { Image, Layout } from 'antd';
import { useEffect, useState } from 'react';
import Loading from './Loading';
import MenuComponent from './MenuComponent';

const { Header, Content } = Layout;

function RandomComponent() {
  const [memes, setMemes] = useState(null)
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
      setMemes(data.urls[getRandomInt(0,data.urls.length)])
    })
  }

  useEffect(()=>{
    getMemes()
  },[])

  if(!memes) return(<Loading />)
  return (
    <Layout>
      <Header style={{backgroundColor:'rgb(55, 55, 55)',margin:0,padding:0}}>
        <MenuComponent />
      </Header>
      <Content className='p-3' style={{backgroundColor:'rgb(55, 55, 55)'}}>
        <Image alt={memes.alt} src={memes.url} />
      </Content>
    </Layout>
  )
}

export default RandomComponent
