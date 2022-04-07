import instance from "./instance";


export const addDetailBill = (infoOder) => {
    const url = `/detaibill`;
    return instance.post(url, infoOder);
}
