import { Components } from '..'

export function PasswordForgottenForm(props) {
    return (
        <form className='form' disabled={props.isDisabled ?? false}
        onSubmit={props.handleFormSubmit ?? null}>
            <div className='row'>
                <div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='user_email'>User_email</label>
                        <input className='form-control' type='text' id='user_email' name='user_email' 
                        placeholder='User_email' value={props.usePasswordForgotten.user_email ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.usePasswordForgotten.setUser_email(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='user_type'>User_type</label>
                        <input className='form-control' type='text' id='user_type' name='user_type' 
                        placeholder='User_type' value={props.usePasswordForgotten.user_type ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.usePasswordForgotten.setUser_type(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='token'>Token</label>
                        <input className='form-control' type='text' id='token' name='token' 
                        placeholder='Token' value={props.usePasswordForgotten.token ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.usePasswordForgotten.setToken(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='has_been_used'>Has_been_used</label>
                        <input className='form-control' type='radio' id='has_been_used' name='has_been_used' 
                        placeholder='Has_been_used' value={props.usePasswordForgotten.has_been_used ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.usePasswordForgotten.setHas_been_used(e.target.value) ?? null} required/>
                    </div>
                </div>
				
                <div className='col-12 text-right'>
                    <button disabled={props.isDisabled ?? false} type='button' className='btn btn-primary' 
                    onClick={props.handleFormSubmit}>
                        <span>Enregistrer</span>
                    </button>
                </div>
            </div>
        </form>
    )
}