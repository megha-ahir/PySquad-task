import React, { useState } from 'react';
import "./header.css"
import { Link } from 'react-router-dom';
import { Notifications } from '../../../svg'
import { Switch } from 'antd';

const Header = () => {

    const [Notificationcount, setNotificationcount] = useState(0);

    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
        setNotificationcount()
    };

    return (
        <>

            <header>
                <div className="header-right">
                    <ul className="header-listing">
                        <li style={{ display: "flex", alignItems: "center" }}>
                            <Link to="/notifications" className="bell-icon">
                                <Notifications />
                                <span className="msg-count"
                                    hidden={Notificationcount <= 0}>{Notificationcount}</span>
                            </Link>
                        </li>
                        <li>
                            <img
                                src="images/Icon.png"
                                alt="dme-logo-black"
                            />
                        </li>
                        <li>
                            <Switch
                                style={{ backgroundColor: '#1A3A4F' }}
                                defaultChecked onChange={onChange}
                            />
                        </li>
                        <li>
                            <div className="user">
                                <i>
                                    <img
                                        src="images/profile.png"
                                        alt=""
                                    />
                                </i>
                            </div>
                        </li>
                    </ul>
                </div>
            </header >
        </>
    );
}

export default Header;