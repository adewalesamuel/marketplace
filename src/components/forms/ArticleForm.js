import { Components } from '..'

export function ArticleForm(props) {
    return (
        <form className='form' disabled={props.isDisabled ?? false}
        onSubmit={props.handleFormSubmit ?? null}>
            <div className='row'>
                <div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='name'>Name</label>
                        <input className='form-control' type='text' id='name' name='name' 
                        placeholder='Name' value={props.useArticle.name ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useArticle.setName(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='description'>Description</label>
                        <input className='form-control' type='text' id='description' name='description' 
                        placeholder='Description' value={props.useArticle.description ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useArticle.setDescription(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='type'>Type</label>
                        <input className='form-control' type='text' id='type' name='type' 
                        placeholder='Type' value={props.useArticle.type ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useArticle.setType(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='quantity'>Quantity</label>
                        <input className='form-control' type='number' id='quantity' name='quantity' 
                        placeholder='Quantity' value={props.useArticle.quantity ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useArticle.setQuantity(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='price'>Price</label>
                        <input className='form-control' type='number' id='price' name='price' 
                        placeholder='Price' value={props.useArticle.price ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useArticle.setPrice(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='discount'>Discount</label>
                        <input className='form-control' type='number' id='discount' name='discount' 
                        placeholder='Discount' value={props.useArticle.discount ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useArticle.setDiscount(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='artisan_id'>Artisan_id</label>
                        <select className='select2 form-control' id='artisan_id' name='artisan_id' value={props.useArticle.artisan_id ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useArticle.setArtisan_id(e.target.value) ?? null} required>
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
                        <label htmlFor='attributes'>Attributes</label>
                        <input className='form-control' type='text' id='attributes' name='attributes' 
                        placeholder='Attributes' value={props.useArticle.attributes ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useArticle.setAttributes(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='period'>Period</label>
                        <input className='form-control' type='number' id='period' name='period' 
                        placeholder='Period' value={props.useArticle.period ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useArticle.setPeriod(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='address'>Address</label>
                        <input className='form-control' type='text' id='address' name='address' 
                        placeholder='Address' value={props.useArticle.address ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useArticle.setAddress(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='img_url'>Img_url</label>
                        <input className='form-control' type='text' id='img_url' name='img_url' 
                        placeholder='Img_url' value={props.useArticle.img_url ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useArticle.setImg_url(e.target.value) ?? null} required/>
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