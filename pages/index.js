
import styles from '../styles/Home.module.css'
import 'antd/dist/antd.css'
import Link from 'next/link'
const { Header, Footer, Sider, Content } = Layout;
import { Layout,Typography,Row, Col } from "antd";
const { Title } = Typography;
import {Table,Avatar} from 'antd'
import Hero from '../components/Hero'
import { UserOutlined } from '@ant-design/icons';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
  {
    title: 'Description',
    dataIndex: 'body',
  },
  
  
];

export default function Home({data}) {
  console.log('this',data);
  return (
       
      <>
        <Header style={{background:'#1890ff'}}> <Row>
        <Col span={22}><Title  level={3} style={{color:'white',lineHeight:'2.3!important'}}>Admin</Title> </Col>
      
        <Col span={2}> <Avatar style={{ backgroundColor: 'red' }} icon={<UserOutlined />} /></Col>
        </Row></Header>
       <Layout>
       <Hero/>
       <Content> 
       <Row className={styles.row}>
         <Col span={24}><Table columns={columns} dataSource={data} size="middle" /></Col>
       </Row>  </Content>
       </Layout>
      <Footer className={styles.footer}>Design & Developed by CBnits.com</Footer>
        </>
    )
}

export async function getStaticProps()
{
   const res = await fetch("https://jsonplaceholder.typicode.com/comments?_limit=5")
   const data = await res.json()
   return{
     props:{
       data
     }
   }
}