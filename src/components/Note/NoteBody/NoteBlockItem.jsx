import NoteBlockActionContainer from '../../../containers/Note/NoteBody/NoteBlockActionContainer';
import LinkBlock from '../NoteBlock/LinkBlock';
import TextBlock from '../NoteBlock/TextBlock';
import ImageBlock from '../NoteBlock/ImageBlock';
import ImageBlockFileContainer from '../../../containers/NoteBlock/ImageBlockFileContainer';
import VideoBlock from '../NoteBlock/VideoBlock';

function NoteBlockItem({ noteBlocks }) {
    const renderNoteBlockSwitch = (block) => {
        switch (block.type) {
            case 'link':
                return <LinkBlock block={block} />;
            case 'text':
                return <TextBlock block={block} />;
            case 'imageLink':
                return <ImageBlock block={block} />;
            case 'imageFile':
                return <ImageBlockFileContainer block={block} />;
            case 'video':
                return <VideoBlock block={block} />;
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
                        <NoteBlockActionContainer block={block} />
                        {renderNoteBlockSwitch(block)}
                    </div>
                ))
            )}
        </>
    );
}

export default NoteBlockItem;
