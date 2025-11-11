export class Point {
    constructor(readonly x: number, readonly y: number) {
    }

    public static of(x: number, y: number): Point {
        return new Point(x, y);
    }

    public add(vector: Vector): Point {
        return new Point(this.x + vector.x, this.y + vector.y);
    }
}

export enum RotationDirection {
    CLOCKWISE, COUNTERCLOCKWISE
};

export class Vector {
    private _magnitude: number;

    constructor(private _x: number, private _y: number) {
        this._magnitude = Math.hypot(_x, _y);
    }

    get x() {
        return this._x;
    }
    get y() {
        return this._y;
    }
    get magnitude() {
        return this._magnitude;
    }

    public static of(x: number, y: number): Vector {
        return new Vector(x, y);
    }

    public static from(initialPoint: Point, terminalPoint: Point): Vector {
        return new Vector(terminalPoint.x - initialPoint.x, terminalPoint.y - initialPoint.y);
    }

    public dotProduct(vector: Vector) {
        return this.x * vector.x + this.y * vector.y;
    }

    public unit(): Vector {
        return new Vector(this.x / this._magnitude, this.y / this._magnitude);
    }

    public perpendicular(rotationDirection: RotationDirection = RotationDirection.COUNTERCLOCKWISE): Vector {
        return RotationDirection.COUNTERCLOCKWISE === rotationDirection ?
            new Vector(-1 * this.y, this.x):
            new Vector(this.y, -1 * this.x);
    }

    public opposite(): Vector {
        return new Vector(-this.x, -this.y);
    }

    public clone(): Vector {
        return new Vector(this.x, this.y);
    }

    public scale(scalar: number): void {
        this._x *= scalar;
        this._y *= scalar;
        this._magnitude = Math.hypot(this.x, this.y);
    }

    public rotate(angle: number): void {
        const sine = Math.sin(angle);
        const cosine = Math.cos(angle);
        const newX = this.x * cosine - this.y * sine;
        const newY = this.x * sine + this.y * cosine;
        this._x = newX;
        this._y = newY;
    }
};