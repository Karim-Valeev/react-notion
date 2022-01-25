import OutsideClickHandler from 'react-outside-click-handler';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';

const defaultValues = {
    linkVideo: '',
};

function VideoModal({ activeVideoModal, data, handleClick, handleVideo }) {
    const classModal = activeVideoModal
        ? 'modal show modal_background modal_centered'
        : 'modal modal_background modal_centered';
    const { register, handleSubmit, setValue } = useForm({ defaultValues });
    const [url, setUrl] = useState('');

    useEffect(() => {
        setValue('linkVideo', data.linkVideo);
        setUrl(data.linkVideo);
    }, [data]);

    const handleBlurLinkVideo = (e) => {
        const link = e.target.value;
        setValue('linkVideo', link);
        setUrl(link);
    };

    return (
        <div className={classModal} id="exampleModalToggle1" aria-labelledby="exampleModalToggleLabel2">
            <div className="modal_width">
                <OutsideClickHandler
                    onOutsideClick={() => {
                        setValue('linkVideo', '');
                        handleClick(false);
                    }}
                >
                    <form className="modal-content" onSubmit={handleSubmit(handleVideo)}>
                        <div className="modal-header modal_start">
                            <button type={'button'} className="btn_link btn-link--active">
                                <b>Link video</b>
                            </button>
                        </div>
                        <div className="modal-body modal__body">
                            {url.length > 0 ? (
                                <div className="uploadPhoto">
                                    <iframe
                                        width="100%"
                                        src={url}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media;"
                                    ></iframe>
                                </div>
                            ) : (
                                ''
                            )}
                            <input
                                className="input_link--style"
                                {...register('linkVideo')}
                                type="text"
                                onBlur={(e) => {
                                    handleBlurLinkVideo(e);
                                }}
                                placeholder="Paste the video link..."
                            />
                        </div>

                        <div className="modal-footer">
                            <button type="submit" className="btn btn-link">
                                Upload
                            </button>
                        </div>
                    </form>
                </OutsideClickHandler>
            </div>
        </div>
    );
}

export default VideoModal;
