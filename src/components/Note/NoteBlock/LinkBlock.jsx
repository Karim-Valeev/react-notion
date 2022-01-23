import { ReactComponent as FileSvg } from '../../../static/svg/file.svg';
import { Link } from 'react-router-dom';

const styleFileSvg = {
    width: 20,
    height: 20,
    display: 'block',
    fill: 'rgba(55, 53, 47, 0.8)',
    flex_shrink: 0,
    backface_visibility: 'hidden',
};

function LinkBlock({ block }) {
    return (
        <Link to={`/note/${block.linkId}`} className="notion__block--page">
            <span className="notion__block--page-inner">
                <span className="svg__icon-file">
                    <FileSvg style={styleFileSvg} />
                </span>
                <span className="block__page-name">{block.value}</span>
            </span>
        </Link>
    );
}

export default LinkBlock;
