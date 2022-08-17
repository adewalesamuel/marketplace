export function LoginForm(props) {
    return (
        <form onSubmit={props.handleLoginSubmit ?? null}>
            <div className="form-group">
                <label htmlFor="singin-email">Adresse mail *</label>
                <input type="text" className="form-control" id="singin-email" 
                name="email" required value={props.email} disabled={props.isLoginDisabled ?? false}
                onChange={e => props.setEmail(e.target.value)}/>
            </div>

            <div className="form-group">
                <label htmlFor="singin-password">Mot de passe *</label>
                <input type="password" className="form-control" id="singin-password" 
                name="password" required value={props.password} disabled={props.isLoginDisabled ?? false}
                onChange={e => props.setPassword(e.target.value)}/>
            </div>

            <div className="form-footer">
                <button type="submit" className="btn btn-outline-primary-2" disabled={props.isLoginDisabled}>
                    <span>SE CONNECTER</span>
                    <i className="icon-long-arrow-right"></i>
                </button>

                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="signin-remember" />
                    <label className="custom-control-label" htmlFor="signin-remember">
                        Rester connecté
                    </label>
                </div>

                <a href="/" className="forgot-link">Mot de passe oublié?</a>
            </div>
        </form>
    )
}