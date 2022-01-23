import NoteBlockActionContainer from '../../../containers/Note/NoteBody/NoteBlockActionContainer';
import LinkBlock from '../NoteBlock/LinkBlock';
import TextBlock from '../NoteBlock/TextBlock';

function NoteBlockItem({ noteBlocks }) {
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
                        {block.type === 'link' ? <LinkBlock block={block} /> : <TextBlock block={block} />}
                    </div>
                ))
            )}
        </>
    );
}

export default NoteBlockItem;
