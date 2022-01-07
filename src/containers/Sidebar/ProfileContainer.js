import { connect } from "react-redux";
import Profile from "../../components/SideBar/Profile";
import {useState} from "react";
const mapStateProps = store => {
    return {
        user: store.user
    }
}

function ProfileContainer (props) {
    const [user]= useState(props.user)
    if (user === false) {
        return <></>
    }
    return <Profile user={user}/>
}

export default connect(
    mapStateProps
)(ProfileContainer)