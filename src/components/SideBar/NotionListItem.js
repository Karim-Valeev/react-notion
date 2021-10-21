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

function NotionListItem() {
    return <>
        <div className="notion__page--block">
            <a href="/#" className="notion__item">
                <span className="notion__item--inner" style={{padding: '2px 14px'}}>
                    <span className="notion__selectable--arrow">
                        <svg viewBox="0 0 100 100" className="triangle" style={styleArrow}><polygon points="5.9,88.2 50,11.8 94.1,88.2 "></polygon>
                        </svg>
                    </span>
                    <span className="notion__list-item-file">
                        <span className="list__file">
                            <svg viewBox="0 0 30 30" className="page" style={styleFileSvg}>
                                <g>
                                    <path d="M16,1H4v28h22V11L16,1z M16,3.828L23.172,11H16V3.828z M24,27H6V3h8v10h10V27z M8,17h14v-2H8V17z M8,21h14v-2H8V21z M8,25h14v-2H8V25z"></path>
                                </g>
                            </svg>
                        </span>
                    </span>
                    <span className="notion__list-item-name">Untitled</span>
                    <span className="notion__list--action-btn">
                        <button type="button" className="notion__list--action-delete">
                            <svg viewBox="0 0 30 30" className="trash" style={styleDelete}>
                                <path d="M21,5c0-2.2-1.8-4-4-4h-4c-2.2,0-4,1.8-4,4H2v2h2v22h22V7h2V5H21z M13,3h4c1.104,0,2,0.897,2,2h-8C11,3.897,11.897,3,13,3zM24,27H6V7h18V27z M16,11h-2v12h2V11z M20,11h-2v12h2V11z M12,11h-2v12h2V11z"></path>
                            </svg>
                        </button>
                        <button type="button" className="notion__list--action-delete">
                            <svg viewBox="0 0 16 16" className="plus" style={stylePlusSvg}>
                                <path d="M7.977 14.963c.407 0 .747-.324.747-.723V8.72h5.362c.399 0 .74-.34.74-.747a.746.746 0 00-.74-.738H8.724V1.706c0-.398-.34-.722-.747-.722a.732.732 0 00-.739.722v5.529h-5.37a.746.746 0 00-.74.738c0 .407.341.747.74.747h5.37v5.52c0 .399.332.723.739.723z"></path>
                            </svg>
                        </button>
                    </span>
                </span>
            </a>
            <div className="notion__list-outliner__private-empty">
                <p>No pages inside</p>
            </div>
        </div>

        <div className="notion__page--block">
            <a href="/#" className="notion__item">
                            <span className="notion__item--inner" style={{padding: '2px 14px'}}>
                                <span className="notion__selectable--arrow">
                                    <svg viewBox="0 0 100 100" className="triangle"
                                         style={styleArrowDown}>
                                        <polygon points="5.9,88.2 50,11.8 94.1,88.2 "></polygon>
                                    </svg>
                                </span>
                                <span className="notion__list-item-file">
                                    <span className="list__file">
                                        <svg viewBox="0 0 30 30" className="page"
                                             style={styleFileSvg}>
                                            <g>
                                                <path
                                                    d="M16,1H4v28h22V11L16,1z M16,3.828L23.172,11H16V3.828z M24,27H6V3h8v10h10V27z M8,17h14v-2H8V17z M8,21h14v-2H8V21z M8,25h14v-2H8V25z"></path>
                                            </g>
                                        </svg>
                                    </span>
                                </span>
                                <span className="notion__list-item-name">Untitled</span>
                                <span className="notion__list--action-btn">
                                    <button type="button" className="notion__list--action-delete">
                                        <svg viewBox="0 0 30 30" className="trash"
                                             style={styleDelete}>
                                            <path
                                                d="M21,5c0-2.2-1.8-4-4-4h-4c-2.2,0-4,1.8-4,4H2v2h2v22h22V7h2V5H21z M13,3h4c1.104,0,2,0.897,2,2h-8C11,3.897,11.897,3,13,3zM24,27H6V7h18V27z M16,11h-2v12h2V11z M20,11h-2v12h2V11z M12,11h-2v12h2V11z"></path>
                                        </svg>
                                    </button>
                                    <button type="button" className="notion__list--action-delete">
                                        <svg viewBox="0 0 16 16" className="plus"
                                             style={stylePlusSvg}>
                                            <path
                                                d="M7.977 14.963c.407 0 .747-.324.747-.723V8.72h5.362c.399 0 .74-.34.74-.747a.746.746 0 00-.74-.738H8.724V1.706c0-.398-.34-.722-.747-.722a.732.732 0 00-.739.722v5.529h-5.37a.746.746 0 00-.74.738c0 .407.341.747.74.747h5.37v5.52c0 .399.332.723.739.723z"></path>
                                        </svg>
                                    </button>
                                </span>
                            </span>
            </a>
        </div>

        <div className="notion__page--block">
            <a href="/#" className="notion__item">
                            <span className="notion__item--inner" style={{padding: '2px 14px'}}>
                                <span className="notion__selectable--arrow">
                                    <svg viewBox="0 0 100 100" className="triangle"
                                         style={styleArrow}>
                                        <polygon points="5.9,88.2 50,11.8 94.1,88.2 "></polygon>
                                    </svg>
                                </span>
                                <span className="notion__list-item-file">
                                    <span className="list__file">
                                        <svg viewBox="0 0 30 30" className="page"
                                             style={styleFileSvg}>
                                            <g>
                                                <path
                                                    d="M16,1H4v28h22V11L16,1z M16,3.828L23.172,11H16V3.828z M24,27H6V3h8v10h10V27z M8,17h14v-2H8V17z M8,21h14v-2H8V21z M8,25h14v-2H8V25z"></path>
                                            </g>
                                        </svg>
                                    </span>
                                </span>
                                <span className="notion__list-item-name">Untitled</span>
                                <span className="notion__list--action-btn">
                                    <button type="button" className="notion__list--action-delete">
                                        <svg viewBox="0 0 30 30" className="trash"
                                             style={styleDelete}>
                                            <path
                                                d="M21,5c0-2.2-1.8-4-4-4h-4c-2.2,0-4,1.8-4,4H2v2h2v22h22V7h2V5H21z M13,3h4c1.104,0,2,0.897,2,2h-8C11,3.897,11.897,3,13,3zM24,27H6V7h18V27z M16,11h-2v12h2V11z M20,11h-2v12h2V11z M12,11h-2v12h2V11z"></path>
                                        </svg>
                                    </button>
                                    <button type="button" className="notion__list--action-delete">
                                        <svg viewBox="0 0 16 16" className="plus"
                                             style={stylePlusSvg}>
                                            <path
                                                d="M7.977 14.963c.407 0 .747-.324.747-.723V8.72h5.362c.399 0 .74-.34.74-.747a.746.746 0 00-.74-.738H8.724V1.706c0-.398-.34-.722-.747-.722a.732.732 0 00-.739.722v5.529h-5.37a.746.746 0 00-.74.738c0 .407.341.747.74.747h5.37v5.52c0 .399.332.723.739.723z"></path>
                                        </svg>
                                    </button>
                                </span>
                            </span>
            </a>
            <div className="notion__list-outliner__private">
                <a href="/#" className="notion__item">
                                <span className="notion__item--inner" style={{padding: '2px 14px 2px 28px'}}>
                                    <span className="notion__selectable--arrow">
                                        <svg viewBox="0 0 100 100" className="triangle"
                                             style={styleArrow}>
                                            <polygon points="5.9,88.2 50,11.8 94.1,88.2 "></polygon>
                                        </svg>
                                    </span>
                                    <span className="notion__list-item-file">
                                        <span className="list__file">
                                            <svg viewBox="0 0 30 30" className="page"
                                                 style={styleFileSvg}>
                                                <g>
                                                    <path
                                                        d="M16,1H4v28h22V11L16,1z M16,3.828L23.172,11H16V3.828z M24,27H6V3h8v10h10V27z M8,17h14v-2H8V17z M8,21h14v-2H8V21z M8,25h14v-2H8V25z"></path>
                                                </g>
                                            </svg>
                                        </span>
                                    </span>
                                    <span className="notion__list-item-name">Untitled</span>
                                    <span className="notion__list--action-btn">
                                        <button type="button" className="notion__list--action-delete">
                                            <svg viewBox="0 0 30 30" className="trash"
                                                 style={styleDelete}>
                                                <path
                                                    d="M21,5c0-2.2-1.8-4-4-4h-4c-2.2,0-4,1.8-4,4H2v2h2v22h22V7h2V5H21z M13,3h4c1.104,0,2,0.897,2,2h-8C11,3.897,11.897,3,13,3zM24,27H6V7h18V27z M16,11h-2v12h2V11z M20,11h-2v12h2V11z M12,11h-2v12h2V11z"></path>
                                            </svg>
                                        </button>
                                        <button type="button" className="notion__list--action-delete">
                                            <svg viewBox="0 0 16 16" className="plus"
                                                 style={stylePlusSvg}><path
                                                d="M7.977 14.963c.407 0 .747-.324.747-.723V8.72h5.362c.399 0 .74-.34.74-.747a.746.746 0 00-.74-.738H8.724V1.706c0-.398-.34-.722-.747-.722a.732.732 0 00-.739.722v5.529h-5.37a.746.746 0 00-.74.738c0 .407.341.747.74.747h5.37v5.52c0 .399.332.723.739.723z"></path>
                                            </svg>
                                        </button>
                                    </span></span>
                </a>
                <div className="notion__list-outliner__private-empty"  style={{padding_left: '48px'}}>
                    <p>No pages inside</p>
                </div>
            </div>
        </div>
    </>
}

export default NotionListItem