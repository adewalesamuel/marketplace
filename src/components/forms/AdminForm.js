import { Components } from '..'

export function AdminForm(props) {
    return (
        <form className='form' disabled={props.isDisabled ?? false}
        onSubmit={props.handleFormSubmit ?? null}>
            <div className='row'>
                <div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='name'>Name</label>
                        <input className='form-control' type='text' id='name' name='name' 
                        placeholder='Name' value={props.useAdmin.name ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useAdmin.setName(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <input className='form-control' type='text' id='email' name='email' 
                        placeholder='Email' value={props.useAdmin.email ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useAdmin.setEmail(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='password'>Password</label>
                        <input className='form-control' type='text' id='password' name='password' 
                        placeholder='Password' value={props.useAdmin.password ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useAdmin.setPassword(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='role'>Role</label>
                        <input className='form-control' type='text' id='role' name='role' 
                        placeholder='Role' value={props.useAdmin.role ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useAdmin.setRole(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='img_url'>Img_url</label>
                        <input className='form-control' type='text' id='img_url' name='img_url' 
                        placeholder='Img_url' value={props.useAdmin.img_url ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useAdmin.setImg_url(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='api_token'>Api_token</label>
                        <input className='form-control' type='text' id='api_token' name='api_token' 
                        placeholder='Api_token' value={props.useAdmin.api_token ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useAdmin.setApi_token(e.target.value) ?? null} required/>
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