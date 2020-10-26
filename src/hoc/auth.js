import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';

export default (Component, option, adminRoute = null) => {
    /*
       예)  option: null -> 누구나 출입이 가능한 페이지 (home)
                   true -> 로그인한 유저만 출입이 가능한 페이지
                   false -> 로그인한 유저는 출입이 불가능한 페이지
    */
    const AuthenticateCheck = (props) => {
        const isLoggedIn = useSelector(state => state.user.isLoggedIn);

        useEffect(() => {
            if (!isLoggedIn && option) { // 로그인 안됐고, 로그인 유저만 출입 가능한 페이지면
                props.history.push('/login'); // 로그인으로
            }
        }, []);

        return (
            <Component/>
        )

    };

    return AuthenticateCheck;
};