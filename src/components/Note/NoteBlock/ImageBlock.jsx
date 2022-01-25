function ImageBlock({ block }) {
    return (
        <div className="notion__image--block">
            <div className="notion__image--block--inner">
                <img src={block.value} alt="photo" className="image__block" />
            </div>
        </div>
    );
}

export default ImageBlock;
