import React, {useState} from 'react';

const Say = () =>{
    const [message, setMessage] = useState('');
    const onClickEnter = () => setMessage('HI~');
    const onClickLeave = () => setMessage('bye!!!!!');

    const [color, setColor] = useState('black');

    return(
        <div>
            <button onClick = {onClickEnter}>입장</button>
            <button onClick = {onClickLeave}>퇴장</button>
            <h1 style={{color}}>{message}</h1>
            <button style={{color: 'red'}} onClick={() => setColor('red')}>
                Red
            </button>
            <button style={{color:'green'}} onClick={() => setColor('green')}>
                green
            </button>
            <button style={{color:'blue'}} onClick={() => setColor('blue')}>
                blue
            </button>
        </div>
    );
};

export default Say;