export const getUserId = () => {
    if (!localStorage.getItem('userId')) {
        const userId = prompt("please set userId localstorage")
        localStorage.setItem('userId', userId)
    }
    return +localStorage.getItem('userId');
}
