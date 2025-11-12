import { PathBuilder } from "./svg-utils/path";
import { Point } from "./svg-utils/svg";

self.onmessage = function(e) {
    const thickness = 80;
    const innerSpacing = 100;
    const cornerCurveSize = 25;
    
    const upperArmLength = 315;
    const lowerArmLength = 220;
    const interArmGap = 85;
    const bottomDropLength = 220;
    const loopWidth = 235;

    const origin: Point = Point.of(
        loopWidth + 5 * innerSpacing / 2 + 3 * thickness + cornerCurveSize,
        interArmGap + 2 * innerSpacing + 3 * thickness
    );
    
    const pathBuilder = PathBuilder.m(origin)
        .cSmoothConnector(Point.of(-cornerCurveSize, cornerCurveSize), Math.PI, -Math.PI / 2, 1 / Math.SQRT2)
        .l(Point.of(0, bottomDropLength - cornerCurveSize))
        .cForCircularArc(Math.PI / 2, Point.of(-(thickness + innerSpacing / 2), (thickness + innerSpacing / 2)))
        .cForCircularArc(Math.PI / 2, Point.of(-(thickness + innerSpacing / 2), -(thickness + innerSpacing / 2)))
        .l(Point.of(0, -(bottomDropLength + thickness + interArmGap - cornerCurveSize)))
        .cSmoothConnector(Point.of(-cornerCurveSize, -cornerCurveSize), -Math.PI / 2, 0, 1 / Math.SQRT2)
        .l(Point.of(-(loopWidth - cornerCurveSize), 0))
        .cForCircularArc(Math.PI / 2, Point.of(-(thickness + innerSpacing / 2), -(thickness + innerSpacing / 2)))
        .cForCircularArc(Math.PI / 2, Point.of(thickness + innerSpacing / 2, -(thickness + innerSpacing / 2)))
        .l(Point.of(loopWidth - (50 - 10), 0))
        .cSmoothConnector(Point.of(50 - 10 + thickness, innerSpacing - cornerCurveSize + thickness - 10), undefined, -Math.PI / 2, 1/2, 1/Math.sqrt(6))
        .l(Point.of(0, 10))
        .cSmoothConnector(Point.of(cornerCurveSize, cornerCurveSize), Math.PI / 2, Math.PI, 1 / Math.SQRT2)
        .l(Point.of(upperArmLength - cornerCurveSize, 0));
    
    const initialAngle = Math.PI / 4;
    const rotation = 3 * Math.PI / 8;
    const endcapCircleRadius = thickness + 2;
    pathBuilder.cSmoothConnector(
        Point.of(
            thickness * 7 / 16,
            -thickness * 9 / 40
        ), 0, 3 * initialAngle, 1/3
    );
    pathBuilder.cForCircularArc(
        Point.of(
            endcapCircleRadius * Math.cos(initialAngle + 0 * rotation),
            endcapCircleRadius * Math.sin(initialAngle + 0 * rotation)
        ),
        rotation
    );
    pathBuilder.cForCircularArc(
        Point.of(
            endcapCircleRadius * Math.cos(initialAngle + 1 * rotation),
            endcapCircleRadius * Math.sin(initialAngle + 1 * rotation)
        ),
        rotation
    );
    pathBuilder.cForCircularArc(
        Point.of(
            endcapCircleRadius * Math.cos(initialAngle + 2 * rotation),
            endcapCircleRadius * Math.sin(initialAngle + 2 * rotation)
        ),
        rotation
    );
    pathBuilder.cForCircularArc(
        Point.of(
            endcapCircleRadius * Math.cos(initialAngle + 3 * rotation),
            endcapCircleRadius * Math.sin(initialAngle + 3 * rotation)
        ),
        rotation
    );
    pathBuilder.cSmoothConnector(
        Point.of(
            -thickness * 7 / 16,
            thickness + (thickness * 9 / 40) - endcapCircleRadius * 2 * Math.sin(Math.PI / 4)
        ), undefined, 0, 1/3
    );

    pathBuilder.l(Point.of(-(upperArmLength - cornerCurveSize), 0))
        .cSmoothConnector(Point.of(-cornerCurveSize, cornerCurveSize), Math.PI, -Math.PI / 2, 1 / Math.SQRT2)
        .l(Point.of(0, bottomDropLength + thickness + interArmGap - cornerCurveSize))
        .cForCircularArc(-Math.PI / 2, Point.of(innerSpacing / 2, innerSpacing / 2))
        .cForCircularArc(-Math.PI / 2, Point.of(innerSpacing / 2, -innerSpacing / 2))
        .l(Point.of(0, -(bottomDropLength + thickness / 2)))
        .cForCircularArc(Math.PI / 2, Point.of(thickness / 2, -thickness / 2))
        .l(Point.of(lowerArmLength, 0))
        .cForCircularArc(Math.PI / 2, Point.of(thickness / 2, thickness / 2))
        .cForCircularArc(Math.PI / 2, Point.of(-thickness / 2, thickness / 2))
        .z()
        .m(Point.of(-(innerSpacing + 2 * cornerCurveSize + 2 * thickness), -(2 * thickness + interArmGap)))
        .cSmoothConnector(Point.of(cornerCurveSize, -cornerCurveSize), 0, Math.PI / 2, 1 / Math.SQRT2)
        .cSmoothConnector(Point.of(-50, -(innerSpacing - cornerCurveSize)), undefined, 0, 1/Math.sqrt(6), 1/2)
        .l(Point.of(-(loopWidth - 50), 0))
        .cForCircularArc(-Math.PI / 2, Point.of(-innerSpacing / 2, innerSpacing / 2))
        .cForCircularArc(-Math.PI / 2, Point.of(innerSpacing / 2, innerSpacing / 2))
        .z();
    
    postMessage(pathBuilder.toString());
};
