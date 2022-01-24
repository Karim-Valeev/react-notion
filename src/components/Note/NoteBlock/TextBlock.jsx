function TextBlock({ block }) {
    return (
        <div className="notion__text--block--inner">
            <div className="text__block" dangerouslySetInnerHTML={{__html: block.value}}/>
        </div>
    );
}

export default TextBlock;
