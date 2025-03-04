import React,{ useState} from 'react'
import "./Form2.css"
function Form2() {
    // const [userName, setUserName] = useState("");
    // const [userEmail, setUserEmail] = useState("");
    // const [userContact, setUserContact] = useState();
    // const [userPassword, setUserPassword] = useState();

    const [data, setData] = useState({
        userName: "",
        userEmail: "",
        userContact: "",
        userPassword: "",

    });
    const submitHandler = (e)=>{
        e.preventDefault();

    };

    const changeHendler  = (e)=>{
        setData((prev)=>({
            ...prev,
            [e.target.name]: e.target.value,
        }));     

    };

    return (
        <div className='container'>
            <form className='frm'>
                <label htmlFor='user-name'>Name:</label>
                <input
                type='text'
                placeholder='Enter your Name'
                id='user-name'                
                value={data.userName}
                name='userName'
                onChange={changeHendler}
                />
                 <label htmlFor='user-email'>Email:</label>
                <input
                type='email'
                placeholder='Enter your Email'
                id='user-email'
                value={data.userEmail}
                name='userEmail'
                onChange={changeHendler}
                />
                 <label htmlFor='user-contact'>Contact:</label>
                <input
                type='number'
                placeholder='Enter your Contact'
                id='user-contact'
                value={data.userContact}
                name='userContact'
                onChange={changeHendler}
                />
                 <label htmlFor='user-password'>Password:</label>
                <input
                type='password'
                placeholder='Enter your Password'
                id='user-password'
                value={data.userPassword}
                name='userPassword'
                onChange={changeHendler}
                />
            </form>
        </div>
    )
}

export default Form2