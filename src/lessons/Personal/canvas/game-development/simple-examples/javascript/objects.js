class Asteroid {
    constructor(ctx, radius = 50, segments = 24, noise = 0.5) {
        this.angle = 0
        this.noise = noise
        this.radius = radius
        this.x = ctx.canvas.width * Math.random()
        this.y = ctx.canvas.height * Math.random()
        this.shape = this.randomAsteroidShape(segments)
        this.xSpeed = ctx.canvas.width * (Math.random() - 0.5)
        this.ySpeed = ctx.canvas.height * (Math.random() - 0.5)
        this.rotationSpeed = 2 * Math.PI * (Math.random() - 0.5)
    }

    draw(ctx, guide = false) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);

        drawAsteroid(ctx, this.radius, this.shape, {
            guide: guide,
            noise: this.noise
        });

        ctx.restore();
    }

    update(elapsed) {
        if (this.x - this.radius + elapsed * this.xSpeed > context.canvas.width) {
            this.x = -this.radius;
        }
        if (this.x + this.radius + elapsed * this.xSpeed < 0) {
            this.x = context.canvas.width + this.radius;
        }
        if (this.y - this.radius + elapsed * this.ySpeed > context.canvas.height) {
            this.y = -this.radius;
        }
        if (this.y + this.radius + elapsed * this.ySpeed < 0) {
            this.y = context.canvas.height + this.radius;
        }

        this.x += elapsed * this.xSpeed;
        this.y += elapsed * this.ySpeed;
        this.angle = (this.angle + elapsed * this.rotationSpeed) % (2 * Math.PI);
    }

    randomAsteroidShape(segments) {
        var shape = []
        for (let i = 0; i < segments; i++) {
            shape.push(Math.random() - 0.5)
        }
    
        return shape
    }
}
