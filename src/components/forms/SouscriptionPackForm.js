import { Components } from '..'

export function SouscriptionPackForm(props) {
    return (
        <form className='form' disabled={props.isDisabled ?? false}
        onSubmit={props.handleFormSubmit ?? null}>
            <div className='row'>
                <div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='name'>Name</label>
                        <input className='form-control' type='text' id='name' name='name' 
                        placeholder='Name' value={props.useSouscriptionPack.name ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useSouscriptionPack.setName(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='description'>Description</label>
                        <input className='form-control' type='text' id='description' name='description' 
                        placeholder='Description' value={props.useSouscriptionPack.description ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useSouscriptionPack.setDescription(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='price'>Price</label>
                        <input className='form-control' type='number' id='price' name='price' 
                        placeholder='Price' value={props.useSouscriptionPack.price ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useSouscriptionPack.setPrice(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='discount'>Discount</label>
                        <input className='form-control' type='number' id='discount' name='discount' 
                        placeholder='Discount' value={props.useSouscriptionPack.discount ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useSouscriptionPack.setDiscount(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='attributes'>Attributes</label>
                        <input className='form-control' type='text' id='attributes' name='attributes' 
                        placeholder='Attributes' value={props.useSouscriptionPack.attributes ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useSouscriptionPack.setAttributes(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='period'>Period</label>
                        <input className='form-control' type='number' id='period' name='period' 
                        placeholder='Period' value={props.useSouscriptionPack.period ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useSouscriptionPack.setPeriod(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='address'>Address</label>
                        <input className='form-control' type='text' id='address' name='address' 
                        placeholder='Address' value={props.useSouscriptionPack.address ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useSouscriptionPack.setAddress(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='img_url'>Img_url</label>
                        <input className='form-control' type='text' id='img_url' name='img_url' 
                        placeholder='Img_url' value={props.useSouscriptionPack.img_url ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.useSouscriptionPack.setImg_url(e.target.value) ?? null} required/>
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