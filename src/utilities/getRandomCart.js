const getRandomNumber = (numberLength) => {
    const number = Math.ceil(Math.random() * numberLength);
    return number;
}
const getRandomCartItem = (allCart) => {
    const randomIndexForCart = (getRandomNumber(allCart.length) - 1);
    return `Randomly Selected Camera Model is ${allCart[randomIndexForCart].name}.`;
}

export default getRandomCartItem;