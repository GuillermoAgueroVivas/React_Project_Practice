import React from 'react'
// This import is what allows us to switch within different pages on our application.
import { Link, NavLink } from 'react-router-dom';
// The following is importing a few icons needed for this component.
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
// The following imports all the required links
import { links } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';


const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize } = useStateContext();

  const handleCloseSideBar = () => {
    if(activeMenu && screenSize <= 900) {
      setActiveMenu(false)
    }
  }

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2 bg-blue-700';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';
  
  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>

      {activeMenu && (<>
        <div className='flex justify-between items-center'>
          {/* For now the onClick will be an empty call back function. The 'Link' below is how we can create an icon in our navigation sidebar. It is manipulated to look a certain way using the classnames and then using the SiShopware keyword coming from 'react-icons/si' as a self closing tag, a nice icon is created beside the word inside the 'span' tag. */}
          <Link to='/' onClick={handleCloseSideBar} 
          className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900">
            <SiShopware /> <span>Shoppy</span>
          </Link>
          {/* This tooltip component is what generated the 'x' closing button on the sidebar. */}
          <TooltipComponent content="Menu" position='BottomCenter'>
            <button type='button'
              // This section here allows for the 'X' button to close the sidebar when clicked.
              onClick={ () => setActiveMenu((prevAciveMenu) => !prevAciveMenu) } 
              className='text-xl rounded-full p-3 hover:bg-light-gray mt-4 block'> 
              {/*'md:hidden' is supposed to be added in the class above but if I do then the icon disappears completely*/}
              <MdOutlineCancel />
            </button>
          </TooltipComponent>
        </div>
        {/* These are the actual items. This is looping through the 'links' imported at the top. Each one is an array containing different info and we are choosing to display the 'title' of each one of the items in the array. */}
        <div className='mt-10 '>
          {links.map((item) => (
            // Using the key element here makes this div unique.
            <div key={item.title}>
              <p className='text-gray-400 m-3 mt-4 uppercase'>
                {item.title}
              </p>
              {/* Here we are looping over the links */}
              {item.links.map((link) => (
                <NavLink
                  to={`/${link.name}`}
                  key={link.name}
                  onClick={handleCloseSideBar}
                  // This className is different than the others as it accepts a state, in this case 'isActive' is the state it is taking in. Using the following if statement and the const variables created towards the top of our code we are telling it that if it is active then it should have certain class properties, otherwise it will have a different set of properties. The ':' is how you say else in Javascript.
                  className={ ({ isActive }) => 
                  isActive ? activeLink : normalLink}
                >
                  {link.icon}
                  <span className='capitalize'>
                    {link.name}
                  </span>    

                </NavLink>
              ))}
            </div>
          )) }

        </div>
      </>)} 
      
    </div>
  )
}

export default Sidebar