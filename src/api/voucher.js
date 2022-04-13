import instance from "./instance";

export const add = (voucher) => {
    const url = `/voucher`;
    return instance.post(url, voucher);
}

export const list = () => {
    const url = `/voucher`;
    return instance.get(url);
}
export const remove = (id) => {
    const url = `/voucher/${id}`;
    return instance.delete(url);
}

export const update = (voucher) => {
    const url = `/voucher/${voucher._id}`;
    return instance.put(url, voucher);
}

export const read = (nameVoucher) => {
    const url = `/voucher/read?name=${nameVoucher}`;
    return instance.get(url);
}
