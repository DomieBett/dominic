export const populateShapesData = (size = 200) => {
    const defaultColor = 'black';

    return [
        (color = defaultColor) => {
            return {
                name: 'square',
                color,
                style: {
                    height: size,
                    width: size,
                    backgroundColor: color
                }
            }
        },
        (color = defaultColor) => {
            return {
                name: 'rectangle',
                color,
                style: {
                    height: size,
                    width: size * 6 / 4,
                    backgroundColor: color
                }
            }
        },
        (color = defaultColor) => {
            return {
                name: 'circle',
                color,
                style: {
                    height: size,
                    width: size,
                    borderRadius: '50%',
                    backgroundColor: color
                }
            }
        },
        (color = defaultColor) => {
            return {
                name: 'oval',
                color,
                style: {
                    height: size,
                    width: size * 5 / 4,
                    backgroundColor: color,
                    borderRadius: '50%'
                }
            }
        },
        (color = defaultColor) => {
            return {
                name: 'triangle',
                color,
                style: {
                    background: 'none',
                    // width: '200px',
                    boxSizing: 'border-box',
                    borderTop: `${0}px solid transparent`,
                    borderLeft: `${size / 2}px solid transparent`,
                    borderRight: `${size / 2}px solid transparent`,
                    borderBottom: `${size}px solid ${color}`
                },
            }
        },
    ]
};
