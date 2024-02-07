import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

// Importing everything we need from our components folder
import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
// Importing everything we need from our components pages
import { Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor, Line } 
from './pages';

import { useStateContext } from './contexts/ContextProvider';

import './App.css';

const App = () => {
    const { activeMenu } = useStateContext();

    return (
        <div>
            <BrowserRouter>
                <div className="flex relative dark:bg-main-dark-bg">
                    <div className="fixed right-4 
                    bottom-4" style={{ zIndex: '1000'}}>
                        <TooltipComponent content="Settings" position="Top">
                            <button type='button'
                            className='text-3xl p-3 
                            hover:drop-shadow-x1 
                            hover:bg-light-gray 
                            text-white'
                            style={{ background: 'blue', borderRadius: '50%'}}>
                                <FiSettings />
                            </button>

                        </TooltipComponent>
                    </div>
                    {activeMenu ? (
                        <div className='w-72 fixed sidebar
                        dark:bg-secondary-dark-bg
                        bg-white'>
                            {/* Able to create this self-closing component because it had been created in the components folder and imported at the top here. */}
                            <Sidebar />
                        </div>
                    ) : (
                        <div className='w-0 dark:bg-secondary-dark-bg'>
                            <Sidebar />
                        </div>
                    )}
                    <div className={
                        /* This below is called a template string and it can be used when there is a repetitive chunk of code. In this case both portions of this dynamic block of code (this is dynamic because of the {}) use all the class names below other then the ones specified afterwards. Use the $() as a place holder for the changing values within the template string according to the specified condition.*/

                        `dark:bg-main-bg bg-main-bg min-h-screen w-full 
                        ${activeMenu ? 'md:ml-72' : 'flex-2'}`
                        
                    }>
                        <div className='flex md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
                            <Navbar />
                        </div>
                    

                    {/*Eveyrthing below will contain all the routes necessary for the website to connect back to the pages created above. Notice how all the 'route' elements do not use the word again at the end.*/}

                        <div>
                            <Routes>
                                {/* This is the routes for the main page as well as the route for when you click on the Ecommerce section within the website. The Dashboard! Since we need to add the components to each one of these elements, the fastest way to do this is to use 'ALt + Left-Click' at the beginning of the element name for each one, this way we can make the same adjustments to all of them at the same time after all clicking on the necessary spot. In this case we added {< ... />} around each element name to get them to call our created components */}

                                {/* Used to say 'ECommerce' for the compoment name*/}
                                <Route path='/' element={<Ecommerce />} />
                                <Route path='/ecommerce' element={<Ecommerce />} />
                                
                                {/* Pages */}
                                <Route path='/orders' element={<Orders/>} />
                                <Route path='/employees' element={<Employees/>} />
                                <Route path='/customers' element={<Customers/>} />

                                {/* Apps */}
                                <Route path='/kanban' element={<Kanban/>} />
                                <Route path='/editor' element={<Editor/>} />
                                <Route path='/calendar' element={<Calendar/>} />
                                <Route path='/color-picker' element={<ColorPicker/>} />

                                {/* Charts */}
                                <Route path='/line' element={<Line />} />
                                <Route path='/area' element={<Area/>} />
                                <Route path='/bar' element={<Bar/>} />
                                <Route path='/pie' element={<Pie/>} />
                                <Route path='/financial' element={<Financial/>} />
                                <Route path='/color-mapping' element={<ColorMapping/>} />
                                <Route path='/pyramid' element={<Pyramid />} />
                                <Route path='/stacked' element={<Stacked/>} />
                            </Routes>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App