export function ErrorMessage(props){
    return (
        <div className="text-danger text-center">
            <strong>{props.message}</strong>
        </div>)
}