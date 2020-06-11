function drawGrid(ctx, minor, major, stroke, fill, label = true) {
    // set defaults
    minor = minor || 10;
    major = major || minor * 5;
    stroke = stroke || 'green';
    fill = fill || 'white';
    
    ctx.save();
    ctx.strokeStyle = stroke;
    ctx.fillStyle = fill;

    let width = ctx.canvas.width, height = ctx.canvas.height;

    for (let x = 0; x < width; x += minor) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.lineWidth = (x % major === 0) ? 1 : 0.5;
        ctx.stroke();

        if (x % major === 0 && label)
            ctx.fillText(x, x, 10);
    }

    for (let y = 0; y < height; y += minor) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.lineWidth = (y % major === 0) ? 1 : 0.5;
        ctx.stroke();

        if (y % major === 0 && label)
            ctx.fillText(y, 0, y + 10);
    }

    ctx.restore();
}

function drawPacman(ctx, x, y, radius, open = 1) {
    x = x || 200;
    y = y || 200;
    radius = radius || 100;

    ctx.save();
    ctx.fillStyle = 'yellow';

    const start = open/2;
    const end = (Math.PI * 2) - (open / 2);

    ctx.beginPath();
    ctx.arc(x, y, radius, start, end);
    ctx.lineTo(x, y);
    ctx.closePath();

    ctx.stroke();
    ctx.fill();

    ctx.restore();
}
