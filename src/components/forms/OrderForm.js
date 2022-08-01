import { Components } from '..'

export function OrderForm(props) {
    return (
        <form className='form' disabled={props.isDisabled ?? false}
        onSubmit={props.handleFormSubmit ?? null}>
            <div className='row'>
                <div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='article_id'>Article_id</label>
                        <select className='select2 form-control' id='article_id' name='article_id' value={props.useOrder.article_id ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useOrder.setArticle_id(e.target.value) ?? null} required>
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
                        <label htmlFor='client_id'>Client_id</label>
                        <select className='select2 form-control' id='client_id' name='client_id' value={props.useOrder.client_id ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useOrder.setClient_id(e.target.value) ?? null} required>
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
                        <label htmlFor='quantity'>Quantity</label>
                        <input className='form-control' type='number' id='quantity' name='quantity' 
                        placeholder='Quantity' value={props.useOrder.quantity ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useOrder.setQuantity(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='price'>Price</label>
                        <input className='form-control' type='number' id='price' name='price' 
                        placeholder='Price' value={props.useOrder.price ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useOrder.setPrice(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='payment_status'>Payment_status</label>
                        <input className='form-control' type='text' id='payment_status' name='payment_status' 
                        placeholder='Payment_status' value={props.useOrder.payment_status ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useOrder.setPayment_status(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='payment_method'>Payment_method</label>
                        <input className='form-control' type='text' id='payment_method' name='payment_method' 
                        placeholder='Payment_method' value={props.useOrder.payment_method ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useOrder.setPayment_method(e.target.value) ?? null} required/>
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