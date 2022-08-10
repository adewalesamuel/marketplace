import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Components } from ".";
import { Hooks } from "../hooks";
import { Services } from "../services";
import { Auth } from "../utils/Auth";

export function AuthModal(props) {
    const abortController = useMemo(() => new AbortController(), []);

    const useClient = Hooks.useClient();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCpassword] = useState('');
    const [hasAcceptedConditions, setHasAcceptedConditions] = useState(false);
    const [errorMessage, setErrorMessage] = useState([]);
    const [isLoginDisabled, setIsLoginDisabled] = useState(false);

    const disableForms = () => {
        setIsLoginDisabled(true);
        useClient.setIsDisabled(true);
    };
    const enableForms = () => {
        setIsLoginDisabled(false);
        useClient.setIsDisabled(false);
    }
    const login = (payload) => {
        Services.AuthService.login('client', JSON.stringify(payload), abortController.signal)
        .then(response => {
            Auth.setSessionToken(response.tk);
            Auth.setUser(response.client);
            window.location.reload();
        })
        .catch(err => {
            enableForms();
            err.message.then(msg => setErrorMessage(msg));
        });
    }
    const handleLoginSubmit = e => {
        e.preventDefault();
        disableForms();
        setErrorMessage('');
        
        const payload = {
            email,
            password
        };

        login(payload);
    }

    const handleRegisterSubmit = e => {
        e.preventDefault();

        disableForms();
        setErrorMessage('');
        useClient.createClient(abortController.signal)
        .then(() => {
            const payload = {
                email: useClient.email,
                password: useClient.password
            };

            login(payload);
        })
        .catch(err => {
            enableForms();
            err.message.then(msg => setErrorMessage(msg));
        });
    }

    return (
        <div className="modal fade" id="signin-modal" tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-body">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true"><i className="icon-close"></i></span>
                        </button>

                        <div className="form-box">
                            <Components.ErrorMessage message={errorMessage} />
                            <div className="form-tab">
                                <ul className="nav nav-pills nav-fill" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="signin-tab" data-toggle="tab" href="#signin" 
                                        role="tab" aria-controls="signin" aria-selected="true">Connexion</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="register-tab" data-toggle="tab" href="#register" 
                                        role="tab" aria-controls="register" aria-selected="false">Inscription</a>
                                    </li>
                                </ul>
                                <div className="tab-content" id="tab-content-5">
                                    <div className="tab-pane fade show active" id="signin" role="tabpanel" 
                                    aria-labelledby="signin-tab">
                                        <Components.LoginForm isLoginDisabled={isLoginDisabled} handleLoginSubmit={handleLoginSubmit}
                                        email={email} password={password} setEmail={setEmail} setPassword={setPassword}/>
                                    </div>
                                    <div className="tab-pane fade" id="register" role="tabpanel" aria-labelledby="register-tab">
                                        <Components.RegisterForm useClient={useClient} cpassword={cpassword}
                                        setCpassword={setCpassword} handleRegisterSubmit={handleRegisterSubmit}
                                        hasAcceptedConditions={hasAcceptedConditions} setHasAcceptedConditions={setHasAcceptedConditions}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}