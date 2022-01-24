import OutsideClickHandler from 'react-outside-click-handler';
import { useForm } from 'react-hook-form';

const defaultValues = {
    text: '',
};

function TextBlockModal({ activeTextModal, handleClick, handleText }) {
    const classModal = activeTextModal ? 'modal show modal_background' : 'modal modal_background';
    const { register, handleSubmit } = useForm({ defaultValues });

    return (
        <div className={classModal} id="exampleModalToggle1" aria-labelledby="exampleModalToggleLabel2">
            <div className="modal-dialog modal-dialog-centered">
                <OutsideClickHandler
                    onOutsideClick={() => {
                        handleClick(false);
                    }}
                >
                    <form className="modal-content" onSubmit={handleSubmit(handleText)}>
                        <div className="modal-header">
                            <div className="btn_link">
                                <b>Enter text</b>
                            </div>
                        </div>
                        <div className="modal-body">
                            There will be WYSIWYG redactor...
                            {/*<input*/}
                            {/*    {...register('name')}*/}
                            {/*    className="input_link--style"*/}
                            {/*    type="text"*/}
                            {/*    size="40"*/}
                            {/*    placeholder="Name note"*/}
                            {/*/>*/}
                        </div>
                        <div className="modal-footer-2-btns">
                            <button
                                type="button"
                                className="btn btn-link"
                                onClick={() => {
                                    handleClick(false);
                                }}
                            >
                                Cancel
                            </button>
                            <button type="submit" className="btn btn-link">
                                Save
                            </button>
                        </div>
                    </form>
                </OutsideClickHandler>
            </div>
        </div>
    );
}

export default TextBlockModal;
