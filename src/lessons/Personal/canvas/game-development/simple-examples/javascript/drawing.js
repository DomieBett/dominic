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

function drawPacman(ctx, radius, mouth = 1) {
    radius = radius || 100;

    ctx.save();
    ctx.fillStyle = 'yellow';

    const start = mouth / 2;
    const end = (Math.PI * 2) - (mouth / 2);

    ctx.beginPath();
    ctx.arc(0, 0, radius, start, end);
    ctx.lineTo(0, 0);
    ctx.closePath();

    ctx.stroke();
    ctx.fill();

    ctx.restore();
}

function drawShip(ctx, radius, options = {}) {
    options = options || {};
    let angle = (options.angle || 0.5 * Math.PI) / 2;
    let sideCurve = options.sideCurve || 0.75;
    let backCurve = options.backCurve || 0.75;

    ctx.save();
    ctx.lineWidth = options.lineWidth || 2;
    ctx.strokeStyle = options.stroke || 'white';
    ctx.fillStyle = options.fill || 'black';

    ctx.beginPath();
    // move to front of ship
    ctx.moveTo(radius, 0);
    // draw right side of the ship
    ctx.quadraticCurveTo(
        Math.cos(angle) * radius * sideCurve,
        Math.sin(angle) * radius * sideCurve,
        Math.cos(Math.PI - angle) * radius,
        Math.sin(Math.PI - angle) * radius
    )
    // draw back of the ship
    ctx.quadraticCurveTo(
        -radius * backCurve, 0,
        Math.cos(Math.PI + angle) * radius,
        Math.sin(Math.PI + angle) * radius
    );
    // draw left side of the ship
    ctx.quadraticCurveTo(
        Math.cos(-angle) * radius * sideCurve,
        Math.sin(-angle) * radius * sideCurve,
        radius, 0
    );

    ctx.fill();
    ctx.stroke();

    // guide for quadratic curves.
    if (options.guide) {

        drawCircleGuide(ctx, radius);
        // for back of the ship
        drawQuadraticGuide(ctx, radius, backCurve, Math.PI);
        // for right side
        drawQuadraticGuide(ctx, radius, sideCurve, angle);
        // for the left side
        drawQuadraticGuide(ctx, radius, sideCurve, -angle);
    }
    ctx.restore();
}

function drawAsteroid(ctx, radius, shape, options = {}) {
    ctx.save();

    ctx.strokeStyle = options.stroke || 'white';
    ctx.fillStyle = options.fill || 'black';
    options.noise = options.noise || 0;

    ctx.beginPath();
    for (let i = 0; i < shape.length; i++) {
        ctx.rotate(2 * Math.PI / shape.length);
        ctx.lineTo(radius + radius * options.noise * shape[i], 0);
    }
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    if (options.guide) {
        drawCircleGuide(ctx, radius);
        drawCircleGuide(ctx, radius + radius * options.noise * 0.5, { lineWidth: 0.3 });
        drawCircleGuide(ctx, radius + radius * options.noise * -0.5, { lineWidth: 0.3 });
    }

    ctx.restore();
}

function createAsteroidShape(segments) {
    var shape = [];
    for (let i = 0; i < segments; i++) {
        shape.push(Math.random() - 0.5);
    }

    return shape;
}

function drawQuadraticGuide(ctx, radius, curve = 0.5, angle = 0, options = {}) {
    ctx.save();

    ctx.lineWidth = options.lineWidth || 0.5;
    ctx.strokeStyle = options.strokeStyle || 'white';

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(Math.cos(angle) * radius, Math.sin(angle) * radius);
    ctx.stroke();

    ctx.arc(
        Math.cos(angle) * radius * curve,
        Math.sin(angle) * radius * curve,
        radius / 50,
        0, Math.PI * 2
    );
    ctx.stroke();

    ctx.restore();
}

function drawCircleGuide(ctx, radius, options = {}) {
    ctx.save();

    ctx.lineWidth = options.lineWidth || 0.5;
    ctx.strokeStyle = options.strokeStyle || 'white';

    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, Math.PI * 2);
    ctx.stroke();

    ctx.restore();
}
