import React, { useState, useEffect } from 'react';
import './following.css';
import {Link} from 'react-router-dom';
// components
import Tittle from '../../components/tittle';
import Navbar from '../../components/navbar';
import UserCard from '../../components/userCard';
// react icons
import * as Fi from "react-icons/fi";

function Following({match}) {
    const [user, setUser] = useState('');
    const [login, setLogin] = useState('');
    const [avatar_url, setAvatar_url] = useState('');
    const [count, setCount] = useState(0);
    const [list, setList] = useState([]);

    var listaFollowers = [];

    useEffect(() => {
        setUser(match.params.login);
        fetch(`https://api.github.com/users/${match.params.login}/following`)
        .then(res=>res.json())
        .then(data=>{
            setData(data);
            data.forEach(element => {
                listaFollowers.push({
                    login: element.login,
                    ...element
                })
            });
            setList(listaFollowers);
        });
    }, []);

    const setData=({login, avatar_url, length}) =>{
        setLogin(login);
        setAvatar_url(avatar_url);
        setCount(length);
    }

    return (
        <div className="content">
            {/* top section */}
            <div className="topBar">
                <div className="pt-4 pb-4 ">
                    <Link className="link" to={`/home/${match.params.login}`}>
                        <p className="seta pl-0"><Fi.FiArrowLeft/></p>
                    </Link>
                    <div className=" center">
                        <p className="text-md text-center font-weight-bold">Seguindo {count}</p>
                    </div>
                </div>
            </div>
            {/* Following section */}
            {
                list.map(item => <UserCard user={item.user} nickname={item.login} source={item.avatar_url}/>)
            }
            <div className="end"></div>
            <Navbar user={match.params.login}/>
        </div>
    );
}

export default Following;