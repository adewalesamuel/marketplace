import { Components } from '..'

export function ReviewsForm(props) {
    return (
        <form className='form' disabled={props.isDisabled ?? false}
        onSubmit={props.handleFormSubmit ?? null}>
            <div className='row'>
				<div className='col-12'>
                    <h5>Ajouter un avis</h5>
                    <div className='form-group'>
                        <label htmlFor='score'>Score</label>
                        <input className='form-control' type='number' id='score' name='score' 
                        placeholder='Score' value={props.useReviews.score ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useReviews.setScore(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='message'>Message</label>
                        <textarea className='form-control' type='text' id='message' name='message' 
                        placeholder='Message' value={props.useReviews.message ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useReviews.setMessage(e.target.value) ?? null}></textarea>
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