import { Card, Divider, Layout, Typography } from 'antd';
import MenuComponent from './MenuComponent';

const { Header, Content } = Layout;
const { Title, Paragraph, Text, Link } = Typography;
function AboutComponent() {

  return (
    <Layout>
      <Header style={{backgroundColor:'rgb(55, 55, 55)',margin:0,padding:0}}>
        <MenuComponent />
      </Header>
      <Content className='p-3 d-flex justify-content-center align-items-center' style={{backgroundColor:'rgb(55, 55, 55)'}}>
        <Card cover={<img style={{maxHeight:'400px'}} src='https://drive.miyago9267.com/d/file/img/mygo/我愛慕虛榮啦.jpg' />}>

        <Typography>
          <Title level={3}>關於我們</Title>
          <ul>
            <li>本專案主要是練習Docker、Render和串接API</li>
            <li>本專案連結： <a href="https://github.com/enter1130/mygo_memes" target="_blank">https://github.com/enter1130/mygo_memes</a></li>
          </ul>
          <Divider className='mb-3'></Divider>
          <Title level={3}>使用技術</Title>
          <ul>
              <li>前端框架：React.js（搭配 Vite）</li>
              <li>UI 元件庫：Ant Design</li>
              <li>開發環境：Vite</li>
              <li>部署與容器化：Docker</li>
              <li>其他技術：Render、GitHub</li>
          </ul>
          <Divider className='mb-3'></Divider>
          <Title level={3}>特別感謝</Title>
          <ul>
            <li>本網站部分功能使用了開源專案，在此向開發者們表達感謝</li>
            <li>本網站MYGO圖包API基於 <a href="https://github.com/miyago9267/MyGO-API" target="_blank">MyGO-API</a>，感謝 <strong>@miyago9267</strong> 的開發與維護。</li>
          </ul>
          <Divider className='mb-3'></Divider>
        </Typography>
        </Card>

      </Content>
    </Layout>
  )
}

export default AboutComponent
