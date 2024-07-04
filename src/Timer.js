import {React,useState,useEffect}  from 'react';

function Timer(){
    const [second,setSecond] = useState(23465);
    const [strt,setStrt] = useState(true);

    const startSt = {
        color:'black',
        background:'none',
        backgroundColor:'yellow',
        // border:'none',
        padding:'10px 25px',
    };
    const reset = ()=>{
        setSecond(0);
        setStrt(true);
    }
    const start = ()=>{
        setStrt(true);
    }
    const pause = ()=>{
        setStrt(false);
    }
    useEffect( ()=>{
        if(strt == true && second > 0){
            const intervalId = setInterval(()=>{
                setSecond(pre => pre-1);
            },1000);
            return ()=>clearInterval(intervalId);
            
        }

    },[strt,second])

    const formate = (val) =>{
        return val<10?`0${val}`:`${val}`;
    }

    const h = Math.floor(second/3600);
    const min = Math.floor((second%3600)/60);
    const newSecond = second%60;

    return (
        <>
            <h1>Reamining time - {formate(h)} : {formate(min)} : {formate(newSecond)}</h1>
            <div className='btn'>
                <button className='start' style={startSt} onClick={start}>Start</button>
                <button className='pause' style={startSt} onClick={pause}>Pause</button>
                <button className='reset' style={startSt} onClick={reset}>Reset</button>
            </div>
        </>
    );
}



export default Timer;