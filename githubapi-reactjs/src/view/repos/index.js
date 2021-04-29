import React, { useState } from 'react';
import './repos.css';

// componentes
import Tittle from '../../components/tittle';
import Navbar from '../../components/navbar';
import RepoCard from '../../components/repoCard';


function Repos() {
    return (
        <div className="content">
        {/* top section */}
            <div className="topBar">
                <div className="pt-4 pb-4 ">
                    <p className="text-md text-center font-weight-bold">10 repositórios</p>
                </div>
            </div>
        {/* repos section */}
            
                <RepoCard tittle={"react-native-app"} repoInfo={"Este é um repositorio criado para a aplicação reactnative blabla"}/>
                <RepoCard tittle={"react-native-app"} repoInfo={"Este é um repositorio criado para a aplicação reactnative blabla"}/>
                <RepoCard tittle={"react-native-app"} repoInfo={"Este é um repositorio criado para a aplicação reactnative blabla"}/>
                <RepoCard tittle={"react-native-app"} repoInfo={"Este é um repositorio criado para a aplicação reactnative blabla"}/>
                <RepoCard tittle={"react-native-app"} repoInfo={"Este é um repositorio criado para a aplicação reactnative blabla"}/>
                <RepoCard tittle={"react-native-app"} repoInfo={"Este é um repositorio criado para a aplicação reactnative blabla"}/>
                <RepoCard tittle={"react-native-app"} repoInfo={"Este é um repositorio criado para a aplicação reactnative blabla"}/>
           
        {/* bio section */}
            <p className="mb-4 pb-5"/>
            <Navbar/>
        </div>
    );
}

export default Repos;