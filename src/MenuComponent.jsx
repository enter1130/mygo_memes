import { AlertOutlined, HomeOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

function MenuComponent() {
  const items = [
    {
        label: (
          <a href="/" rel="noopener noreferrer">
            Home
          </a>
        ),
        key: 'home',
        icon: <HomeOutlined />,
    },{
      label: (
        <a href="/random" rel="noopener noreferrer">
          Random
        </a>
      ),
      key: 'random',
      icon: <AlertOutlined />,
    },{
      label: (
        <a href="/about" rel="noopener noreferrer">
          About
        </a>
      ),
      key: 'about',
      icon: <InfoCircleOutlined />,
    }
  ]

  return (
    <Menu theme='dark' mode={'horizontal'} defaultSelectedKeys={['2']} items={items} style={{flex: 1,minWidth: 0,backgroundColor:'rgb(55, 55, 55)',zIndex:'999'}} />
  )
}

export default MenuComponent
