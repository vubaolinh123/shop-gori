import { isAuthenticate } from "../utils/localstorage";
import instance from "./instance";
const { token, user } = isAuthenticate()

export const list = () => {
    const url = `/products`;
    return instance.get(url);
}
export const remove = (id) => {
    const url = `/products/${id}`;
    return instance.delete(url);
}

export const add = (product) => {
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