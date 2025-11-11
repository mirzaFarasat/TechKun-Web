import { cubicBezierBetween, cubicBezierCurveForCircularArc, cubicBezierCurveForEllipticalArc } from "./cubic-bezier-curve";
import { round } from "./math";
import { Point, Vector } from "./svg";

export abstract class Command {
    // constructor(readonly previous: Command | null) {}

    public abstract toString(): string;
};

export class MoveCommand extends Command {
    constructor(readonly point: Point) {
        super();
        // super(previous);
    }

    public toString() {
        return `m ${this.point.x} ${this.point.y}`;
    }
};

export class LineCommand extends Command {
    constructor(readonly endPoint: Point) {
        super();
        // super(previous);
    }

    public toString() {
        return `l ${this.endPoint.x} ${this.endPoint.y}`;
    }
};

export class QuadraticBezierCurveCommand extends Command {
    constructor(readonly controlPoint: Point, readonly endPoint: Point) {
        super();
        // super(previous);
    }

    public toString() {
        return `q ${this.controlPoint.x} ${this.controlPoint.y} ${this.endPoint.x} ${this.endPoint.y}`;
    }
};

export class CubicBezierCurveCommand extends Command {
    constructor(
        readonly firstControlPoint: Point,
        readonly secondControlPoint: Point,
        readonly endPoint: Point
    ) {
        super();
        // super(previous);
    }

    public toString() {
        return `c ${this.firstControlPoint.x} ${this.firstControlPoint.y} ${this.secondControlPoint.x} ${this.secondControlPoint.y} ${this.endPoint.x} ${this.endPoint.y}`;
    }
};

export class EllipticalArcCommand extends Command {
    constructor(
        readonly xRadius: number,
        readonly yRadius: number,
        readonly xAxisRotation: number,
        readonly largeArcFlag: 0 | 1,
        readonly sweepFlag: 0 | 1,
        readonly endPoint: Point
    ) {
        super();
        // super(previous);
    }

    public toString() {
        return `a ${this.xRadius} ${this.yRadius} ${this.xAxisRotation} ${this.largeArcFlag} ${this.sweepFlag} ${this.endPoint.x} ${this.endPoint.y}`
    }
};

export class ClosePathCommand extends Command {
    constructor() {
        super();
        // super(previous);
    }

    public toString() {
        return `z`;
    }
};

export class Path {
    constructor(readonly commands: Command[]) {}

    public toString() {
        return this.commands.map(c => c.toString()).join(' ');
    }
};

export class PathBuilder {
    private commands: Command[] = [];
    private constructor(point: Point) {
        this.m(point);
    }

    public static m(point: Point) {
        return new PathBuilder(point);
    }

    private lastCommand() {
        return this.commands.length === 0 ?
            null : this.commands[this.commands.length - 1];
    }

    public m(point: Point) {
        this.commands.push(new MoveCommand(point));
        return this;
    }

    public l(point: Point) {
        this.commands.push(new LineCommand(point));
        return this;
    }

    public q(controlPoint: Point, endPoint: Point) {
        this.commands.push(new QuadraticBezierCurveCommand(controlPoint, endPoint));
        return this;
    }

    public c(firstControlPoint: Point, secondControlPoint: Point, endPoint: Point) {
        this.commands.push(new CubicBezierCurveCommand(firstControlPoint, secondControlPoint, endPoint));
        return this;
    }

    public cForCircularArc(angle: number, endingPoint: Point): PathBuilder;
    public cForCircularArc(center: Point, angle: number): PathBuilder;

    public cForCircularArc(
        ...args: [angle: number, endingPoint: Point] |
            [center: Point, angle: number]
    ) {
        const startingPoint = Point.of(0, 0);
        let cubicBezierCurve;
        if (typeof args[0] === "number" && args[1] instanceof Point)
            cubicBezierCurve = cubicBezierCurveForCircularArc(startingPoint, args[0], args[1]);
        else if (args[0] instanceof Point && typeof args[1] === "number")
            cubicBezierCurve = cubicBezierCurveForCircularArc(args[0], startingPoint, args[1]);
        else
            throw new Error("Invalid Arguments");

        const { firstControlPoint, secondControlPoint, endingPoint } = cubicBezierCurve;
        this.commands.push(new CubicBezierCurveCommand(
            Point.of(round(firstControlPoint.x, 4), round(firstControlPoint.y, 4)),
            Point.of(round(secondControlPoint.x, 4), round(secondControlPoint.y, 4)),
            endingPoint
        ));
        return this;
    }

    public cForEllipticalArc(
        center: Point, angle: number, axisRatio: number, ellipseRotation: number = 0
    ) {
        const cubicBezierCurve = cubicBezierCurveForEllipticalArc(center, Point.of(0, 0), angle, axisRatio, ellipseRotation);
        const { firstControlPoint, secondControlPoint, endingPoint } = cubicBezierCurve;
        this.commands.push(new CubicBezierCurveCommand(
            Point.of(round(firstControlPoint.x, 4), round(firstControlPoint.y, 4)),
            Point.of(round(secondControlPoint.x, 4), round(secondControlPoint.y, 4)),
            endingPoint
        ));
        return this;
    }

    public cSmoothConnector(
        endingPoint: Point,
        startAngle?: number, endAngle?: number,
        curvatureA: number = 1/3,
        curvatureB: number = curvatureA
    ) {
        let startDirection: Vector | null = null;
        if (startAngle !== undefined) {
            startDirection = Vector.of(Math.cos(startAngle), Math.sin(startAngle))
        } else {
            const lastCommand = this.lastCommand();
            if (lastCommand instanceof LineCommand) {
                startDirection = Vector.from(Point.of(0, 0), lastCommand.endPoint).unit();
            } else if (lastCommand instanceof CubicBezierCurveCommand) {
                startDirection = Vector.from(lastCommand.secondControlPoint, lastCommand.endPoint).unit();
            } else if (lastCommand instanceof QuadraticBezierCurveCommand) {
                startDirection = Vector.from(lastCommand.controlPoint, lastCommand.endPoint).unit();
            }
        }
        let endDirection: Vector | null = null;
        if (endAngle !== undefined) {
            endDirection = Vector.of(Math.cos(endAngle), Math.sin(endAngle));
        }
        const { firstControlPoint, secondControlPoint } = cubicBezierBetween(
            Point.of(0, 0), endingPoint,
            startDirection ?? undefined, endDirection ?? undefined,
            curvatureA, curvatureB
        );
        this.commands.push(new CubicBezierCurveCommand(
            Point.of(round(firstControlPoint.x, 4), round(firstControlPoint.y, 4)),
            Point.of(round(secondControlPoint.x, 4), round(secondControlPoint.y, 4)),
            endingPoint
        ));
        return this;
    }

    public a(
        xRadius: number,
        yRadius: number,
        xAxisRotation: number,
        largeArcFlag: 0 | 1,
        sweepFlag: 0 | 1,
        endPoint: Point
    ) {
        this.commands.push(new EllipticalArcCommand(xRadius, yRadius, xAxisRotation, largeArcFlag, sweepFlag, endPoint));
        return this;
    }

    public z() {
        this.commands.push(new ClosePathCommand());
        return this;
    }

    public toPath() {
        return new Path(this.commands);
    }

    public toString() {
        return this.toPath().toString();
    }
};