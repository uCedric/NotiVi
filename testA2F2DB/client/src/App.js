import React,{ useState , useEffect} from 'react'
//import { StyleSheet, Text, View, TextInput, Button, FlatList } from 
//'react-native';
import axios from 'axios';

function App() {

  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const serverUrl = 'http://localhost:5000';
  //const serverUrl = 'http://127.0.0.1:5000';
  const http = axios.create({
  baseURL: serverUrl,
  });

  

  useEffect(() => {
    // Just run the first time
    console.log(email)
  }, [email])

  useEffect(() => {
    // Just run the first time
    console.log(password)
  }, [password])

  

  const Create_new_account = async ()=> {
    
    await axios.post("http://localhost:5000/register", 
            { email : "test2@gmail.com" , password : "1234567"} ,
            
            {headers:{
              "Content-Type": "application/json"
            }
          })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
  
  }


  return (
    <div>
      <h1>Create an account</h1>
      <form action="{{ url_for('register_user') }}" method="POST">
        <div>
          <label>Email: </label>
          <input
            type="text"
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            id="email"
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            value={password}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            id="password"
          />
        </div>
        <button type="button" onClick={() => Create_new_account() } >送出</button>

      </form>
    </div>
  )
}

export default App 