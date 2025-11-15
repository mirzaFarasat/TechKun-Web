import { cubicBezierBetween, cubicBezierCurveForCircularArc, cubicBezierCurveForEllipticalArc } from "./cubic-bezier-curve";
import { round } from "./math";
import { Point, Vector } from "./svg";

export abstract class Command {
    constructor(readonly mode: 'relative' | 'absolute' = 'relative') {}

    public abstract toString(): string;
    public abstract getEndPoint(): Point;
};

export class MoveCommand extends Command {
    constructor(readonly startingPoint: Point, readonly endPoint: Vector, mode: 'relative' | 'absolute' = 'relative') {
        super(mode);
    }

    public toString() {
        const cmd = this.mode === 'relative' ? 'm' : 'M';
        const point = this.mode === 'relative' ? this.endPoint : this.startingPoint.add(this.endPoint);
        return `${cmd} ${point.x} ${point.y}`;
    }

    public getEndPoint(): Point {
        return this.startingPoint.add(this.endPoint);
    }
};

export class LineCommand extends Command {
    constructor(readonly startingPoint: Point, readonly endPoint: Vector, mode: 'relative' | 'absolute' = 'relative') {
        super(mode);
    }

    public toString() {
        const cmd = this.mode === 'relative' ? 'l' : 'L';
        const end = this.mode === 'relative' ? this.endPoint : this.startingPoint.add(this.endPoint);
        return `${cmd} ${end.x} ${end.y}`;
    }

    public getEndPoint(): Point {
        return this.startingPoint.add(this.endPoint);
    }
};

export class QuadraticBezierCurveCommand extends Command {
    constructor(
        readonly startingPoint: Point,
        readonly controlPoint: Vector,
        readonly endPoint: Vector,
        mode: 'relative' | 'absolute' = 'relative'
    ) {
        super(mode);
    }

    public toString() {
        const cmd = this.mode === 'relative' ? 'q' : 'Q';
        const cp = this.mode === 'relative' ? this.controlPoint : this.startingPoint.add(this.controlPoint);
        const ep = this.mode === 'relative' ? this.endPoint : this.startingPoint.add(this.endPoint);
        return `${cmd} ${cp.x} ${cp.y} ${ep.x} ${ep.y}`;
    }

    public getEndPoint(): Point {
        return this.startingPoint.add(this.endPoint);
    }
};

export class CubicBezierCurveCommand extends Command {
    constructor(
        readonly startingPoint: Point,
        readonly firstControlPoint: Vector,
        readonly secondControlPoint: Vector,
        readonly endPoint: Vector,
        mode: 'relative' | 'absolute' = 'relative'
    ) {
        super(mode);
    }

    public toString() {
        const cmd = this.mode === 'relative' ? 'c' : 'C';
        const cp1 = this.mode === 'relative' ? this.firstControlPoint : this.startingPoint.add(this.firstControlPoint);
        const cp2 = this.mode === 'relative' ? this.secondControlPoint : this.startingPoint.add(this.secondControlPoint);
        const ep = this.mode === 'relative' ? this.endPoint : this.startingPoint.add(this.endPoint);
        return `${cmd} ${cp1.x} ${cp1.y} ${cp2.x} ${cp2.y} ${ep.x} ${ep.y}`;
    }

    public getEndPoint(): Point {
        return this.startingPoint.add(this.endPoint);
    }
};

export class EllipticalArcCommand extends Command {
    constructor(
        readonly startingPoint: Point,
        readonly xRadius: number,
        readonly yRadius: number,
        readonly xAxisRotation: number,
        readonly largeArcFlag: 0 | 1,
        readonly sweepFlag: 0 | 1,
        readonly endPoint: Vector,
        mode: 'relative' | 'absolute' = 'relative'
    ) {
        super(mode);
    }

    public toString() {
        const cmd = this.mode === 'relative' ? 'a' : 'A';
        const ep = this.mode === 'relative' ? this.endPoint : this.startingPoint.add(this.endPoint);
        return `${cmd} ${this.xRadius} ${this.yRadius} ${this.xAxisRotation} ${this.largeArcFlag} ${this.sweepFlag} ${ep.x} ${ep.y}`;
    }

    public getEndPoint(): Point {
        return this.startingPoint.add(this.endPoint);
    }
};

export class ClosePathCommand extends Command {
    constructor(
        readonly pathStart: MoveCommand,
        mode: 'relative' | 'absolute' = 'relative'
    ) {
        super(mode);
    }

    public toString() {
        return `z`;
    }

    public getEndPoint(): Point {
        return this.pathStart.startingPoint;
    }
};

export class Path {
    constructor(readonly commands: Command[]) { }

    public toString() {
        return this.commands.map(c => c.toString()).join(' ');
    }
};

export class PathBuilder {
    private commands: Command[] = [];
    private openPathStack: MoveCommand[] = [];

    get currentPosition() {
        return this.lastCommand()?.getEndPoint() ?? Point.of(0, 0);
    }

    private constructor(point: Vector | Point) {
        if (point instanceof Vector)
            this.m(point);
        else
            this.M(point);
    }

    public static m(point: Vector) {
        return new PathBuilder(point);
    }

    public static M(point: Point) {
        return new PathBuilder(point);
    }

    private lastCommand(): Command | null {
        return this.commands.length === 0 ?
            null : this.commands[this.commands.length - 1];
    }

    // Relative move
    public m(point: Vector) {
        const startingPoint = this.currentPosition;
        const moveCommand = new MoveCommand(startingPoint, point, 'relative');
        this.commands.push(moveCommand);
        this.openPathStack.push(moveCommand);
        return this;
    }

    // Absolute move
    public M(point: Point) {
        const startingPoint = this.currentPosition;
        const endPointVector = Vector.from(startingPoint, point);
        const moveCommand = new MoveCommand(startingPoint, endPointVector, 'absolute');
        this.commands.push(moveCommand);
        this.openPathStack.push(moveCommand);
        return this;
    }

    // Relative line
    public l(point: Vector) {
        const startingPoint = this.currentPosition;
        this.commands.push(new LineCommand(startingPoint, point, 'relative'));
        return this;
    }

    // Absolute line
    public L(point: Point) {
        const startingPoint = this.currentPosition;
        const endPointVector = Vector.from(startingPoint, point);
        this.commands.push(new LineCommand(startingPoint, endPointVector, 'absolute'));
        return this;
    }

    // Relative quadratic Bézier curve
    public q(controlPoint: Vector, endPoint: Vector) {
        const startingPoint = this.currentPosition;
        this.commands.push(new QuadraticBezierCurveCommand(startingPoint, controlPoint, endPoint, 'relative'));
        return this;
    }

    // Absolute quadratic Bézier curve
    public Q(controlPoint: Point, endPoint: Point) {
        const startingPoint = this.currentPosition;
        const controlPointVector = Vector.from(startingPoint, controlPoint);
        const endPointVector = Vector.from(startingPoint, endPoint);
        this.commands.push(new QuadraticBezierCurveCommand(startingPoint, controlPointVector, endPointVector, 'absolute'));
        return this;
    }

    // Relative cubic Bézier curve
    public c(firstControlPoint: Vector, secondControlPoint: Vector, endPoint: Vector) {
        const startingPoint = this.currentPosition;
        this.commands.push(new CubicBezierCurveCommand(startingPoint, firstControlPoint, secondControlPoint, endPoint, 'relative'));
        return this;
    }

    // Absolute cubic Bézier curve
    public C(firstControlPoint: Point, secondControlPoint: Point, endPoint: Point) {
        const startingPoint = this.currentPosition;
        const firstControlPointVector = Vector.from(startingPoint, firstControlPoint);
        const secondControlPointVector = Vector.from(startingPoint, secondControlPoint);
        const endPointVector = Vector.from(startingPoint, endPoint);
        this.commands.push(new CubicBezierCurveCommand(startingPoint, firstControlPointVector, secondControlPointVector, endPointVector, 'absolute'));
        return this;
    }

    // Relative elliptical arc (lowercase)
    public a(
        xRadius: number,
        yRadius: number,
        xAxisRotation: number,
        largeArcFlag: 0 | 1,
        sweepFlag: 0 | 1,
        endPoint: Vector
    ) {
        const startingPoint = this.currentPosition;
        this.commands.push(new EllipticalArcCommand(startingPoint, xRadius, yRadius, xAxisRotation, largeArcFlag, sweepFlag, endPoint, 'relative'));
        return this;
    }

    // Absolute elliptical arc (uppercase)
    public A(
        xRadius: number,
        yRadius: number,
        xAxisRotation: number,
        largeArcFlag: 0 | 1,
        sweepFlag: 0 | 1,
        endPoint: Point
    ) {
        const startingPoint = this.currentPosition;
        const endPointVector = Vector.from(startingPoint, endPoint);
        this.commands.push(new EllipticalArcCommand(startingPoint, xRadius, yRadius, xAxisRotation, largeArcFlag, sweepFlag, endPointVector, 'absolute'));
        return this;
    }

    // Relative arc by cubic Bézier
    public cForCircularArc(angle: number, endingPoint: Vector): PathBuilder;
    public cForCircularArc(center: Vector, angle: number): PathBuilder;

    public cForCircularArc(
        ...args: [angle: number, endingPoint: Vector] |
        [center: Vector, angle: number]
    ) {
        const startingPoint = this.currentPosition;
        let cubicBezierCurve;
        if (typeof args[0] === "number" && args[1] instanceof Vector) {
            const absoluteEndPoint = startingPoint.add(args[1]);
            cubicBezierCurve = cubicBezierCurveForCircularArc(startingPoint, args[0], absoluteEndPoint);
        } else if (args[0] instanceof Vector && typeof args[1] === "number") {
            const absoluteCenter = startingPoint.add(args[0]);
            cubicBezierCurve = cubicBezierCurveForCircularArc(absoluteCenter, startingPoint, args[1]);
        } else {
            throw new Error("Invalid Arguments");
        }

        const { firstControlPoint, secondControlPoint, endingPoint } = cubicBezierCurve;
        const firstControlPointVector = Vector.from(startingPoint, firstControlPoint);
        const secondControlPointVector = Vector.from(startingPoint, secondControlPoint);
        const endPointVector = Vector.from(startingPoint, endingPoint);
        this.commands.push(new CubicBezierCurveCommand(
            startingPoint,
            Vector.of(round(firstControlPointVector.x, 4), round(firstControlPointVector.y, 4)),
            Vector.of(round(secondControlPointVector.x, 4), round(secondControlPointVector.y, 4)),
            endPointVector,
            'relative'
        ));
        return this;
    }

    public cForEllipticalArc(
        center: Vector, angle: number, axisRatio: number, ellipseRotation: number = 0
    ) {
        const startingPoint = this.currentPosition;
        const absoluteCenter = startingPoint.add(center);
        const cubicBezierCurve = cubicBezierCurveForEllipticalArc(absoluteCenter, startingPoint, angle, axisRatio, ellipseRotation);
        const { firstControlPoint, secondControlPoint, endingPoint } = cubicBezierCurve;
        const firstControlPointVector = Vector.from(startingPoint, firstControlPoint);
        const secondControlPointVector = Vector.from(startingPoint, secondControlPoint);
        const endPointVector = Vector.from(startingPoint, endingPoint);
        this.commands.push(new CubicBezierCurveCommand(
            startingPoint,
            Vector.of(round(firstControlPointVector.x, 4), round(firstControlPointVector.y, 4)),
            Vector.of(round(secondControlPointVector.x, 4), round(secondControlPointVector.y, 4)),
            endPointVector,
            'relative'
        ));
        return this;
    }

    // Relative smooth cubic Bézier curve (with optional angles and curvatures)
    public cSmoothConnector(
        endingPoint: Vector,
        startAngle?: number, endAngle?: number,
        curvatureA: number = 1 / 3,
        curvatureB: number = curvatureA
    ) {
        const startingPoint = this.currentPosition;
        const absoluteEndPoint = startingPoint.add(endingPoint);

        let startDirection: Vector | null = null;
        if (startAngle !== undefined) {
            startDirection = Vector.of(Math.cos(startAngle), Math.sin(startAngle))
        } else {
            const lastCommand = this.lastCommand();
            if (lastCommand instanceof LineCommand) {
                startDirection = lastCommand.endPoint.unit();
            } else if (lastCommand instanceof CubicBezierCurveCommand) {
                const directionVector = lastCommand.endPoint.subtract(lastCommand.secondControlPoint);
                startDirection = directionVector.unit();
            } else if (lastCommand instanceof QuadraticBezierCurveCommand) {
                const directionVector = lastCommand.endPoint.subtract(lastCommand.controlPoint);
                startDirection = directionVector.unit();
            }
        }
        let endDirection: Vector | null = null;
        if (endAngle !== undefined) {
            endDirection = Vector.of(Math.cos(endAngle), Math.sin(endAngle));
        }
        const { firstControlPoint, secondControlPoint } = cubicBezierBetween(
            startingPoint, absoluteEndPoint,
            startDirection ?? undefined, endDirection ?? undefined,
            curvatureA, curvatureB
        );
        const firstControlPointVector = Vector.from(startingPoint, firstControlPoint);
        const secondControlPointVector = Vector.from(startingPoint, secondControlPoint);
        const endPointVector = Vector.from(startingPoint, absoluteEndPoint);
        this.commands.push(new CubicBezierCurveCommand(
            startingPoint,
            Vector.of(round(firstControlPointVector.x, 4), round(firstControlPointVector.y, 4)),
            Vector.of(round(secondControlPointVector.x, 4), round(secondControlPointVector.y, 4)),
            endPointVector,
            'relative'
        ));
        return this;
    }

    public CSmoothConnector(
        endingPoint: Point,
        startAngle?: number, endAngle?: number,
        curvatureA: number = 1 / 3,
        curvatureB: number = curvatureA
    ) {
        const startingPoint = this.currentPosition;

        let startDirection: Vector | null = null;
        if (startAngle !== undefined) {
            startDirection = Vector.of(Math.cos(startAngle), Math.sin(startAngle))
        } else {
            const lastCommand = this.lastCommand();
            if (lastCommand instanceof LineCommand) {
                startDirection = lastCommand.endPoint.unit();
            } else if (lastCommand instanceof CubicBezierCurveCommand) {
                const directionVector = lastCommand.endPoint.subtract(lastCommand.secondControlPoint);
                startDirection = directionVector.unit();
            } else if (lastCommand instanceof QuadraticBezierCurveCommand) {
                const directionVector = lastCommand.endPoint.subtract(lastCommand.controlPoint);
                startDirection = directionVector.unit();
            }
        }
        let endDirection: Vector | null = null;
        if (endAngle !== undefined) {
            endDirection = Vector.of(Math.cos(endAngle), Math.sin(endAngle));
        }
        const { firstControlPoint, secondControlPoint } = cubicBezierBetween(
            startingPoint, endingPoint,
            startDirection ?? undefined, endDirection ?? undefined,
            curvatureA, curvatureB
        );
        const firstControlPointVector = Vector.from(startingPoint, firstControlPoint);
        const secondControlPointVector = Vector.from(startingPoint, secondControlPoint);
        const endPointVector = Vector.from(startingPoint, endingPoint);
        this.commands.push(new CubicBezierCurveCommand(
            startingPoint,
            Vector.of(round(firstControlPointVector.x, 4), round(firstControlPointVector.y, 4)),
            Vector.of(round(secondControlPointVector.x, 4), round(secondControlPointVector.y, 4)),
            endPointVector,
            'absolute'
        ));
        return this;
    }

    public z() {
        this.commands.push(new ClosePathCommand(this.openPathStack.pop()!, 'relative'));
        return this;
    }

    public toPath() {
        return new Path(this.commands);
    }

    public toString() {
        return this.toPath().toString();
    }
};
