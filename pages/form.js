import styles from '../styles/Home.module.css'
import 'antd/dist/antd.css'
const { Header, Footer, Sider, Content } = Layout;
import { Layout,Image, Row, Col,Typography,Avatar,Table,Button,Popconfirm,Menu} from "antd";
import { MailOutlined, AppstoreOutlined, SettingOutlined,UserOutlined,MoreOutlined,EditOutlined,DeleteOutlined} from '@ant-design/icons';
import Hero from '../components/Hero'
const { Title } = Typography;
import {useState,useEffect} from 'react'
import Addfrom from '../components/Addfrom'
const { SubMenu } = Menu;



export default function Form() {
    // const [userInput,setUserInput] = useState('')
    const [userInput,setUserInput] = useState({
      _id: null,
      description : ''
  })
    const [data,setTodoList]=useState([])
    const handleChange = (e)=>{
        e.preventDefault()
        setUserInput({
          ...userInput,[e.target.name]:e.target.value
           })
    }

    const columns = [
      {
        title: 'Task',
        dataIndex: 'description',
        key:'description'
      },
      {
        title: 'Action',
        dataIndex: 'Action',
        render: (_, record) =>
              <Menu  style={{ width:120 }} mode="horizontal"  >
              <SubMenu key="sub1" icon={<MoreOutlined style={{ fontSize: '20px', color: 'blue' }} />} title="">
                <Menu.ItemGroup>
                  <Menu.Item key="1">
              <a onClick={()=>fnEdit(record)}> <EditOutlined style={{ fontSize: '20px', color: 'green' }} /></a>
          </Menu.Item>
            <Menu.Item key="2">
            <Popconfirm title="Sure to delete?"> <a onClick={()=>fnDelete(record)}><DeleteOutlined style={{ fontSize: '20px', color: 'red' }}/></a></Popconfirm>
           </Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
            </Menu>
      },
    ];
   
    useEffect(
      ()=>{
       GetAlltask()
    },[]
    )
    const handleSubmit =(e)=>{
      console.log("This is input",userInput)
      if(userInput._id == null){
        onCreateEmployee()
        
       
      }else{
        onUpdateEmplyee()
      
      }
     
      setUserInput('')
     
    }

     const GetAlltask =()=>{
      fetch('https://api-nodejs-todolist.herokuapp.com/task?_limit=5',{
        method:'GET',
        headers:{'Content-Type': 'application/json', Authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDlkMzE3NWZhMzk2MDAwMTcwYjhmOWEiLCJpYXQiOjE2MjA5MTQ1NDl9.oKW-DbVaDWPbSpsiJ9Oec0l76LA0GyqArHl36Bn4cac"},
    }).then(response => response.json())
    .then(Alltask => {
      console.log('Success:', Alltask.data);
     setTodoList(Alltask.data);
    })
     }
     
  const  onCreateEmployee=()=>{
      let empInfo={
        description: userInput.description,
      };
      fetch('https://api-nodejs-todolist.herokuapp.com/task',{
          method:'POST',
          headers:{'Content-Type': 'application/json',
          Authorization:
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDlkMzE3NWZhMzk2MDAwMTcwYjhmOWEiLCJpYXQiOjE2MjA5MTQ1NDl9.oKW-DbVaDWPbSpsiJ9Oec0l76LA0GyqArHl36Bn4cac"},
          body:JSON.stringify(empInfo)
      }).then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        alert('Your record created successfully')
        GetAlltask()
        //setTodoList(data);
      })
  }
  const  onUpdateEmplyee=()=>{
    console.log('Inside Update Employee' ,userInput)
    let empInfo={
      description: userInput.description,
    };
    fetch('https://api-nodejs-todolist.herokuapp.com/task/' + userInput._id,{
        method:'PUT',
        headers:{'Content-Type': 'application/json',
        Authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDlkMzE3NWZhMzk2MDAwMTcwYjhmOWEiLCJpYXQiOjE2MjA5MTQ1NDl9.oKW-DbVaDWPbSpsiJ9Oec0l76LA0GyqArHl36Bn4cac"},
        body:JSON.stringify(empInfo)
    }).then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      alert('Your record Updated successfully')
      GetAlltask()
      //setTodoList(data);
    })
}

  const fnEdit=(record)=>{
    console.log('Edit',record);
         fetch('https://api-nodejs-todolist.herokuapp.com/task/' + record._id, {
           method: 'PUT',
           headers:{'Content-Type': 'application/json',
           Authorization:
                 "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDlkMzE3NWZhMzk2MDAwMTcwYjhmOWEiLCJpYXQiOjE2MjA5MTQ1NDl9.oKW-DbVaDWPbSpsiJ9Oec0l76LA0GyqArHl36Bn4cac"},
           
         })
         .then(res => res.json()) // or res.json()
     
         .then(res => {
           console.log('this is edit response',res);
          setUserInput(record)
         })
        
       
 }

 const fnDelete=(record)=>{
   console.log('ID',record);
        fetch('https://api-nodejs-todolist.herokuapp.com/task/' + record._id, {
          method: 'DELETE',
          headers:{'Content-Type': 'application/json',
          Authorization:
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDlkMzE3NWZhMzk2MDAwMTcwYjhmOWEiLCJpYXQiOjE2MjA5MTQ1NDl9.oKW-DbVaDWPbSpsiJ9Oec0l76LA0GyqArHl36Bn4cac"},
          
        })
        .then(res => res.json()) // or res.json()
    
        .then(res => {
          GetAlltask()
        })
       
      
}

    const handleDelete=(todo)=>{
      const updatedArray = data.filter(
        todoItem=>data.indexOf(todoItem)!=data.indexOf(todo)
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
          <Row className={styles.row}>
         <Col span={12}>
         
                <input type="text"  placeholder={'Enter a Task'} onChange={(event)=>handleChange(event)} value={userInput.description} name="description"></input>
               </Col>
               <Col span={8}>
         <Button
         onClick={handleSubmit}
          type="primary"
          style={{
            marginBottom: 16,
          }}
        >
        Add
        </Button>
        
            </Col>
          </Row>
          <Row className={styles.row}>
           
               <Col span={24}>  
<Table
         
         className="ant-table-content"
          dataSource={data}
          columns={columns}
        />
            </Col>
           </Row>
           
          
            </form>
            <Row className={styles.row}>
       
           </Row>
           {/* <Addfrom/> */}
         </Content>
          </Layout>
        <Footer className={styles.footer}>Design & Developed by CBnits.com</Footer>
          </>
    )
}

