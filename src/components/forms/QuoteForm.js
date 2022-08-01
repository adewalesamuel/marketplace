import { Components } from '..'

export function QuoteForm(props) {
    return (
        <form className='form' disabled={props.isDisabled ?? false}
        onSubmit={props.handleFormSubmit ?? null}>
            <div className='row'>
                <div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='artisan_id'>Artisan_id</label>
                        <select className='select2 form-control' id='artisan_id' name='artisan_id' value={props.useQuote.artisan_id ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useQuote.setArtisan_id(e.target.value) ?? null} required>
                            {/* {
                                props.items.map(item => {
                                    return <option key={Math.random()} value={item.id ?? ''}>{item.name}</option>
                                })
                            }  */}
                        </select>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='message'>Message</label>
                        <input className='form-control' type='text' id='message' name='message' 
                        placeholder='Message' value={props.useQuote.message ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useQuote.setMessage(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='client_email'>Client_email</label>
                        <input className='form-control' type='text' id='client_email' name='client_email' 
                        placeholder='Client_email' value={props.useQuote.client_email ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useQuote.setClient_email(e.target.value) ?? null} required/>
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