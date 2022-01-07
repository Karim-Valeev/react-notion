import { connect } from "react-redux";
import {useState} from "react";
import NotionListItem from "../../components/SideBar/NotionListItem";
import {handleActiveNotionList} from "../../store/actions/NotionListActions";

const mapStateProps = store => {
    return {
        notionList: store.notionList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        activeNotionList: (id,parentId, level) => dispatch(handleActiveNotionList(id,parentId, level))
    }
}

function NotionListContainer (props) {
    const [notionList] = useState(props.notionList)
    const activeNotionList = props.activeNotionList

    function handleClick (e, id, parentId, level) {
        e.preventDefault()
        activeNotionList(id,parentId, level)
    }

    return <NotionListItem notionList={notionList}/>
}

export default connect(
    mapStateProps,
    mapDispatchToProps
) (NotionListContainer)