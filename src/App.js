import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Switch, Route, Redirect} from "react-router-dom";
import {useSelector} from "react-redux";
import Auth from './hoc/auth';
import Page404 from "./pages/Error/Page404";
import {appCreators} from "./redux/actionCreators";
import ToastMessage from "./components/ToastMessage/ToastMessage";
import Home from "./pages/Home/Home";
import Test2 from "./pages/Test2/Test2";
import Test3 from "./pages/Test3/Test3";
import Login from "./pages/Login/Login";

const App = (props) => {

    const {toastMessage} = useSelector(state => state.app);
    const {isLoggedIn} = useSelector(state => state.user);

    useEffect(() => {
        appCreators.setToastMessage('토스트 메세지입니다.(4초)');
    }, [])

    return (
        <Wrapper>

            {
                toastMessage && <ToastMessage message={toastMessage}/>
            }

            {/*{isLoggedIn && <Menu />}*/}
            {/* author test */}
            {/*
                예)  option: null -> 누구나 출입이 가능한 페이지 (home)
                true -> 로그인한 유저만 출입이 가능한 페이지
                false -> 로그인한 유저는 출입이 불가능한 페이지
            */}

            <Switch>
                {/*<Route exact path='/' component={Auth(MainPage, null)} />*/}
                <Route exact path={'/login'} component={Auth(Login, null)}/>
                <Route exact path={'/home'} component={Auth(Home, null)}/>
                <Route exact path={'/test2'} component={Auth(Test2, true)}/>
                <Route exact path={'/test3'} component={Auth(Test3, false)}/>

                <Route path={'/error/404'} component={Page404}/>
                <Redirect to={'/error/404'}/>
            </Switch>
        </Wrapper>
    )
};

const Wrapper = styled.div`
`;

export default App;