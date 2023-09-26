import React, {useState} from 'react';

const StartPage = ({setIsAuth}) => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const onLogin = (email, password) => {

        setIsAuth(true)
    }

    return (
        <div className='d-flex justify-content-center mt-lg-5'>
            <form className="align-middle w-25 p-5">
                <div className="form-outline mb-2">
                    <input type="email" id="form2Example1" className="form-control"/>
                    <label className="form-label" htmlFor="form2Example1">Email address</label>
                </div>

                <div className="form-outline mb-4">
                    <input type="password" id="form2Example2" className="form-control"/>
                    <label className="form-label" htmlFor="form2Example2">Password</label>
                </div>

                <div className="row mb-4">
                    <div className="col d-flex justify-content-center">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked/>
                            <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
                        </div>
                    </div>

                    <div className="col">
                        <a href="#">Forgot password?</a>
                    </div>
                </div>

                <button
                    type="button"
                    className="btn btn-primary btn-block mb-4"
                    onClick={() => onLogin(email, password)}
                >
                    Sign in
                </button>
            </form>
        </div>

    )
}

export default StartPage;
