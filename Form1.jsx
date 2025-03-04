import React, { useState } from 'react'

const Form1 = () => {
    const [FormData, setFormData] = useState("");
    function submitHandler(e) {
        e.preventDefault();
    }

    function changeHendler(e) {
        setFormData(e.target.value);
        // console.log(e.target.value);
    }
    return (
        <form onSubmit={submitHandler}>
            <input
                type='text'
                placeholder='Enter any value'
                value={FormData}
                onChange={changeHendler}
            />
            <button type='submit'>Submit</button>

        </form>
    )
}

export default Form1