import React, { useState, useEffect } from 'react';
import './home.css';
import {Link} from 'react-router-dom';

// componentes
import Tittle from '../../components/tittle';
import Navbar from '../../components/navbar';
import ProfileInfo from '../../components/profileInfo';
import ProfilePicture from '../../components/profilePicture';
// react icons
import * as Fi from "react-icons/fi";

function Home({match}) {
    const [user, setUser] = useState([]);
    const [login, setLogin] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [location, setLocation] = useState('');
    const [bio, setBio] = useState('');
    const [avatar_url, setAvatar_url] = useState('');
    const [public_repos, setPublic_repos] = useState('');
    const [followers, setFollowers] = useState('');
    const [following, setFollowing] = useState('');
    
    useEffect(() => {
        fetch(`https://api.github.com/users/${match.params.login}`)
        .then(res=>res.json())
        .then(data=>{
            setData(data);
        });
        
    }, []);

    const setData=({login, name, email, location, bio, avatar_url, followers, following, public_repos}) =>{
        setLogin(login);
        setName(name);
        setEmail(email);
        setLocation(location);
        setBio(bio);
        setAvatar_url(avatar_url);
        setFollowers(followers);
        setFollowing(following); 
        setPublic_repos(public_repos);
    }

    return (
        <div className="content">
            {/* top section */}
            <div className="topBar container-sm ">
                <div className="row pt-4 pb-3 mb-5">
                    <div className="col">
                        <p className="text-md-left font-weight-bold">#{login}</p>
                    </div>
                    <div className="col">
                       <p className="text-md text-right pr-4"> <Link to="/" className="link" >sair  <Fi.FiLogOut className="logout"/></Link></p>
                    </div>
                </div>
            </div>
            {/* info profile section */}
            <div className="info pb-5">
                <div className="container">
                    <div className="profilePicture">
                        <ProfilePicture  source={avatar_url} />
                    </div>
                </div>
                <h2 className="tittle mt-4 pt-5"><Tittle texto={name}/></h2>
                <ProfileInfo email={email} city={location}/>
            </div>
            {/* followers/following section */}
            <div className="followSection">
                <div className="container-sm ">
                    <div className="row align-items-center">
                        <div className="col text-center">
                            <h1>{followers}</h1>
                            <h6>Seguidores</h6>
                        </div>
                        <div className="col text-center">
                            <h1>{following}</h1>
                            <h6>Seguindo</h6>
                        </div>
                        <div className="col text-center">
                            <h1>{public_repos}</h1>
                            <h6>Repos</h6>
                        </div>
                    </div>
                </div>
            </div>
            {/* bio section */}
            <div className="info pb-5 mb-5">
                <h2><Tittle texto={"BIO"}/></h2>
                <ProfileInfo bio={bio}/>
            </div> 
            <Navbar user={match.params.login}/>
        </div>
    );
}

export default Home;