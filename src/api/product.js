import { isAuthenticate } from "../utils/localstorage";
import instance from "./instance";
const { token, user } = isAuthenticate()

export const list = () => {
    const url = `/products`;
    return instance.get(url);
}

export const filter = (Order) => {
    let url = "product/filter?page=1&limit=8"
    console.log("order", Order);
    if (Order.order != "0") {
        url = `product/filter?page=${Order.page}&limit=8&sort=${Order.order}`
    } else {
        url = `product/filter?page=${Order.page}&limit=8`
    }
    return instance.get(url)
}

export const remove = (id) => {
    const url = `/products/${id}`;
    return instance.delete(url);
}

export const add = (product) => {
    console.log("UserTokenAPI", user._id, token);
    const url = `/products/${user._id}`;
    return instance.post(url, product, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
}

export const read = (id) => {
    const url = `/products/${id}`;
    return instance.get(url);
}

export const update = (product) => {
    const url = `/products/${product._id}`;
    return instance.put(url, product);
}

export const search = (keyword) => {
    const url = `/products/search?name=${keyword}`;
    return instance.get(url);
}