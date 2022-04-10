import instance from "./instance";


export const list = () => {
    const url = `/comment`;
    return instance.get(url);
}
export const remove = (id) => {
    const url = `/comment/${id}`;
    return instance.delete(url);
}

export const add = (comment) => {
    const url = `/comment`;
    return instance.post(url, comment);
}

export const read = (id) => {
    const url = `/comment/${id}`;
    return instance.get(url);
}

export const update = (comment) => {
    const url = `/comment/${comment._id}`;
    return instance.put(url, comment);
}