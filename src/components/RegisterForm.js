import { Link } from "react-router-dom";

export function RegisterForm(props) {
    return (
        <form onSubmit={props.handleRegisterSubmit ?? null}>
            <div className="form-group">
                <label htmlFor="email">Nom & Prénoms *</label>
                <input type="text" className="form-control" id="name" 
                name="name" required value={props.useClient.name} onChange={e => props.useClient.setName(e.target.value)}
                disabled={props.useClient.isDisabled}/>
            </div>
            <div className="form-group">
                <label htmlFor="email">Adresse mail *</label>
                <input type="email" className="form-control" id="email" 
                name="email" required value={props.useClient.email} onChange={e => props.useClient.setEmail(e.target.value)}
                disabled={props.useClient.isDisabled}/>
            </div>
            
            <div className="form-group">
                <label htmlFor="email">Numéro de téléphone *</label>
                <input type="tel" className="form-control" id="tel" minLength={10}
                name="tel" required value={props.useClient.phne} onChange={e => props.useClient.setPhone(e.target.value)}
                disabled={props.useClient.isDisabled}/>
            </div>

            <div className="form-group">
                <label htmlFor="password">Mot de passe *</label>
                <input type="password" className="form-control" id="password" 
                name="password" required value={props.useClient.password} onChange={e => props.useClient.setPassword(e.target.value)}
                disabled={props.useClient.isDisabled}/>
            </div>
            <div className="form-group">
                <label htmlFor="cpassword">Confirmer le mot de pase *</label>
                <input type="password" className="form-control" id="cpassword" 
                name="cpassword" required value={props.cpassword} onChange={e => props.setCpassword(e.target.value)}
                disabled={props.useClient.isDisabled}/>
            </div>

            <div className="form-footer">
                <button type="submit" className="btn btn-outline-primary-2" disabled={props.useClient.isDisabled}>
                    <span>S'INSCRIRE</span>
                    <i className="icon-long-arrow-right"></i>
                </button>

                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="register-policy" required 
                    name="has_accepted_conditions" checked={props.hasAcceptedConditions ?? false} 
                    onChange={e => props.setHasAcceptedConditions(!props.hasAcceptedConditions)}/>
                    <label className="custom-control-label" htmlFor="register-policy">
                        J'accepte la <Link to="/politique-de-confidentialite">politique de confidentialite</Link> *
                    </label>
                </div>
            </div>
        </form>
    )
}