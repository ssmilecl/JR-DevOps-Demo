 import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
//import './App.css'

function App(){
  const [message, setMessage] = useState('Lodading...');

  //const backendBaseUrl = "jrdevops1-h2fabjg4dmfmaycq.australiasoutheast-01.azurewebsites.net/api";
  const helloworldEndpoint = '${backendBaseUrl}/helloworld';

  useEffect (() => {
    fetch("https://jrdevops1-h2fabjg4dmfmaycq.australiasoutheast-01.azurewebsites.net/api/helloword")
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch((err) => {
        console.error ('Error fetching:', err);
        setMessage('Failed to load message');
      });
    console.log("Fetching from:", helloworldEndpoint);
  }, []);


  return(
    <div style={{ padding:40}}>
      <h1> Fronted Talking to Backend </h1>
      <p><strong>{message}</strong></p>
    </div>
  );

}
export default App; 