import { Components } from '..'

export function ArtisanForm(props) {
    return (
        <form className='form' disabled={props.isDisabled ?? false}
        onSubmit={props.handleFormSubmit ?? null}>
            <div className='row'>
                <div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='name'>Name</label>
                        <input className='form-control' type='text' id='name' name='name' 
                        placeholder='Name' value={props.useArtisan.name ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useArtisan.setName(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <input className='form-control' type='text' id='email' name='email' 
                        placeholder='Email' value={props.useArtisan.email ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useArtisan.setEmail(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='password'>Password</label>
                        <input className='form-control' type='text' id='password' name='password' 
                        placeholder='Password' value={props.useArtisan.password ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useArtisan.setPassword(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='phone'>Phone</label>
                        <input className='form-control' type='text' id='phone' name='phone' 
                        placeholder='Phone' value={props.useArtisan.phone ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useArtisan.setPhone(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='country'>Country</label>
                        <input className='form-control' type='text' id='country' name='country' 
                        placeholder='Country' value={props.useArtisan.country ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useArtisan.setCountry(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='city'>City</label>
                        <input className='form-control' type='text' id='city' name='city' 
                        placeholder='City' value={props.useArtisan.city ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useArtisan.setCity(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='postal_code'>Postal_code</label>
                        <input className='form-control' type='text' id='postal_code' name='postal_code' 
                        placeholder='Postal_code' value={props.useArtisan.postal_code ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useArtisan.setPostal_code(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='address'>Address</label>
                        <input className='form-control' type='text' id='address' name='address' 
                        placeholder='Address' value={props.useArtisan.address ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useArtisan.setAddress(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='is_active'>Is_active</label>
                        <input className='form-control' type='radio' id='is_active' name='is_active' 
                        placeholder='Is_active' value={props.useArtisan.is_active ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useArtisan.setIs_active(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='img_url'>Img_url</label>
                        <input className='form-control' type='text' id='img_url' name='img_url' 
                        placeholder='Img_url' value={props.useArtisan.img_url ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useArtisan.setImg_url(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='api_token'>Api_token</label>
                        <input className='form-control' type='text' id='api_token' name='api_token' 
                        placeholder='Api_token' value={props.useArtisan.api_token ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useArtisan.setApi_token(e.target.value) ?? null} required/>
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