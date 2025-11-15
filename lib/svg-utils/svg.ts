export class Point {
    constructor(readonly x: number, readonly y: number) {
    }

    public static of(x: number, y: number): Point {
        return new Point(x, y);
    }

    public add(vector: Vector): Point {
        return new Point(this.x + vector.x, this.y + vector.y);
    }

    public toVector(): Vector {
        return new Vector(this.x, this.y);
    }
}

export enum RotationDirection {
    CLOCKWISE, COUNTERCLOCKWISE
};

export class Vector {
    private _magnitude: number;

    static readonly NULL_VECTOR = new Vector(0, 0);

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
    get slope() {
        return this._y / this._x;
    }

    public static of(x: number, y: number): Vector {
        return new Vector(x, y);
    }

    public static ofAngle(angle: number): Vector {
        return new Vector(Math.cos(angle), Math.sin(angle));
    }

    public static from(initialPoint: Point, terminalPoint: Point): Vector {
        return new Vector(terminalPoint.x - initialPoint.x, terminalPoint.y - initialPoint.y);
    }

    public add(vector: Vector) {
        return new Vector(this.x + vector.x, this.y + vector.y);
    }

    public subtract(vector: Vector) {
        return new Vector(this.x - vector.x, this.y - vector.y);
    }

    public multiply(scalar: number) {
        return new Vector(this.x * scalar, this.y * scalar);
    }

    public dotProduct(vector: Vector) {
        return this.x * vector.x + this.y * vector.y;
    }

    public crossProduct(vector: Vector): number {
        return this.x * vector.y - this.y * vector.x;
    }    

    public unit(): Vector {
        if (this._magnitude === 0)
            return Vector.NULL_VECTOR;
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

    public toPoint(): Point {
        return new Point(this.x, this.y);
    }
};