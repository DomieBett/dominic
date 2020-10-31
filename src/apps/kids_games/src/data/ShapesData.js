export const populateShapesData = (size) => {
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
                    height: size * 3 / 4,
                    width: size,
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
                    height: size * 3 / 4,
                    width: size,
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
