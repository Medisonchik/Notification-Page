import React, { useState } from 'react';
import users from '../../data';
import './Users.css'

function Users(props) {
    const [notifications, setNotifications] = useState(users);
    console.log(notifications);

    const specialUserId = [1, 2, 3];
    const userWithMessage = 4;
    const userWithImg = 5;

    return (
        <div className='notifications'>
           { 
           notifications.map((user) => {
            let cardStyle = {};
            let grid = {};

            if (specialUserId.includes(user.id)) {
                cardStyle = {
                    backgroundColor: "var(--color-very-light-grayish-blue)",
                    borderRadius: "0.5rem"
                };
            }

            if(userWithImg) {
                grid = {
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)"
                }
            }

                return (
                    <div key={user.id} className='notif-card' style={cardStyle}>
                        <img alt={user.img} src={user.img} />

                        <div className='information' >

                           <div style={userWithImg === user.id ? grid : null }>
                                <span className={userWithImg === user.id ? 'span-grid' : ''}> 
                                    <span className='user-name bold'>{user.name}</span> 
                                    <span className='grey'>{user.userDid}</span>
                                    {user.group && <span className='group'>{user.group}</span>}
                                    {user.post && <span className='post'>{user.post}</span>}
                                </span>

                                {specialUserId.includes(user.id) && 
                                    <span>
                                        <span className='circle'></span>
                                    </span>
                                }                           
                                <div className='user-picture'>
                                    {user.id === userWithImg && <img className='picture' alt='picture' src={user.picture} />}
                                </div>
                            </div>


                            <span className='user-time'>{user.time}</span>

                            {user.id === userWithMessage && 
                                <div className='message-container'>
                                    <p>{user.privateMessage}</p>                               
                                </div>
                            }
                        </div>                        
                    </div>
                )
           })
           }
        </div>
    );
}

export default Users;