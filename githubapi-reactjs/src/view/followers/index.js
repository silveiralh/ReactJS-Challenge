import React, { useState, useEffect } from 'react';
import './followers.css';
import {Link} from 'react-router-dom';
// componentes
import Tittle from '../../components/tittle';
import Navbar from '../../components/navbar';
import UserCard from '../../components/userCard';
// react icons
import * as Fi from "react-icons/fi";

function Followers({match}) {
    
    const [user, setUser] = useState('');
    const [login, setLogin] = useState('');
    const [avatar_url, setAvatar_url] = useState('');
    const [count, setCount] = useState(0);
    const [list, setList] = useState([]);

    var listaFollowers = [];

    useEffect(() => {
        setUser(match.params.login);
        fetch(`https://api.github.com/users/${match.params.login}/followers`)
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
                    <div className="item-left pt-0 ">
                        <Link className="link" to={`/home/${match.params.login}`}>
                            <p className="seta pl-0"><Fi.FiArrowLeft/></p>
                        </Link>
                    </div>
                    <div className=" center">
                        <p className="text-md text-center font-weight-bold">{count} Seguidores</p>
                    </div>
                </div>
            </div>
                {/* followers section */}
                {
                    list.map(item => <UserCard user={item.login} nickname={item.login} source={item.avatar_url}/>)
                }
            <div className="end"></div>
            <Navbar user={match.params.login}/>
        </div>
    );
}

export default Followers;