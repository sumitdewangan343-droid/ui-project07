import react from 'react';
const LeftContent = () => {
  return (
    <div className='w-1/3 h-screen p-4 flex flex-col justify-between'>  
    <div>
  <h3 className=' font-bold text-4xl  p-1'>
     Prospective <br/> Customer <br />
     Segementation
  </h3>
  <p className='font-medium text-gray-600 m-1.5'>
    Depending upon the customer satisfactioin and acess to banking products,and potential target audience can be divided .
  </p>
    </div> 
     <div>
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-up-right preview-icon"><path d="M13 5H19V11"/><path d="M19 5L5 19"/></svg>
     </div>
    </div>
  );
}
export default LeftContent;