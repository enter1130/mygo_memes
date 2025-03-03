import { Col, Image, Layout, Row } from 'antd';
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
    fetch('https://mygo-api.onrender.com/mygo/random_img',{
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

  return (
    <Layout>
      <Header style={{backgroundColor:'rgb(55, 55, 55)',margin:0,padding:0}}>
        <MenuComponent />
      </Header>
      <Content style={{backgroundColor:'rgb(55, 55, 55)'}}>
      {memes?<Row align={'middle'} justify={'center'}>
          <Col xs={18} md={18}>
            <Image alt={memes.alt} src={memes.url} />
          </Col>
        </Row>:<Loading />}
      </Content>
    </Layout>
  )
}

export default RandomComponent
