export const nest = (items, id = null, link = 'parentId') =>
    items
        .filter(item => item[link] === id)
        .map(item => ({ ...item, items: nest(items, item.id) }));

export default {
    nest
}