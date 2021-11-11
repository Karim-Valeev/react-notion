import {ReactComponent as PlusSvg} from '../../static/svg/plus.svg'
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
                            <PlusSvg style={container}/>
                        </span>
        <span className="add_page__text">Add page</span>
    </button>
}

export default AddPageBtn