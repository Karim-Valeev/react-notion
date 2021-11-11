import { connect } from "react-redux";
import {useState} from "react";
import NotionListItem from "../../components/SideBar/NotionListItem";

const mapStateProps = store => {
    return {
        notionList: store.notionList
    }
}

function NotionListContainer (props) {
    const [notionList] = useState(props.notionList)

    return <NotionListItem notionList={notionList}/>
}

export default connect(
    mapStateProps
) (NotionListContainer)