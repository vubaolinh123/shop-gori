import instance from "./instance";


export const list = () => {
    const url = `/order`;
    return instance.get(url);
}

export const detailBill = (id) => {
    const url = `/order/${id}`;
    return instance.get(url);
}

export const add = (infoOder) => {
    const url = `/order`;
    return instance.post(url, infoOder);
}

export const remove = (id) => {
    const url = `/categoryPro/${id}`;
    return instance.delete(url);
}


export const read = (id) => {
    const url = `/categoryPro/${id}`;
    return instance.get(url);
}

export const update = (category) => {
    const url = `/categoryPro/${category._id}`;
    return instance.put(url, category);
}