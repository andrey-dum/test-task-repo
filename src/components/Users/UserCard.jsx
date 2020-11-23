import React from 'react';

import coverphoto from '../../assets/img/photo-cover.png'

const UserCard = ({user}) => {
    return (
        <div className="user__card">
            <img className="user__avatar" src={user.photo || coverphoto} alt={user.name} />
            <h2>{user.name}</h2>
            <div className="position">{user.position}</div>
            <div className="user__email">
                <div className="email">
                    {user.email}
                </div>
                <div className="tooltip__wrap">
                    <div className="utooltip">
                        {user.email}
                    </div>
                </div>
            </div>
        <div className="user__number">{user.phone}</div>
    </div>
    );
}

export default UserCard;
