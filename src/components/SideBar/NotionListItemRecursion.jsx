import { ReactComponent as ArrowSvg } from '../../static/svg/arrow.svg';
import { ReactComponent as FileSvg } from '../../static/svg/file.svg';
import { ReactComponent as DeleteSvg } from '../../static/svg/delete.svg';
import { ReactComponent as PlusSvg } from '../../static/svg/plus.svg';
import { MAX_LEVEL } from '../../constants/notionListConstants';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const styleArrow = {
    width: '0.6875em',
    height: '0.6875em',
    display: 'block',
    fill: 'rgba(55, 53, 47, 0.4)',
    flex_shrink: 0,
    backface_visibility: 'hidden',
    transition: 'transform 200ms ease-out 0s',
    transform: 'rotateZ(180deg)',
    opacity: 1,
};

const styleArrowDown = {
    width: '0.6875em',
    height: '0.6875em',
    display: 'block',
    fill: 'rgba(55, 53, 47, 0.4)',
    flex_shrink: 0,
    backface_visibility: 'hidden',
    transition: 'transform 200ms ease-out 0s',
    transform: 'rotateZ(90deg)',
    opacity: 1,
};

const styleFileSvg = {
    width: 18,
    height: 18,
    display: 'block',
    fill: 'rgba(55, 53, 47, 0.4',
    flex_shrink: 0,
    backface_visibility: 'hidden',
};

const styleDelete = {
    width: 15,
    height: 15,
    display: 'block',
    fill: 'inherit',
    flex_shrink: 0,
    backface_visibility: 'hidden',
};

const stylePlusSvg = {
    width: 15,
    height: 15,
    display: 'block',
    fill: 'rgba(55, 53, 47, 0.4)',
    flex_shrink: 0,
    backface_visibility: 'hidden',
};
function NotionListItemRecursion({ data, note, handleAddNote, handleDelete }) {
    const { title, level, items, parentId, id } = data;
    const [open, setOpen] = useState(false);

    const classNotionItem = note?.id === id ? 'notion__item notion__list-item-active' : 'notion__item';
    return (
        <>
            <Link to={`/note/${id}`} className={classNotionItem}>
                <span className="notion__item--inner" style={{ padding: `2px 14px 2px ${level * 14}px` }}>
                    <span
                        className="notion__selectable--arrow"
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setOpen(!open);
                        }}
                    >
                        <ArrowSvg style={open ? styleArrow : styleArrowDown} />
                    </span>
                    <span className="notion__list-item-file">
                        <span className="list__file">
                            <FileSvg style={styleFileSvg} />
                        </span>
                    </span>
                    <span className="notion__list-item-name">{title}</span>
                    <span className="notion__list--action-btn">
                        <button
                            type="button"
                            className="notion__list--action-delete"
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                handleDelete({ parentId, id, level, items });
                            }}
                        >
                            <DeleteSvg style={styleDelete} />
                        </button>
                        {level !== MAX_LEVEL ? (
                            <button
                                type="button"
                                className="notion__list--action-delete"
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    handleAddNote({ parentId, level, id });
                                }}
                            >
                                <PlusSvg style={stylePlusSvg} />
                            </button>
                        ) : null}
                    </span>
                </span>
            </Link>
            {items && open ? (
                <div className="notion__list-outliner__private">
                    {items.map((i, ind) => (
                        <NotionListItemRecursion
                            data={i}
                            note={note}
                            handleAddNote={handleAddNote}
                            handleDelete={handleDelete}
                            key={`${i.id}${ind}`}
                        />
                    ))}
                </div>
            ) : open ? (
                <div className="notion__list-outliner__private-empty" style={{ padding_left: `${level * 14}px` }}>
                    <p>No pages inside</p>
                </div>
            ) : (
                ''
            )}
        </>
    );
}

NotionListItemRecursion.propTypes = {
    data: PropTypes.object,
};

NotionListItemRecursion.default = {
    data: () => {
        return {};
    },
};

export default NotionListItemRecursion;
