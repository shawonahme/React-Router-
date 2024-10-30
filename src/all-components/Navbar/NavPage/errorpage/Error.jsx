import { Link, useRouteError } from "react-router-dom";


const Error = () => {

    const error = useRouteError()
    console.log(error)
    return (
        <div className="flex justify-center items-center h-screen flex-col">
            <h1 className="text-2xl font-bold">page is not found</h1>
            <Link className="bg-red-400 my-3 py-2 px-3 rounded-md text-white" to='/home'><button>back to home</button></Link>
        </div>
    );
};

export default Error;