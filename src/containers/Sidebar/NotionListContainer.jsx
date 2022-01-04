import { connect } from "react-redux";
import {useState} from "react";
import NotionListItem from "../../components/SideBar/NotionListItem";
import {handleActiveNotionList} from "../../store/actions/NotionListActions";

const mapStateProps = store => {
    return {
        notionList: store.notionList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        activeNotionList: (id,parentId) => dispatch(handleActiveNotionList(id,parentId))
    }
}

function NotionListContainer (props) {
    const [notionList] = useState(props.notionList)
    const activeNotionList = props.activeNotionList

    function handleClick (e, id, parentId) {
        e.preventDefault()
        activeNotionList(id,parentId)
    }

    return <NotionListItem notionList={notionList} handleClick={handleClick}/>
}

export default connect(
    mapStateProps,
    mapDispatchToProps
) (NotionListContainer)