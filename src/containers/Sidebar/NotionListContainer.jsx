import { connect } from "react-redux";
import {useEffect, useState} from "react";
import NotionListItem from "../../components/SideBar/NotionListItem";
import {handleNotionList} from "../../store/actions/NotionListActions";


function NotionListContainer (props) {
    const [notionList] = useState(props.notionList)
    const handleNotionList = props.handleNotionList

    handleNotionList()

    return <NotionListItem notionList={notionList}/>
}

const mapStateProps = store => {
    return {
        notionList: store.notionList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleNotionList: () => dispatch(handleNotionList())
    }
}

export default connect(
    mapStateProps,
    mapDispatchToProps
) (NotionListContainer)