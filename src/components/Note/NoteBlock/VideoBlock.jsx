const styleBlock = {
    position: 'absolute',
    left: '0px',
    top: '0px',
    width: '100%',
    height: '100%',
    borderRadius: '1px',
    backgroundColor: 'rgb(247, 246, 245)',
};
function VideoBlock({ block }) {
    return (
        <div className="notion__block--video w_video">
            <div className="notion__block--video-inner">
                <div className="videoBlock">
                    <iframe
                        src={block.value}
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        loading="lazy"
                        style={styleBlock}
                    />
                </div>
            </div>
        </div>
    );
}

export default VideoBlock;
