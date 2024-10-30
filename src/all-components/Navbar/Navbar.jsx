
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import NavbarItem from './NavbarItem';
import { useState } from "react";
import { IoLogoXbox } from "react-icons/io";


const navbarData = [
    {
        title: "Home",
        url: "/home",
        icon: "home",
        submenu: []
    },
    {
        title: "About Us",
        url: "/about",
        icon: "info-circle",
        submenu: []
    },
    {
        title: "Services",
        url: "/services",
        icon: "cog",
        submenu: [
            {
                title: "Web Development",
                url: "/services/web-development"
            },
            {
                title: "Mobile Development",
                url: "/services/mobile-development"
            },
            {
                title: "UI/UX Design",
                url: "/services/ui-ux-design"
            }
        ]
    },
    {
        title: "Portfolio",
        url: "/portfolio",
        icon: "briefcase",
        submenu: [
            {
                title: "Web Projects",
                url: "/portfolio/web-projects"
            },
            {
                title: "Mobile Apps",
                url: "/portfolio/mobile-apps"
            }
        ]
    },
    {
        title: "Blog",
        url: "/blog",
        icon: "blog",
        submenu: []
    },
    {
        title: "Contact",
        url: "/contact",
        icon: "envelope",
        submenu: []
    }
    
];


const Navbar =()  => {

  const [menu,setMenu] = useState(true)

    return (
       
<>
<nav className=' bg-green-500 text-white flex justify-between items-center '>

<div  onClick={() =>setMenu(!menu)} className="text-3xl p-4  text-white md:invisible">
    {
        menu ? <IoMenu />:<IoMdClose />

    }

</div>

<ul className={`md:flex px-8 justify-center md:rounded-none text-center   rounded-md gap-6 duration-1000 md:static absolute bg-green-500  font-semibold font-sans ${menu? '-top-96':'top-16'}` }>


{navbarData.map((data,idx)=> <NavbarItem key={idx} data={data}></NavbarItem> )}

</ul>

<div className="m-4 text-3xl">
<IoLogoXbox />

</div>
</nav>





</>
    );
};


export default Navbar;