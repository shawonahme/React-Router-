import { useLoaderData } from "react-router-dom";
import AboutItem from "./AboutItem";



const About = () => {
    const comment = useLoaderData()
 


    return (

        <>
       <div>

       
       </div>

        <div className="grid grid-cols-4 gap-4"> 
      {comment.map((cmt,idx)=> <AboutItem key={idx} cmt={cmt}></AboutItem> )}
        </div>
        </>
    );
};

export default About;