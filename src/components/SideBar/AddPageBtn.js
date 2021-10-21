const container = {
    width: 16,
    height: 16,
    display: 'block',
    fill: 'rgba(55, 53, 47, 0.4)',
    flex_shrink: 0,
    backface_visibility: 'hidden'

}

function AddPageBtn() {
    return  <button type="button" className="add_notion-page">
                        <span className="plus_add_notion">
                            <svg viewBox="0 0 16 16" className="plus"
                                 style={container}>
                                <path d="M7.977 14.963c.407 0 .747-.324.747-.723V8.72h5.362c.399 0 .74-.34.74-.747a.746.746 0 00-.74-.738H8.724V1.706c0-.398-.34-.722-.747-.722a.732.732 0 00-.739.722v5.529h-5.37a.746.746 0 00-.74.738c0 .407.341.747.74.747h5.37v5.52c0 .399.332.723.739.723z"></path>
                            </svg>
                        </span>
        <span className="add_page__text">Add page</span>
    </button>
}

export default AddPageBtn