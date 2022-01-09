import AddPageBtn from "../../components/SideBar/AddPageBtn";
import {handleAddNote} from "../../store/actions/NotionListActions";
import {connect} from "react-redux";


function AddPageBtnContainer(props) {
    const user = props.user
    const handleAddNote = props.handleAddNote
    const handleClick = () => {
        const data = {
            author: user.uid,
            title: 'Untitled',
            parentId: null,
            text: '',
            level: 1
        }
        handleAddNote(data)
    }

    return <AddPageBtn handleClick={handleClick}/>
}
const mapStateProps = store => {
    return {
        user: store.user
    }
}

const mapDispatchToProps = dispatch => {
  return {
      handleAddNote: (data) => dispatch(handleAddNote(data))
  }
}
export default connect(
    mapStateProps,
    mapDispatchToProps
) (AddPageBtnContainer)