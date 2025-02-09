const ButtonSvg = (props) => {
    return (
        <button className={`shadow-2xl text-center  items-center px-4 py-2 text-sm font-${props.fonts} mr-4 text-center border-2 text-${props.textColor} border-solid border-${props.borderColor} rounded-lg hover:ring-2 hover:border-none hover:ring-green-200 ${props.isFlex} ${props.isFlex} items-center`} onClick={props.handel}>
            {props.title}
            {props.svg && <span className="ml-2">{props.svg}</span>}
        </button>
    );
}

export default ButtonSvg;