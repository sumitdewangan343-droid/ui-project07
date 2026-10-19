import react from 'react';
import LeftContent from './leftContent.jsx';
import RightContent from './rightContent.jsx';

const Page1Content = (props) => {
  return (
  <div className='py-10 flex gap-10 items-center h-[90vh] w-full '>
  <LeftContent/>
  <RightContent users={props.users}/>
    </div>
    );
}
export default Page1Content;