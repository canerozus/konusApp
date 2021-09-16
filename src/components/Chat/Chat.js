import React, { useEffect,  } from 'react'
import { useHistory, Redirect } from 'react-router-dom'
import {  ChatEngine } from 'react-chat-engine'
import { auth } from '../../firebase'
import {  useDispatch, useSelector } from 'react-redux';
import { setUser } from '../store/AuthSlicer';
import axios from 'axios';



function Chats() {
    const history = useHistory();
    const dispatch = useDispatch();
    const mainUser = useSelector(state => state.Authenticate.user);
    const mail = useSelector(state => state.Authenticate.email);
    const uuid = useSelector(state => state.Authenticate.uid);
    const photo = useSelector(state => state.Authenticate.PhotoURL);
    
    const getFile = async (url) => {
        const response = await fetch(url);
        const data = await response.blob();
        
        return new File([data], "userPhoto.jpg", {type: 'image/jpeg'})
    }
    useEffect( () => {
         auth.onAuthStateChanged((user) => {
            dispatch(setUser(user));
        })
        axios.get('https://api.chatengine.io/users/me',{
            headers: {
                "project-id": process.env.REACT_APP_CHAT_ENGINE_ID,
                 "user-name":mail,
                 "user-secret":uuid,
            }
        }).catch(() => {
            let formData = new FormData();
            formData.append('email',mail);
            formData.append('username', mail);
            formData.append('secret', uuid);
            getFile(photo).then((avatar) =>{
                formData.append('avatar', avatar, avatar.name);
                axios.post('https://api.chatengine.io/users/',
                        formData,
                        {headers: process.env.REACT_APP_CHAT_ENGINE_KEY}
                )
            })

        })
    }, [mainUser])

    const handleLogout = async () => {
        await auth.signOut();
        history.push('/');
    };

    return (
         <div className="chats-page">
            <div className="nav-bar">
                <div className="logo-tab">
                    KonusApp
                </div>
                <div onClick={handleLogout} className="logout-tab">
                    Logout
                </div>
            </div>
            {!mainUser ? <Redirect to='/'/> : ((!mainUser.email && !mainUser.uid ) ? <div></div> : <ChatEngine
                height="calc(100vh - 66px"
                projectID= {process.env.REACT_APP_CHAT_ENGINE_ID}
                userName={mainUser.email}
                userSecret={mainUser.uid}
            />)}
        </div>

    )
}

export default Chats
