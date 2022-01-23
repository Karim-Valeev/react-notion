import PropTypes from 'prop-types';
import Logout from '../../containers/Sidebar/Logout';
function Profile({ user }) {
    return (
        <button className="profile" type="button">
            <span className="profile__icon">
                <span className="profile__icon--inner">
                    <span className="profile__block">{user.displayName.substring(0, 1)}</span>
                </span>
            </span>
            <span className="profile__name-block">
                <span className="profile__name">{user.displayName}</span>
            </span>
            <Logout />
        </button>
    );
}

Profile.propTypes = {
    user: PropTypes.object,
};

Profile.defaultProps = {
    user: () => {
        return {};
    },
};

export default Profile;
