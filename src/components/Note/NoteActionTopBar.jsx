import { ReactComponent as DeleteSvg } from '../../static/svg/delete.svg';

const styleDelete = {
    width: 15,
    height: 15,
    display: 'block',
    fill: 'inherit',
    flex_shrink: 0,
    backface_visibility: 'hidden',
};

function NoteActionTopBar() {
    return (
        <div className="notion__action--buttons">
            <button className="notion__button" type="button">
                Edit
            </button>
            <button className="notion__button" type="button">
                View
            </button>
            <button className="notion__button" type="button">
                <DeleteSvg style={styleDelete} />
            </button>
        </div>
    );
}

export default NoteActionTopBar;
