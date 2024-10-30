import { useLoaderData ,Link} from "react-router-dom";


const HomeDetails = () => {
    const postDetails = useLoaderData();
    const {id,title,body} = postDetails

    return (
        <div className="flex flex-col justify-center items-center rounded-md  border-green-500 p-8 border-2 h-full my-[10%] w-[50%] mx-auto">
           <h1 className="text-lg font-semibold">{name} : {id}</h1>
         <p className="text-blue-500 py-4">{title}</p>
         <p className="font-semibold ">{body}</p>
         <Link className="my-4 bg-green-500 w-full rounded-lg py-3 text-center text-white font-semibold " to='/home'> <button>close</button></Link>
        </div>
    );
};

export default HomeDetails;
