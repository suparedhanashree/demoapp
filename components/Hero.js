import 'antd/dist/antd.css'
import Link from 'next/link'
const { Header, Footer, Sider, Content } = Layout;
import { Layout,Typography,Menu } from "antd";
const { Title } = Typography;
import {Table} from 'antd'
import {
    AppstoreOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined,
  } from '@ant-design/icons';
  
  const { SubMenu } = Menu;
  

export default function Hero() {
    return (
        <Sider ><Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        
      >
        <Menu.Item key="1" icon={<PieChartOutlined />}>
        <Link href="/" style={{color:'white'}}><a></a></Link>
        Home
        </Menu.Item>
        <Menu.Item key="2" icon={<DesktopOutlined />}>
       <Link href="/about" style={{color:'white'}}><a></a></Link>
       About
        </Menu.Item>
        <Menu.Item key="3" icon={<ContainerOutlined />}>
        <Link href="/form" style={{color:'white'}}><a></a></Link>
     Add Task
        </Menu.Item>
        <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
          <Menu.Item key="7">Option 7</Menu.Item>
          <Menu.Item key="8">Option 8</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
          </SubMenu>
        </SubMenu>
      </Menu></Sider>
 
      )
  }
  