
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AboutItem = ({cmt}) => {

    const {name,email,body,id} = cmt
    return (
        <div className='border-2 border-red-300 p-4 flex flex-col rounded-md'>
            <div className='flex-grow'>
                <h2 className='text-lg font-semibold py-2'>{name}</h2>
            <p className='text-blue-400  underline cursor-pointer py-3'>{email}</p>
            <p>{body}</p>
            </div>
            <Link to={`/about/${id}`} className='py-2 mx-auto w-full text-center text-white font-bold my-2 rounded-md bg-red-500'><button>See Details</button></Link>
     
            
        </div>
    );
};

AboutItem.propTypes = {
    cmt:PropTypes.obj
};

export default AboutItem;