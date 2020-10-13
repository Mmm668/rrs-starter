import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Switch, Route, Redirect} from "react-router-dom";
import {useSelector} from "react-redux";
import Page404 from "./pages/Error/Page404";
import {appCreators} from "./redux/actionCreators";
import ToastMessage from "./components/ToastMessage/ToastMessage";
import Home from "./pages/Home/Home";

const App = (props) => {

    const {
        toastMessage
    } = useSelector(state => state.app);

    useEffect(() => {
        appCreators.setToastMessage('토스트 메세지입니다.(4초)');
    }, [])

    return (
        <Wrapper>

            {
                toastMessage && <ToastMessage message={toastMessage}/>
            }

            <Switch>
                <Route exact path={'/'} component={Home}/>

                <Route path={'/error/404'} component={Page404}/>

                <Redirect to={'/error/404'}/>
            </Switch>
        </Wrapper>
    )
};

const Wrapper = styled.div`
`;

export default App;