function LoaderImage() {
    return (
        <div className="notion__image--block">
            <div className="notion__image--block--inner bg__image">
                <div className="loader__container-note arc-rotate-double">
                    <div className="loader">
                        <div className="arc-1" />
                        <div className="arc-2" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoaderImage;
