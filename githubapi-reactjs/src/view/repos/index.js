import React, { useState, useEffect} from 'react';
import './repos.css';
import {Link} from 'react-router-dom'

// components
import Tittle from '../../components/tittle';
import Navbar from '../../components/navbar';
import RepoCard from '../../components/repoCard';
// react icons
import * as Fi from "react-icons/fi";

function Repos({match}) {
    const [login, setLogin] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [stargazers_count, setStargazers_count] = useState(0);
    const [count, setCount] = useState(0);
    const [list, setList] = useState([]);
    
    var listaRepos = [];
    useEffect(() => {
        setLogin(match.params.login);
        fetch(`https://api.github.com/users/${match.params.login}/repos`)
        .then(res=>res.json())
        .then(data=>{
            setData(data);
            data.forEach(element => {
                console.log(element.name);
                listaRepos.push({
                    id: element.id,
                    ...element
                })
            });
            setList(listaRepos);
        });
    }, []);
    
    const setData=({name, description, stargazers_count, length}) =>{
        setName(name);
        setDescription(description);
        setStargazers_count(stargazers_count);
        setCount(length)
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
                        <p className="text-md text-center font-weight-bold">{count} Repositórios</p>
                    </div>
                </div>
            </div>
            {/* repos section */}
            {
                list.map(item => <RepoCard tittle={item.name} repoInfo={item.description} stars={item.stargazers_count}/>)
            }
            <div className="end"></div>
            <Navbar user={match.params.login}/>
        </div>
    );
}

export default Repos;