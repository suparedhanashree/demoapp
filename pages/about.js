import styles from '../styles/Home.module.css'
import 'antd/dist/antd.css'
const { Header, Footer, Sider, Content } = Layout;
import { Layout,Image, Row, Col,Typography,Avatar} from "antd";
import { UserOutlined } from '@ant-design/icons';
import Hero from '../components/Hero'
const { Title } = Typography;


export default function About() {
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
         <Col span={12}><Image src="../../images/banner.jpg"  /></Col>
        <Col span={12}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</Col>
       </Row>
       <Row className={styles.row}>
       <Col span={12}><Image src="../../images/banner.jpg" /></Col>
       <Col span={12}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</Col>
    </Row> </Content>
        </Layout>
      <Footer className={styles.footer}>Design & Developed by CBnits.com</Footer>
        </>
    )
}
