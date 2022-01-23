import {useForm} from "react-hook-form";
import OutsideClickHandler from "react-outside-click-handler";
import {useState} from "react";
const defaultValues ={
    photo: '',
    linkPhoto: ''
}

function ImageBlockModal ({activeImageModal, handleClick, handleImage}) {
    const classModal = activeImageModal.active ? "modal show modal_background modal_centered" : "modal modal_background modal_centered"
    const classUpload = activeImageModal.activeUpload ? "btn_link m_10 btn-link--active" : 'btn_link m_10'
    const classLink = activeImageModal.activeLink ? "btn_link btn-link--active" : 'btn_link'
    const { register, handleSubmit, setValue } = useForm({ defaultValues });
    const [url, setUrl] = useState("")

    const handleUploadPhoto = (e) => {
        const photos = e.target.files
        let photo = ''
        Array.from(photos).forEach(item => {
            photo = item
            setUrl(URL.createObjectURL(item))
        })
        setValue("photo", photo)
        setValue("linkPhoto", "")
        e.target.files.value = null
    }

    const handleBlurLinkPhoto = async (e) => {
        const link = e.target.value
        setValue("linkPhoto", link)
        setValue("photo", "")
        setUrl(link)
    }

    return <div className={classModal} id="exampleModalToggle1" aria-labelledby="exampleModalToggleLabel2">
        <div className="modal_width">
            <OutsideClickHandler onOutsideClick={() => {handleClick({
                active: false,
                activeUpload: activeImageModal.activeUpload,
                activeLink: activeImageModal.activeLink
            })}}>
                <form className="modal-content" onSubmit={handleSubmit(handleImage)}>
                    <div className="modal-header modal_start">
                        <button type={"button"} className={classUpload} onClick={() => {handleClick({
                            active: true,
                            activeUpload: true,
                            activeLink: false
                        })}}><b>Upload photo</b></button>
                        <button type={"button"} className={classLink} onClick={() => {handleClick({
                            active: true,
                            activeUpload: false,
                            activeLink: true
                        })}}><b>Link photo</b></button>
                    </div>
                    <div className="modal-body modal__body">
                        {(url.length > 0) ?  <div className="uploadPhoto">
                            <img src={url} alt="" className="upload__img"/>
                        </div> : ""}
                        {(activeImageModal.activeUpload) ?
                            <div className="example-2 w_100">
                                <div className="form-group">
                                    <input {...register('photo')} accept="image/png, image/jpeg, image/webp" onChange={(e) => {handleUploadPhoto(e)}} type="file" name="file" id="file" className="input-file"/>
                                    <label htmlFor="file" className="btn btn-tertiary js-labelFile">
                                        <span className="js-fileName">Choose an image</span>
                                    </label>
                                </div>
                            </div> :
                            <input className="input_link--style" {...register('linkPhoto')}
                                   type="text" onBlur={(e) => {handleBlurLinkPhoto(e)}} placeholder="Paste the image link..."/>
                        }
                    </div>

                    <div className="modal-footer">
                        <button type="submit" className="btn btn-link">Upload</button>
                    </div>
                </form>
            </OutsideClickHandler>
        </div>
    </div>

}

export default ImageBlockModal