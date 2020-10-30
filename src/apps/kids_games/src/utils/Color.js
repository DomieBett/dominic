const colors = ['pink', 'green', 'black', 'blue', 'brown', 'red'];

export const getRandomColor = () => {
    return colors[(Math.ceil(Math.random() * colors.length) - 1)];
}
