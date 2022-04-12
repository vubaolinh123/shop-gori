import instance from "./instance";



export const list = () => {
    const url = `/user`;
    return instance.get(url);
}
export const remove = (id) => {
    const url = `/user/${id}`;
    return instance.delete(url);
}

export const update = (status, id) => {
    const url = `/user/${id}`;
    return instance.put(url, status);
}

export const read = (id) => {
    const url = `/user/${id}`;
    return instance.get(url);
}
