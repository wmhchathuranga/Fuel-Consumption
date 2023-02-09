import React, { useState } from 'react'
import SideBar from './components/SideBar';

export default function Admin() {

    const [sidebarIsOpen, setSidebarOpen] = useState(true);
    const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);

    const ui = (

        // Heading
        <div className="container-fluid vh-100 bg-secondary">
            <div className="row bg-light align-items-center" style={{ height: "60px" }}>
                <div className="col">
                    <p className='m-0 text-start'>Logo Goes Here</p>
                </div>
                <div className="col"></div>
                <div className="col">
                    <p className='m-0 text-end'>Fuel Consumption System</p>
                </div>
            </div>


            <div className="row h-100">

                {/* Left side */}
                <div className="col-2 h-100 bg-danger">

                    {/* Profile */}
                    <div className="row h-25">

                        <div className="col bg-dark w-100 text-light h-100">
                            <div className="row h-75 py-2">
                                <div className="profile_img"></div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <p className='text-center'>Harshana Chathuranga</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Navbar */}
                    <div className="row h-75">

                        <div className="col bg-light">
                            <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
                        </div>
                    </div>

                </div>

                {/* Right Side */}
                <div className="col h-100 bg-primary">
                    test
                </div>
            </div>
        </div>
    )

    return ui;
}
