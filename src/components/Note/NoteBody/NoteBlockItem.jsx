import NoteBlockActionContainer from "../../../containers/Note/NoteBody/NoteBlockActionContainer";


function NoteBlockItem () {
    return <>
        <div className="notion__block">
            <NoteBlockActionContainer/>
            <div className="notion__text--block--inner">
                <div id="text" className="text__block" placeholder="Empty line">text</div>
            </div>

        </div>
        <div className="notion__block">
            <NoteBlockActionContainer/>
            <div className="notion__text--block--inner">
                <div id="text" className="text__block" placeholder="Empty line">text</div>
            </div>
        </div>
    </>
}

export default NoteBlockItem