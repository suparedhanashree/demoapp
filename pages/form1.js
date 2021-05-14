import styles from '../styles/Home.module.css'
import 'antd/dist/antd.css'
const { Header, Footer, Sider, Content } = Layout;
import { Layout,Image, Row, Col,Typography,Avatar,Table} from "antd";
import { UserOutlined } from '@ant-design/icons';
import Hero from '../components/Hero'
const { Title } = Typography;
import {useState} from 'react'

const columns = [
  {
    title: 'Name',
    dataIndex: 'userInput',
  },
  {
    title: 'Email',
    dataIndex: 'userInput1',
  },
 
  
  
];

export default function Form() {
    const [userInput,setUserInput] = useState('')
    const [userInput1,setUserInput1] = useState('')
    const [todoList,setTodoList]=useState([])
    const handleChange = (e)=>{
        e.preventDefault()
        setUserInput(e.target.value)
        //console.log(userInput)
        
    }
    const handleChange1 = (e)=>{
      e.preventDefault()
      setUserInput1(e.target.value)
      //console.log(userInput)
      
  }

    const handleSubmit =(e)=>{
      e.preventDefault()
      setTodoList([
        userInput,
        userInput1,
        ...todoList
      ])
      setUserInput('')
    }

    const handleDelete=(todo)=>{
      const updatedArray = todoList.filter(
        todoItem=>todoList.indexOf(todoItem)!=todoList.indexOf(todo)
      )
      setTodoList(updatedArray);

    }
   
  return (
        
           
      
         <>
         <Header style={{background:'#1890ff'}}> <Row>
          <Col span={22}><Title  level={3} style={{color:'white',lineHeight:'2.3!important'}}>Admin</Title> </Col>
        
          <Col span={2}> <Avatar style={{ backgroundColor: 'red' }} icon={<UserOutlined />} /></Col>
          </Row></Header>
         <Layout>
         <Hero/>
          <Content> 
          <form>
                <input type="text"  placeholder={'Enter a Item'} onChange={handleChange} value={userInput}></input>
                <br></br>
                <input type="text"  placeholder={'Enter a Item'} onChange={handleChange1} value={userInput1}></input>
                <button onClick={handleSubmit} >Submit</button>
            </form>
            <ul>
              {/* {
              todoList.length>=1? todoList.map((todo,idx)=>{
              return <li key={idx}>{todo} <buttun style={{background:'red'}} onClick={(e)=>{e.preventDefault(); handleDelete(todo)}}>Delete</buttun></li>})
            : 'Enter a todo item' } */}

       <Col span={24}><Table columns={columns} dataSource={todoList} size="middle" /></Col>
            </ul>
             
         </Content>
          </Layout>
        <Footer className={styles.footer}>Design & Developed by ...</Footer>
          </>
    )
}
