import {ReactComponent as ArrowSvg} from '../../static/svg/arrow.svg'
import {ReactComponent as FileSvg} from '../../static/svg/file.svg'
import {ReactComponent as DeleteSvg} from '../../static/svg/delete.svg'
import {ReactComponent as PlusSvg} from '../../static/svg/plus.svg'
import { MAX_LEVEL } from '../../constants/notionListConstants'
import PropTypes from "prop-types";
import {useState} from "react";

const styleArrow = {
    width: '0.6875em',
    height: '0.6875em',
    display: 'block',
    fill: 'rgba(55, 53, 47, 0.4)',
    flex_shrink: 0,
    backface_visibility: 'hidden',
    transition: 'transform 200ms ease-out 0s',
    transform: 'rotateZ(180deg)',
    opacity: 1

}

const styleArrowDown = {
    width: '0.6875em',
    height: '0.6875em',
    display: 'block',
    fill: 'rgba(55, 53, 47, 0.4)',
    flex_shrink: 0,
    backface_visibility: 'hidden',
    transition: 'transform 200ms ease-out 0s',
    transform: 'rotateZ(90deg)',
    opacity: 1

}

const styleFileSvg = {
    width: 18,
    height: 18,
    display: 'block',
    fill: 'rgba(55, 53, 47, 0.4',
    flex_shrink: 0,
    backface_visibility: 'hidden'
}

const styleDelete = {
    width: 15,
    height: 15,
    display: 'block',
    fill: 'inherit',
    flex_shrink: 0,
    backface_visibility: 'hidden'
}

const stylePlusSvg = {
    width: 15,
    height: 15,
    display: 'block',
    fill: 'rgba(55, 53, 47, 0.4)',
    flex_shrink: 0,
    backface_visibility: 'hidden'
}
function NotionListItemRecursion ({data}) {
    const {name, level, items} = data
    const [open, setOpen] = useState(false)
    return (
        <>
        <a href="/#" className="notion__item" onClick={() => setOpen(!open)}>
                            <span className="notion__item--inner" style={{padding: `2px 14px 2px ${level*14}px`}}>
                                <span className="notion__selectable--arrow">
                                   <ArrowSvg style={open ? styleArrow : styleArrowDown}/>
                                </span>
                                <span className="notion__list-item-file">
                                    <span className="list__file">
                                        <FileSvg style={styleFileSvg}/>
                                    </span>
                                </span>
                                <span className="notion__list-item-name">{name}</span>
                                <span className="notion__list--action-btn">
                                    <button type="button" className="notion__list--action-delete"
                                            onClick={(e) => {
                                        e.preventDefault()
                                        e.stopPropagation()
                                        console.log('delete')
                                    }}>
                                        <DeleteSvg style={styleDelete}/>
                                    </button>
                                    { (level !== MAX_LEVEL) ?
                                        <button type="button" className="notion__list--action-delete"
                                                onClick={(e) => {
                                                    e.stopPropagation()
                                                    e.preventDefault()
                                                    console.log('add')
                                                }}>
                                            <PlusSvg style={stylePlusSvg}/>
                                        </button> : ''
                                    }
                                </span>
                            </span>
        </a>
            {(items && open) ?
                <div className="notion__list-outliner__private">
                    {items.map((i,index) => <NotionListItemRecursion data={i} key={`${i.id}${index}`}/>)}
                </div> :
                (open) ? (<div className="notion__list-outliner__private-empty"  style={{padding_left: `${level*14}px`}}><p>No pages inside</p></div>) : ''
            }
        </>)
}


NotionListItemRecursion.propTypes = {
    data: PropTypes.object
}

NotionListItemRecursion.default = {
    data: () => { return {} }
}

export default NotionListItemRecursion