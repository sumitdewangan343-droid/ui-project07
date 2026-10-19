import react from 'react';
import Navbar from './navbar';
import Page1Content from './page1Content';
const Sec1 = (props) => {
 
  return (
    
   <>
    <Navbar/>
    <Page1Content users={props.users}/>
   </>
  );
}               
export default Sec1;                