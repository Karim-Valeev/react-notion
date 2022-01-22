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

export const arrUrl = (notes,node) => {
    const res_ar = [node]
    let cur_node = node
    while (cur_node.parentId !== null) {
        cur_node = findById(notes, cur_node.parentId, "items")
        if (cur_node !== null) {
            res_ar.push(cur_node)
        } else {
            break
        }
    }

    return res_ar
}

export function findById(arr, id, nestingKey) {

    if(arr.length === 0) return

    return arr.find(d => d.id === id)
        || findById(arr.flatMap(d => d[nestingKey] || []), id)
        || null
}
export default {
    nest,
    flattenNote,
    findById
}