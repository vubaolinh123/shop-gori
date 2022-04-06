



export const isAuthenticate = () => {


    if (!localStorage.getItem('user')) {
        const fake = {
            token: "fakeToken",
            user: {
                _id: "fakeID"
            }
        }
        return fake
    }
    return JSON.parse(localStorage.getItem('user'));
}


