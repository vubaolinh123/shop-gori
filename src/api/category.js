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
    const url = `/categoryPro/${id}`;
    return instance.get(url);
}

export const update = (category) => {
    const url = `/categoryPro/${category._id}`;
    return instance.put(url, category);
}