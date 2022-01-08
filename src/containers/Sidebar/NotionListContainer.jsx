import { connect } from "react-redux";
import {useEffect, useState} from "react";
import NotionListItem from "../../components/SideBar/NotionListItem";
import {handleNotionList} from "../../store/actions/NotionListActions";


function NotionListContainer (props) {
    const [notionList] = useState(props.notionList)
    const [user] = useState(props.user)
    const handleNotionList = props.handleNotionList

    handleNotionList(user)

    return <NotionListItem notionList={notionList}/>
}

const mapStateProps = store => {
    return {
        notionList: store.notionList,
        user: store.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleNotionList: (user) => dispatch(handleNotionList(user))
    }
}

export default connect(
    mapStateProps,
    mapDispatchToProps
) (NotionListContainer)