import { Components } from '..'

export function PageForm(props) {
    return (
        <form className='form' disabled={props.isDisabled ?? false}
        onSubmit={props.handleFormSubmit ?? null}>
            <div className='row'>
                <div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='artisan_id'>Artisan_id</label>
                        <select className='select2 form-control' id='artisan_id' name='artisan_id' value={props.usePage.artisan_id ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.usePage.setArtisan_id(e.target.value) ?? null} required>
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
                        <label htmlFor='content'>Content</label>
                        <input className='form-control' type='text' id='content' name='content' 
                        placeholder='Content' value={props.usePage.content ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.usePage.setContent(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='title'>Title</label>
                        <input className='form-control' type='text' id='title' name='title' 
                        placeholder='Title' value={props.usePage.title ?? ''}
                        disabled={props.isDisabled} 
                        onChange={ e => props.usePage.setTitle(e.target.value) ?? null} required/>
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