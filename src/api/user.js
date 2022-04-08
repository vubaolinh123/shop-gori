import instance from "./instance";


export const list = () => {
    const url = `/categoryPros`;
    return instance.get(url);
}
export const remove = (id) => {
    const url = `/categoryPro/${id}`;
    return instance.delete(url);
}

export const add = (category) => {
    const url = `/categoryPro`;
    return instance.post(url, category);
}

export const read = (id) => {
    const url = `/user/${id}`;
    return instance.get(url);
}
