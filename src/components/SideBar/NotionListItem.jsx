import NotionListItemRecursion from "./NotionListItemRecursion";

function NotionListItem({notionList}) {
    function handleData (obj) {
        return [...obj.map((i,n) =>
            <div className="notion__page--block">
                <NotionListItemRecursion data={i} key={n}/>
            </div>)]
    }
    let showHtmlData = handleData(notionList)
    return <>
        {showHtmlData}
    </>
}

export default NotionListItem