import React, { useState } from 'react';
import './repos.css';

// components
import Tittle from '../../components/tittle';
import Navbar from '../../components/navbar';
import RepoCard from '../../components/repoCard';
// react icons
import * as Fi from "react-icons/fi";

function Repos() {
    return (
        <div className="content">
        {/* top section */}
            <div className="topBar">
                <div className="pt-4 pb-4 ">
                    <div className="item-left pt-0 ">
                            <p className="seta pl-0"><Fi.FiArrowLeft/></p>
                    </div>
                    <div className=" center">
                        <p className="text-md text-center font-weight-bold">10 Repositórios</p>
                    </div>
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