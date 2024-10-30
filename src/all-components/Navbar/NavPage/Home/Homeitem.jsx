

import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';





const Homeitem = ({post}) => {

    const {id,title,body} = post

    const navigate = useNavigate()
    
    const myfuncOnId = ()=>{
        navigate(`/home/${id}`)
    }


    
    return (
        <div className='border-2 p-2 flex flex-col  rounded-md'>
           <div className='flex-grow'> <h2 className='text-lg font-semibold  '>{id}: {title}</h2>
           <p className='py-2'>{body}</p></div>
          <Link className='bg-green-400 py-2 px-3 my-3 text-white text-center' to={`/home/${id}`} ><button>see the details</button>

          </Link>    

          <button className='py-2 px-3 bg-red-500 my-3 rounded-md text-white' onClick={myfuncOnId}>click button</button>        
        </div>
    );
};

Homeitem.propTypes = {
    post:PropTypes.obj
};

export default Homeitem;