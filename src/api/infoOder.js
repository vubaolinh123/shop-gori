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


export const read = (id) => {
    const url = `/order/${id}`;
    return instance.get(url);
}

export const update = (status, id) => {
    const url = `/order/${id}`;
    return instance.put(url, status);
}