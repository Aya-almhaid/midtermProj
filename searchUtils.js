export const searchItems = (items, query) => {
    if (!query || query.trim() === "") return items;

    return items.filter(item =>
        Object.values(item)
            .join(" ")
            .toLowerCase()
            .includes(query.toLowerCase())
    );
};