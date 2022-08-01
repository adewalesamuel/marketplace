import { Components } from '..'

export function BoostForm(props) {
    return (
        <form className='form' disabled={props.isDisabled ?? false}
        onSubmit={props.handleFormSubmit ?? null}>
            <div className='row'>
                <div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='boost_pack_id'>Boost_pack_id</label>
                        <select className='select2 form-control' id='boost_pack_id' name='boost_pack_id' value={props.useBoost.boost_pack_id ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useBoost.setBoost_pack_id(e.target.value) ?? null} required>
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
                        <select className='select2 form-control' id='artisan_id' name='artisan_id' value={props.useBoost.artisan_id ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useBoost.setArtisan_id(e.target.value) ?? null} required>
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
                        <label htmlFor='payment_status'>Payment_status</label>
                        <input className='form-control' type='text' id='payment_status' name='payment_status' 
                        placeholder='Payment_status' value={props.useBoost.payment_status ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useBoost.setPayment_status(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='payment_method'>Payment_method</label>
                        <input className='form-control' type='text' id='payment_method' name='payment_method' 
                        placeholder='Payment_method' value={props.useBoost.payment_method ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useBoost.setPayment_method(e.target.value) ?? null} required/>
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