import { UpCircleFilled } from '@ant-design/icons';
import { AutoComplete, Col, FloatButton, Image, Input, Layout, Row } from 'antd';
import { useEffect, useState } from 'react';
import Loading from './Loading';
import MenuComponent from './MenuComponent';

const { Header, Footer, Sider, Content } = Layout;

function Home() {
  const [all, setAll] = useState([])
  const [search, setSearch] = useState(null);
  const [memes, setMemes] = useState([])
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  function getMemes(){
    fetch('https://mygo-api.onrender.com/mygo/all_img',{
      method:'GET',
      headers:{
        'Content-Type':'application/json',
      }})
    .then(res=>res.json())
    .then(data=>{
      setMemes(data.urls)
      setAll(data.urls)
    })
  }


  useEffect(()=>{
    getMemes()
  },[])

  const onSearch = (searchText) => {
    setOpen(true)
    const filteredOptions = all
      .filter(item => item.alt.toLowerCase().includes(searchText.toLowerCase()))
      .map(item => ({
        value: item.alt,
        url: item.url,
        label: (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {item.alt}
          </div>
        ),
      }));
    setSearch(filteredOptions);
  };

  const onSelect = (e)=>{
    setOpen(false)
    setLoading(true)
    const filteredOptions = all
      .filter(item => item.alt.toLowerCase().includes(e.toLowerCase()))
      .map(item => ({
        alt: item.alt,
        url: item.url,
      }));
    setTimeout(() => {      
      setLoading(false)
      setMemes(filteredOptions);
    }, 1000);
  }

  const onClear=()=>{
    setMemes(all)
  }

  return (
    <Layout>
      <Header id='top' style={{backgroundColor:'rgb(55, 55, 55)',margin:0,padding:0}}>
        <MenuComponent />
      </Header>
      <Content style={{backgroundColor:'rgb(55, 55, 55)'}}>
      {memes.length?<AutoComplete
        options={search}
        size="large"
        className='p-2 sticky-top'
        onSearch={onSearch}
        onSelect={(e)=>onSelect(e)}
        open={open}
        style={{width:'100%'}}
      >
        <Input.Search placeholder="輸入關鍵台詞" size={'large'} allowClear enterButton onClear={()=>onClear} loading={loading} />
      </AutoComplete>:null}
      <Row className='mt-3'>
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
