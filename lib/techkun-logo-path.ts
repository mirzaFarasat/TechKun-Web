import { PathBuilder } from "./svg-utils/path";
import { Point } from "./svg-utils/svg";

self.onmessage = function(e) {
    const thickness = 80;
    const breathingRoom = 100;
    const cornerCurveRoom = 25;
    
    const startHandLength = 220;
    const tailLength = 220;
    const spiralLength = 235;
    const shaftLength = 315;
    const gapBwStartHandAndShaft = 85;
    
    const origin: Point = Point.of(spiralLength + 5 * breathingRoom / 2 + 3 * thickness + cornerCurveRoom, gapBwStartHandAndShaft + 2 * breathingRoom + 3 * thickness);
    
    const pathBuilder = PathBuilder.m(origin)
        .cSmoothConnector(Point.of(-cornerCurveRoom, cornerCurveRoom), Math.PI, -Math.PI / 2, 1 / Math.SQRT2)
        .l(Point.of(0, tailLength - cornerCurveRoom))
        .cForCircularArc(Math.PI / 2, Point.of(-(thickness + breathingRoom / 2), (thickness + breathingRoom / 2)))
        .cForCircularArc(Math.PI / 2, Point.of(-(thickness + breathingRoom / 2), -(thickness + breathingRoom / 2)))
        .l(Point.of(0, -(tailLength + thickness + gapBwStartHandAndShaft - cornerCurveRoom)))
        .cSmoothConnector(Point.of(-cornerCurveRoom, -cornerCurveRoom), -Math.PI / 2, 0, 1 / Math.SQRT2)
        .l(Point.of(-(spiralLength - cornerCurveRoom), 0))
        .cForCircularArc(Math.PI / 2, Point.of(-(thickness + breathingRoom / 2), -(thickness + breathingRoom / 2)))
        .cForCircularArc(Math.PI / 2, Point.of(thickness + breathingRoom / 2, -(thickness + breathingRoom / 2)))
        .l(Point.of(spiralLength - (50 - 10), 0))
        .cSmoothConnector(Point.of(50 - 10 + thickness, breathingRoom - cornerCurveRoom + thickness - 10), undefined, -Math.PI / 2, 1/2, 1/Math.sqrt(6))
        .l(Point.of(0, 10))
        .cSmoothConnector(Point.of(cornerCurveRoom, cornerCurveRoom), Math.PI / 2, Math.PI, 1 / Math.SQRT2)
        .l(Point.of(shaftLength - cornerCurveRoom, 0));
    
    const initialAngle = Math.PI / 4;
    const rotation = 3 * Math.PI / 8;
    const radius = thickness + 2;
    pathBuilder.cSmoothConnector(Point.of(thickness * 7 / 16, -thickness * 9 / 40), undefined, 3 * initialAngle, 1/3);
    pathBuilder.cForCircularArc(
        Point.of(
            radius * Math.cos(initialAngle + 0 * rotation),
            radius * Math.sin(initialAngle + 0 * rotation)
        ),
        rotation
    );
    pathBuilder.cForCircularArc(
        Point.of(
            radius * Math.cos(initialAngle + 1 * rotation),
            radius * Math.sin(initialAngle + 1 * rotation)
        ),
        rotation
    );
    pathBuilder.cForCircularArc(
        Point.of(
            radius * Math.cos(initialAngle + 2 * rotation),
            radius * Math.sin(initialAngle + 2 * rotation)
        ),
        rotation
    );
    pathBuilder.cForCircularArc(
        Point.of(
            radius * Math.cos(initialAngle + 3 * rotation),
            radius * Math.sin(initialAngle + 3 * rotation)
        ),
        rotation
    );
    pathBuilder.cSmoothConnector(
        Point.of(-(thickness * 7 / 16), thickness + (thickness * 9 / 40) - radius * 2 * Math.sin(Math.PI / 4)), undefined, 0, 1/3
    );
    
    pathBuilder.l(Point.of(-(shaftLength - cornerCurveRoom), 0))
        .cSmoothConnector(Point.of(-cornerCurveRoom, cornerCurveRoom), Math.PI, -Math.PI / 2, 1 / Math.SQRT2)
        .l(Point.of(0, tailLength + thickness + gapBwStartHandAndShaft - cornerCurveRoom))
        .cForCircularArc(-Math.PI / 2, Point.of(breathingRoom / 2, breathingRoom / 2))
        .cForCircularArc(-Math.PI / 2, Point.of(breathingRoom / 2, -breathingRoom / 2))
        .l(Point.of(0, -(tailLength + (thickness / 2))))
        .cForCircularArc(Math.PI / 2, Point.of((thickness / 2), -(thickness / 2)))
        .l(Point.of(startHandLength, 0))
        .cForCircularArc(Math.PI / 2, Point.of((thickness / 2), (thickness / 2)))
        .cForCircularArc(Math.PI / 2, Point.of(-(thickness / 2), (thickness / 2)))
        .z()
        .m(Point.of(-(breathingRoom + 2 * cornerCurveRoom + 2 * thickness), -(2 * thickness + gapBwStartHandAndShaft)))
        .cSmoothConnector(Point.of(cornerCurveRoom, -cornerCurveRoom), 0, Math.PI / 2, 1 / Math.SQRT2)
        .cSmoothConnector(Point.of(-50, -(breathingRoom - cornerCurveRoom)), undefined, 0, 1/Math.sqrt(6), 1/2)
        .l(Point.of(-(spiralLength - 50), 0))
        .cForCircularArc(-Math.PI / 2, Point.of(-breathingRoom / 2, breathingRoom / 2))
        .cForCircularArc(-Math.PI / 2, Point.of(breathingRoom / 2, breathingRoom / 2))
        .z();
    
    postMessage(pathBuilder.toString());
};
