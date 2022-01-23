
function TextBlock ({block}) {
    return <div className="notion__text--block--inner">
        <div className="text__block">{block.value}</div>
    </div>
}

export default TextBlock