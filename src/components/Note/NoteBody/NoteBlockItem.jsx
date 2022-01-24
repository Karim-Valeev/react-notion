import NoteBlockActionContainer from '../../../containers/Note/NoteBody/NoteBlockActionContainer';
import LinkBlock from '../NoteBlock/LinkBlock';
import TextBlock from '../NoteBlock/TextBlock';

function NoteBlockItem({ noteBlocks }) {
    const renderNoteBlockSwitch = (block) => {
        switch (block.type) {
            case 'link':
                return <LinkBlock block={block} />;
            case 'text':
                return <TextBlock block={block} />;
        }
    };

    return (
        <>
            {noteBlocks.length === 0 ? (
                <div className="notion__block">
                    <NoteBlockActionContainer />
                    <div className="notion__text--block--inner">
                        <div id="text" className="text__block" placeholder="Empty line">
                            Empty line
                        </div>
                    </div>
                </div>
            ) : (
                noteBlocks.map((block) => (
                    <div className="notion__block" key={block.id}>
                        <NoteBlockActionContainer />
                        {renderNoteBlockSwitch(block)}
                    </div>
                ))
            )}
        </>
    );
}

export default NoteBlockItem;
