export const gettingLsBasket = () => {
    const lsData = localStorage.getItem ('basket');
    return lsData ? JSON.parse (lsData) : []
}

export const gettingLsFavourite= () => {
    const lsData = localStorage.getItem ('favourite');
    return lsData ? JSON.parse (lsData) : []
}

