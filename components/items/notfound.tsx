
export default function NotFound({...props }){
    return (
        <div className="componentNotFoundContainer">
            <div className="componentNotFoundContainerInner">
            {props.message}
        </div>
        </div>
    );
}