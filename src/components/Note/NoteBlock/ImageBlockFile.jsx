function ImageBlockFile({ url }) {
    return (
        <div className="notion__image--block">
            <div className="notion__image--block--inner">
                <img src={url} alt="фото" className="image__block" />
            </div>
        </div>
    );
}

export default ImageBlockFile;
