import { Components } from '..'

export function ReviewsForm(props) {
    return (
        <form className='form' disabled={props.isDisabled ?? false}
        onSubmit={props.handleFormSubmit ?? null}>
            <div className='row'>
                <div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='client_id'>Client_id</label>
                        <select className='select2 form-control' id='client_id' name='client_id' value={props.useReviews.client_id ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useReviews.setClient_id(e.target.value) ?? null} required>
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
                        <label htmlFor='artisan_id'>Artisan_id</label>
                        <select className='select2 form-control' id='artisan_id' name='artisan_id' value={props.useReviews.artisan_id ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useReviews.setArtisan_id(e.target.value) ?? null} required>
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
                        placeholder='Message' value={props.useReviews.message ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useReviews.setMessage(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='score'>Score</label>
                        <input className='form-control' type='number' id='score' name='score' 
                        placeholder='Score' value={props.useReviews.score ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useReviews.setScore(e.target.value) ?? null} required/>
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