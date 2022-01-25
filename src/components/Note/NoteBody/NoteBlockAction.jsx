import { ReactComponent as PlusSvg } from '../../../static/svg/plus.svg';
import { ReactComponent as DotsSvg } from '../../../static/svg/dots.svg';

const styleDots = {
    width: '14px',
    height: ' 14px',
    fill: 'rgba(55, 53, 47, 0.4)',
    flexShrink: 0,
    backfaceVisibility: 'hidden',
    transform: 'rotateZ(90deg)',
};

const stylePlusSvg = {
    width: 16,
    height: 16,
    fill: 'rgba(55, 53, 47, 0.4)',
    flex_shrink: 0,
    backface_visibility: 'hidden',
};

function NoteBlockAction({ handleClickPlus, handleClickDots }) {
    return (
        <div className="block__action--btns">
            <button
                type="button"
                className="add_btn"
                onClick={() => {
                    handleClickPlus(true);
                }}
            >
                <PlusSvg style={stylePlusSvg} />
            </button>
            <button type="button" className="dots_btn" onClick={() => handleClickDots(true)}>
                <DotsSvg style={styleDots} />
            </button>
        </div>
    );
}

export default NoteBlockAction;
