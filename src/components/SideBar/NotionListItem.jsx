import NotionListItemRecursion from '../../components/SideBar/NotionListItemRecursion';
import PropTypes from 'prop-types';

function NotionListItem({ notionList, note, handleAddNote, handleDelete }) {
    return (
        <>
            {notionList.map((item, index) => (
                <div className="notion__page--block">
                    <NotionListItemRecursion
                        data={item}
                        note={note}
                        key={`${item.id}${index}`}
                        handleAddNote={handleAddNote}
                        handleDelete={handleDelete}
                    />
                </div>
            ))}
        </>
    );
}

NotionListItem.propTypes = {
    notionList: PropTypes.array,
};

NotionListItem.default = {
    notionList: () => {
        return [];
    },
};

export default NotionListItem;
