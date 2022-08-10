export function OrderForm(props) {
    return (
        <form className='form' disabled={props.isDisabled ?? false}
        onSubmit={props.handleFormSubmit ?? null}>
            <div className='row'>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='shipping_place'>Lieu de livraison</label>
                        <input className='form-control' type='text' id='shipping_place' name='shipping_place' 
                        placeholder='Lieu de livraison' value={props.useOrder.shipping_place ?? ''} 
                        disabled={props.useOrder.isDisabled} 
                        onChange={ e => props.useOrder.setShipping_place(e.target.value) ?? null}/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='additionnal_informations'>Informations complémentaires</label>
                        <textarea className='form-control' id="additionnal_informations" 
                        disabled={props.useOrder.isDisabled} 
                        name='additionnal_informations' value={props.useOrder.additionnal_informations}
                        onChange={e => props.useOrder.setAdditionnal_informations(e.target.value) ?? null}>
                        </textarea>
                    </div>
                </div>
            </div>
        </form>
    )
}