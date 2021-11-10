import PropTypes from 'prop-types'
function Profile({user}) {
    return (<button className="profile" type="button">
        <span className="profile__icon">
            <span className="profile__icon--inner">
                <span className="profile__block">{user.first_name.substring(0, 1)}</span>
            </span>
        </span>
        <span className="profile__name-block">
            <span className="profile__name">{user.first_name} {user.last_name}</span>
        </span>
    </button>)
}

Profile.propTypes = {
    user: PropTypes.object
}

Profile.defaultProps = {
    user: () => { return {} }
}

export default Profile