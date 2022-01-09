import {connect} from "react-redux";
import {useEffect} from "react";
import NotionListItem from "../../components/SideBar/NotionListItem";
import {handleAddNote, handleNotionList} from "../../store/actions/NotionListActions";


function NotionListContainer (props) {
    const notionList = props.notionList
    const user = props.user
    const handleNotionList = props.handleNotionList
    const handleAddNoteDispatch = props.handleAddNote

    useEffect(async () => {
        await handleNotionList(user)
    }, [])

    const handleAddNote = (data) => {
        const resData = {
            parentId: data.id,
            title: 'Untitled',
            author: user.uid,
            text: '',
            level: data.level + 1
        }
        handleAddNoteDispatch(resData)
    }

    return <NotionListItem notionList={notionList} handleAddNote={handleAddNote}/>
}

const mapStateProps = state => {
    return {
        notionList: state.notionList,
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleNotionList: (user) => dispatch(handleNotionList(user)),
        handleAddNote: (note) => dispatch(handleAddNote(note))
    }
}

export default connect(
    mapStateProps,
    mapDispatchToProps
) (NotionListContainer)