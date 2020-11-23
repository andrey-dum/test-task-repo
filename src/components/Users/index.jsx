import React, { useEffect, useState } from 'react';


import './index.scss'

import { Spinner } from 'react-bootstrap';
import UserCard from './UserCard';

import {  getUsers, getPositions, unsetUsers } from '../../store/actions';
import { useActions, useSelector } from '../../hooks/store';


const actionsToBind = {
    getUsers,
    getPositions,
    unsetUsers
}

const Users = () => {

    const [page, setPage] = useState(2);
    
    const actions = useActions(actionsToBind);

    const users = useSelector(state => state.users.list)
    const totalPages = useSelector(state => state.users.pages)
    const loading = useSelector(state => state.app.loading)


    let pages = [];
  
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }

  useEffect(() => {
    actions.getUsers(1)
    actions.getPositions()
    return () => actions.unsetUsers()
  }, [actions]);

//   const changePage = (pageN) => {
//     if (pageN <= totalPages) {
//         setPage(pageN + 1)
//     }
//     // actions.getUsers(pageN)
//   }

    const changePage = () => {
        if (page <= totalPages) {
            setPage(page + 1)
            actions.getUsers(page)
        }
    }



    const sortedUsers = users && [...users].sort(
        (a, b) => b.registration_timestamp - a.registration_timestamp
    );
 

    return (
        <div id="users" className="users section">
            <div className="container">
                <h1 className="section__title text-center">Our cheerful users</h1>
                <p className="text-center">Attention! Sorting users by registration date</p>

                <div className="users__wrapper d-flex">
                    { sortedUsers && sortedUsers.map(user => (
                            <UserCard key={user.id} user={user} />
                    ))}
                    {loading && <div className="text-center"><Spinner animation="grow" variant="danger" /></div>}


                </div>
                { page <= totalPages &&
                <div className="text-center">
                    <button onClick={changePage} className="btn btn-primary">Show more</button>
                </div> 
                 }
            </div>
        </div>
    );
}

export default Users;
