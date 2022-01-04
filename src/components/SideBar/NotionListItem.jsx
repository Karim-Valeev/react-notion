import NotionListItemRecursion from "./NotionListItemRecursion";
import PropTypes from 'prop-types'
function NotionListItem({notionList, handleClick}) {
    return <>
        {notionList.map((item,index) =>
            <div className="notion__page--block">
            <NotionListItemRecursion data={item} key={`${item.id}${index}`} handleClick={handleClick}/>
            </div>
        )}
    </>
}

NotionListItem.propTypes = {
    notionList: PropTypes.array
}

NotionListItem.default = {
    notionList: () => { return [] }
}


export default NotionListItem