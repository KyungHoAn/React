// import { render } from '@testing-library/react';
import React, { useState } from 'react';

const EventPractice = () =>{
    const [form, setForm] = useState({
        username: '',
        message: ''
    });
    const { username, message} = form;
    const onChange = e =>{
        const nextForm = {
            ...form,    //기존의 form내용을 해당 자리에 복사
            [e.target.name]: e.target.value //원하는 값을 덮어 씌우기
        };
        setForm(nextForm);
    };

    const onClick = () => {
        alert(username +':'+message);
        setForm({
            username: '',
            message: ''
        });
    };
    const onKeyPress = e => {
        if(e.key ==='Enter'){
            onClick();
        }
    };
    return (
        <div>
        <h1>practice event</h1>
        <input
            type="text"
            name="userName"
            placeholder="userName"
            value={username}
            onChange={onChange}
            />

        <input
            type="text"
            name="message"
            placeholder="nothing input"
            value={message}
            onChange={onChange}
            onKeyPress = {onKeyPress}
            />
            <button onClick={this.handleClick}>check</button>
        </div>
    );
};

export default EventPractice;