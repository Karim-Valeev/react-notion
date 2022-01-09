export const nest = (items, id = null, link = 'parentId') =>
    items
        .filter(item => item[link] === id)
        .map(item => ({ ...item, items: nest(items, item.id) }));

export const flattenNote = (node, result=[], depth = 0) => {
    node.forEach(child => {
        let flattened = Object.assign({},child)
        delete flattened.items;
        flattened.depth = depth;
        result.push(flattened);
        if(child.items && child.items.length) {
            flattenNote(child.items, result, depth + 1);
        }
    })
   return result
}
export default {
    nest,
    flattenNote
}