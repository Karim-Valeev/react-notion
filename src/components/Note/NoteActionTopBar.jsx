import { ReactComponent as DeleteSvg } from '../../static/svg/delete.svg';

const styleDelete = {
    width: 15,
    height: 15,
    display: 'block',
    fill: 'inherit',
    flex_shrink: 0,
    backface_visibility: 'hidden',
};

function NoteActionTopBar({ mode, handleDelete, handleModeEdit, handleModeView }) {
    const classEdit = mode.activeEdit ? 'notion__button notion__button--active' : 'notion__button';
    const classView = mode.activeView ? 'notion__button notion__button--active' : 'notion__button';
    return (
        <div className="notion__action--buttons">
            <button
                className={classEdit}
                type="button"
                onClick={() => {
                    handleModeEdit();
                }}
            >
                Edit
            </button>
            <button
                className={classView}
                type="button"
                onClick={() => {
                    handleModeView();
                }}
            >
                View
            </button>
            {mode.activeEdit ? (
                <button
                    className="notion__button"
                    type="button"
                    onClick={() => {
                        handleDelete();
                    }}
                >
                    <DeleteSvg style={styleDelete} />
                </button>
            ) : (
                ''
            )}
        </div>
    );
}

export default NoteActionTopBar;
