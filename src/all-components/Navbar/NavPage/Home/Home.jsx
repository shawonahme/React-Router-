import { useLoaderData } from "react-router-dom";
import Homeitem from "./Homeitem";



const Home = () => {



  
     
    const posts = useLoaderData()
 
 

       
     
    
 
      
    
   

    return (
<>
        
          
        
           
        <div className="grid grid-cols-3 gap-3 m-4">
         {posts.map((post,idx)=> <Homeitem key={idx} post={post}></Homeitem>)}
        </div>
        </>
    );
};


export default Home;