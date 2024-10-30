import { Link, useLoaderData } from "react-router-dom";


const AboutDetail = () => {
    const commentsDetails = useLoaderData();
   const {name,id ,email,body} = commentsDetails
    return (
        <div className="flex flex-col justify-center items-center rounded-md  border-green-500 p-8 border-2 h-full my-[10%] w-[50%] mx-auto">
         <h1 className="text-lg font-semibold">{name} : {id}</h1>
         <p className="text-blue-500 py-4">{email}</p>
         <p className="font-semibold ">{body}</p>
         <Link className="my-4 bg-green-500 w-full rounded-lg py-3 text-center text-white font-semibold " to='/about'> <button>close</button></Link>
        </div>
    );
};

export default AboutDetail;