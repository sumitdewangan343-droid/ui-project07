import react from 'react';
import Sec1 from './part/sec1/sec1.jsx'; 
import Sec2 from './part/sec2/Sec2.jsx'; 
import Navbar from './part/sec1/navbar.jsx';
import Page1Content from './part/sec1/page1Content.jsx';
const  users=[
  {Image:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ,intro:''
  ,tag:'Satisfied'
  },
   {Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ47I9W5ZKUa_g0dbg4__w_WuKEmEymHf7uKXIeKbBgNiTMOX2ELoEyaUg&s=10"
 ,intro:''
 ,tag:'Unsatisfied'
  },
  {Image:"https://img.magnific.com/free-photo/medium-shot-smiley-man-looking-tablet_23-2148230835.jpg?t=st=1790939271~exp=1790942871~hmac=70a1ab340207e392dc9c6c3b0d95847b1230c8a50c8050dc5e5609265f6324ad&w=1480"
 ,intro:''
 ,tag:'Unsatisfied'
  },
   {Image:"https://img.magnific.com/free-photo/happy-male-entrepreneur-reading-email-laptop-while-working-office_637285-6756.jpg?semt=ais_hybrid&w=740&q=80"
 ,intro:''
 ,tag:'Satisfied'
 },
]


const App = () => {
  return (
    <>
    <Sec1 users={users}/>
    </>
  );
};
 
export default App;