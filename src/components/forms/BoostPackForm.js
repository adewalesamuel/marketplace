import { Components } from '..'

export function BoostPackForm(props) {
    return (
        <form className='form' disabled={props.isDisabled ?? false}
        onSubmit={props.handleFormSubmit ?? null}>
            <div className='row'>
                <div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='name'>Name</label>
                        <select className='select2 form-control' id='name' name='name' value={props.useBoostPack.name ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useBoostPack.setName(e.target.value) ?? null} required>
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
                        <label htmlFor='description'>Description</label>
                        <input className='form-control' type='text' id='description' name='description' 
                        placeholder='Description' value={props.useBoostPack.description ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useBoostPack.setDescription(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='price'>Price</label>
                        <input className='form-control' type='number' id='price' name='price' 
                        placeholder='Price' value={props.useBoostPack.price ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useBoostPack.setPrice(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='discount'>Discount</label>
                        <input className='form-control' type='number' id='discount' name='discount' 
                        placeholder='Discount' value={props.useBoostPack.discount ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useBoostPack.setDiscount(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='img_url'>Img_url</label>
                        <input className='form-control' type='text' id='img_url' name='img_url' 
                        placeholder='Img_url' value={props.useBoostPack.img_url ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useBoostPack.setImg_url(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='period'>Period</label>
                        <input className='form-control' type='number' id='period' name='period' 
                        placeholder='Period' value={props.useBoostPack.period ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useBoostPack.setPeriod(e.target.value) ?? null} required/>
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