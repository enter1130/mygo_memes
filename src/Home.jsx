import { UpCircleFilled } from '@ant-design/icons';
import { Col, FloatButton, Image, Layout, Row } from 'antd';
import { useEffect, useState } from 'react';
import Loading from './Loading';
import MenuComponent from './MenuComponent';

const { Header, Footer, Sider, Content } = Layout;

function Home() {
  const [memes, setMemes] = useState([])
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


  return (
    <Layout>
      <Header id='top' style={{backgroundColor:'rgb(55, 55, 55)',margin:0,padding:0}}>
        <MenuComponent />
      </Header>
      <Content style={{backgroundColor:'rgb(55, 55, 55)'}}>
      <Row>
        {memes.length?memes.map((item,key)=>(
          <Col key={key} className='p-2' xs={12} md={12} lg={6} xl={6} xxl={6}>
              <Image alt={item.alt} src={item.url} />
          </Col>
        )):<Loading />}
      </Row>
      <FloatButton
        href='#top'
        type={'default'}
        style={{ insetInlineEnd: 24 }}
        icon={<UpCircleFilled />}
      />
      </Content>
    </Layout>
  )
}

export default Home
