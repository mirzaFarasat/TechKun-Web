import { Point, RotationDirection, Vector } from "./svg";

export class CubicBezierCurve {
    constructor(
        readonly startingPoint: Point,
        readonly firstControlPoint: Point,
        readonly secondControlPoint: Point,
        readonly endingPoint: Point
    ) { }
};

function midPoint(pointA: Point, pointB: Point) {
    return Point.of((pointA.x + pointB.x) / 2, (pointA.y + pointB.y) / 2);
};

function getScalarFactor(angle: number) {
    return (4.0 / 3.0) * Math.tan(angle / 4);
};

export function cubicBezierCurveForCircularArc(startingPoint: Point, angle: number, endingPoint: Point): CubicBezierCurve;
export function cubicBezierCurveForCircularArc(center: Point, startingPoint: Point, angle: number): CubicBezierCurve;

export function cubicBezierCurveForCircularArc(...args:
    [startingPoint: Point, angle: number, endingPoint: Point] |
    [center: Point, startingPoint: Point, angle: number]
) {
    if (typeof args[1] === 'number' && args[2] instanceof Point) {
        return cubicBezierCurveForCircularArcFromAngle(args[0], args[1], args[2]);
    } else if (args[1] instanceof Point && typeof args[2] === "number") {
        return cubicBezierCurveForCircularArcFromCenterAndAngle(args[0], args[1], args[2]);
    }
};

function cubicBezierCurveForCircularArcFromAngle(startingPoint: Point, angle: number, endingPoint: Point) {
    const chordVector = Vector.from(startingPoint, endingPoint);
    const radius = chordVector.magnitude * Math.cos(angle / 2) / Math.sin(angle);
    const midpoint = midPoint(startingPoint, endingPoint);

    let midpointToCenter = Math.sqrt(Math.pow(radius, 2) - Math.pow(chordVector.magnitude / 2.0, 2));
    if (angle < 0)
        midpointToCenter = -midpointToCenter;

    const normalToChord = chordVector.unit().perpendicular();
    normalToChord.scale(midpointToCenter);
    const center = midpoint.add(normalToChord);

    const v0 = Vector.from(center, startingPoint);
    const v1 = Vector.from(center, endingPoint);
    const scalarFactor = getScalarFactor(angle);
    v0.scale(scalarFactor);
    v1.scale(scalarFactor);

    return new CubicBezierCurve(
        startingPoint, startingPoint.add(v0.perpendicular()),
        endingPoint.add(v1.perpendicular(RotationDirection.CLOCKWISE)), endingPoint
    );
};

function cubicBezierCurveForCircularArcFromCenterAndAngle(center: Point, startingPoint: Point, angle: number) {
    const v0 = Vector.from(center, startingPoint);
    const v1 = v0.clone();
    v1.rotate(angle);
    const endingPoint = center.add(v1);
    const scalarFactor = getScalarFactor(angle);
    v0.scale(scalarFactor);
    v1.scale(scalarFactor);

    return new CubicBezierCurve(
        startingPoint, startingPoint.add(v0.perpendicular()),
        endingPoint.add(v1.perpendicular(RotationDirection.CLOCKWISE)), endingPoint
    );
};

export function cubicBezierCurveForEllipticalArc(
    center: Point, startingPoint: Point, centralAngle: number, ratio: number, phi: number
) {
    const startVec = Vector.from(center, startingPoint);
    startVec.rotate(-phi);

    const endDirection = startVec.clone();
    endDirection.rotate(centralAngle);

    // (x/a)^2 + (y/b)^2 = 1
    // → (x/(ratio*b))^2 + (y/b)^2 = 1
    // → b = √((x/ratio)^2 + y^2)
    const b = Math.hypot(startVec.x / ratio, startVec.y);
    const a = ratio * b;

    const startParametricAngle = Math.atan2(startVec.y / b, startVec.x / a);
    const endParametricAngle = Math.atan2(endDirection.y / b, endDirection.x / a);

    const endVec = Vector.of(a * Math.cos(endParametricAngle), b * Math.sin(endParametricAngle));
    endVec.rotate(phi);
    const endingPoint = center.add(endVec);

    // local derivatives
    const startDerivative = Vector.of(-a * Math.sin(startParametricAngle),  b * Math.cos(startParametricAngle));
    const endDerivative = Vector.of(-a * Math.sin(endParametricAngle),  b * Math.cos(endParametricAngle));

    const parametricAngleDiff = endParametricAngle - startParametricAngle;
    startDerivative.scale(parametricAngleDiff / 3.0);
    endDerivative.scale(parametricAngleDiff / 3.0);

    startDerivative.rotate(phi);
    endDerivative.rotate(phi);

    return new CubicBezierCurve(
        startingPoint, startingPoint.add(startDerivative),
        endingPoint.add(endDerivative.opposite()), endingPoint
    );
}

export function cubicBezierBetween(
    startingPoint: Point,
    endingPoint: Point,
    startDirection?: Vector,  // tangent vector out of the starting point
    endDirection?: Vector,  // tangent vector into the ending point
    tensionA = 1 / 3,  // fraction of chord length for handle distance
    tensionB = tensionA
): CubicBezierCurve {
    const chord = Vector.from(startingPoint, endingPoint);
    const chordLen = chord.magnitude;
    if (chordLen < 1e-9)
        return new CubicBezierCurve(
            startingPoint, startingPoint, startingPoint, startingPoint
        ); // degenerate

    let p1: Point;
    let p2: Point;

    // handle start
    if (startDirection) {
        startDirection.scale(chordLen * tensionA);
        p1 = startingPoint.add(startDirection);
    } else {
        const chordClone = chord.clone();
        chordClone.scale(tensionA);
        p1 = startingPoint.add(chordClone);
    }

    // handle end
    if (endDirection) {
        endDirection.scale(chordLen * tensionB);
        p2 = endingPoint.add(endDirection);
    } else {
        const chordClone = chord.opposite();
        chordClone.scale(tensionB);
        p2 = endingPoint.add(chordClone);
    }

    return new CubicBezierCurve(
        startingPoint, p1,
        p2, endingPoint
    );
};
