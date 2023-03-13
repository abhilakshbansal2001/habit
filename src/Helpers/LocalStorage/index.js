export const updateDefault = (user) => {
    localStorage.setItem("defaultUser" , JSON.stringify(user))
}

export const getDefault = () => {
    return JSON.parse(localStorage.getItem("defaultUser"))
}


export const addUser = (name , value) => {
    localStorage.setItem(name,JSON.stringify(value))
}

export const updateUserList = (userName) => {
    const usersList = JSON.parse(localStorage.getItem("users")) || []
    if(!usersList.find(name => name === userName)){   
        usersList.push(userName);
        localStorage.setItem("users", JSON.stringify(usersList));
    }
}



