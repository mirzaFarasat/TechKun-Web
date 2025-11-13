import { PathBuilder } from "./svg-utils/path";
import { Vector } from "./svg-utils/svg";

interface PathProps {
    thickness: number;
    innerSpacing: number;
    cornerCurveSize: number;
    bottomDropLength: number;

    upperArmLength: number;
    lowerArmLength: number;
    interArmGap: number;
    loopWidth: number;
};

self.onmessage = function(e) {
    const thickness = 80;
    const innerSpacing = 100;
    const cornerCurveSize = 25;
    
    const upperArmLength = 315;
    const lowerArmLength = 220;
    const interArmGap = 85;
    const bottomDropLength = 220;
    const loopWidth = 235;
    
    postMessage([
        getPathWithoutEndcapCircle({
            thickness, innerSpacing,
            cornerCurveSize,
            upperArmLength: 0, lowerArmLength,
            interArmGap,
            bottomDropLength, loopWidth
        }),
        getPathWithoutEndcapCircle({
            thickness, innerSpacing,
            cornerCurveSize,
            upperArmLength, lowerArmLength,
            interArmGap,
            bottomDropLength, loopWidth
        }),
        getFullPathData({
            thickness, innerSpacing,
            cornerCurveSize,
            upperArmLength, lowerArmLength,
            interArmGap,
            bottomDropLength, loopWidth
        })
    ]);
};

function getFullPathData(props: PathProps) {
    const {
        thickness, innerSpacing,
        cornerCurveSize,
        upperArmLength, lowerArmLength,
        interArmGap,
        bottomDropLength, loopWidth
    } = props;

    const origin: Vector = Vector.of(
        loopWidth + 5 * innerSpacing / 2 + 3 * thickness + cornerCurveSize,
        interArmGap + 2 * innerSpacing + 3 * thickness
    );
    
    const pathBuilder = PathBuilder.m(origin)
        .cSmoothConnector(Vector.of(-cornerCurveSize, cornerCurveSize), Math.PI, -Math.PI / 2, 1 / Math.SQRT2)
        .l(Vector.of(0, bottomDropLength - cornerCurveSize))
        .cForCircularArc(Math.PI / 2, Vector.of(-(thickness + innerSpacing / 2), (thickness + innerSpacing / 2)))
        .cForCircularArc(Math.PI / 2, Vector.of(-(thickness + innerSpacing / 2), -(thickness + innerSpacing / 2)))
        .l(Vector.of(0, -(bottomDropLength + thickness + interArmGap - cornerCurveSize)))
        .cSmoothConnector(Vector.of(-cornerCurveSize, -cornerCurveSize), -Math.PI / 2, 0, 1 / Math.SQRT2)
        .l(Vector.of(-(loopWidth - cornerCurveSize), 0))
        .cForCircularArc(Math.PI / 2, Vector.of(-(thickness + innerSpacing / 2), -(thickness + innerSpacing / 2)))
        .cForCircularArc(Math.PI / 2, Vector.of(thickness + innerSpacing / 2, -(thickness + innerSpacing / 2)))
        .l(Vector.of(loopWidth - (50 - 10), 0))
        .cSmoothConnector(Vector.of(50 - 10 + thickness, innerSpacing - cornerCurveSize + thickness - 10), undefined, -Math.PI / 2, 1/2, 1/Math.sqrt(6))
        .l(Vector.of(0, 10))
        .cSmoothConnector(Vector.of(cornerCurveSize, cornerCurveSize), Math.PI / 2, Math.PI, 1 / Math.SQRT2)
        .l(Vector.of(upperArmLength - cornerCurveSize, 0));
    
    const initialAngle = -Math.PI / 4;
    const arcDivisions = 4;
    const rotation = 3 * Math.PI / 2 / arcDivisions;
    const endcapCircleRadius = thickness + 2;
    pathBuilder.cSmoothConnector(
        Vector.of(
            thickness * 7 / 16,
            -thickness * 9 / 40
        ), 0, initialAngle + Math.PI, 1/3
    );
    for (let i = 0; i < arcDivisions; i++) {
        pathBuilder.cForCircularArc(
            Vector.of(
                -endcapCircleRadius * Math.sin(initialAngle + i * rotation),
                endcapCircleRadius * Math.cos(initialAngle + i * rotation)
            ),
            rotation
        );
    }
    pathBuilder.cSmoothConnector(
        Vector.of(
            -thickness * 7 / 16,
            thickness + (thickness * 9 / 40) - 2 * endcapCircleRadius * Math.sin(Math.PI / 4)
        ), undefined, 0, 1/3
    );

    pathBuilder.l(Vector.of(-(upperArmLength - cornerCurveSize), 0))
        .cSmoothConnector(Vector.of(-cornerCurveSize, cornerCurveSize), Math.PI, -Math.PI / 2, 1 / Math.SQRT2)
        .l(Vector.of(0, bottomDropLength + thickness + interArmGap - cornerCurveSize))
        .cForCircularArc(-Math.PI / 2, Vector.of(innerSpacing / 2, innerSpacing / 2))
        .cForCircularArc(-Math.PI / 2, Vector.of(innerSpacing / 2, -innerSpacing / 2))
        .l(Vector.of(0, -(bottomDropLength + thickness / 2)))
        .cForCircularArc(Math.PI / 2, Vector.of(thickness / 2, -thickness / 2))
        .l(Vector.of(lowerArmLength, 0))
        .cForCircularArc(Math.PI / 2, Vector.of(thickness / 2, thickness / 2))
        .cForCircularArc(Math.PI / 2, Vector.of(-thickness / 2, thickness / 2))
        .l(Vector.of(-lowerArmLength, 0))
        .z()
        .m(Vector.of(-(innerSpacing + 2 * cornerCurveSize + 2 * thickness), -(2 * thickness + interArmGap)))
        .cSmoothConnector(Vector.of(cornerCurveSize, -cornerCurveSize), 0, Math.PI / 2, 1 / Math.SQRT2)
        .cSmoothConnector(Vector.of(-50, -(innerSpacing - cornerCurveSize)), undefined, 0, 1/Math.sqrt(6), 1/2)
        .l(Vector.of(-(loopWidth - 50), 0))
        .cForCircularArc(-Math.PI / 2, Vector.of(-innerSpacing / 2, innerSpacing / 2))
        .cForCircularArc(-Math.PI / 2, Vector.of(innerSpacing / 2, innerSpacing / 2))
        .z();

    return pathBuilder.toString();
};

function getPathWithoutEndcapCircle(props: PathProps) {
    const {
        thickness, innerSpacing,
        cornerCurveSize,
        upperArmLength, lowerArmLength,
        interArmGap,
        bottomDropLength, loopWidth
    } = props;

    const origin: Vector = Vector.of(
        loopWidth + 5 * innerSpacing / 2 + 3 * thickness + cornerCurveSize,
        interArmGap + 2 * innerSpacing + 3 * thickness
    );
    
    const pathBuilder = PathBuilder.m(origin)
        .cSmoothConnector(Vector.of(-cornerCurveSize, cornerCurveSize), Math.PI, -Math.PI / 2, 1 / Math.SQRT2)
        .l(Vector.of(0, bottomDropLength - cornerCurveSize))
        .cForCircularArc(Math.PI / 2, Vector.of(-(thickness + innerSpacing / 2), (thickness + innerSpacing / 2)))
        .cForCircularArc(Math.PI / 2, Vector.of(-(thickness + innerSpacing / 2), -(thickness + innerSpacing / 2)))
        .l(Vector.of(0, -(bottomDropLength + thickness + interArmGap - cornerCurveSize)))
        .cSmoothConnector(Vector.of(-cornerCurveSize, -cornerCurveSize), -Math.PI / 2, 0, 1 / Math.SQRT2)
        .l(Vector.of(-(loopWidth - cornerCurveSize), 0))
        .cForCircularArc(Math.PI / 2, Vector.of(-(thickness + innerSpacing / 2), -(thickness + innerSpacing / 2)))
        .cForCircularArc(Math.PI / 2, Vector.of(thickness + innerSpacing / 2, -(thickness + innerSpacing / 2)))
        .l(Vector.of(loopWidth - (50 - 10), 0))
        .cSmoothConnector(Vector.of(50 - 10 + thickness, innerSpacing - cornerCurveSize + thickness - 10), undefined, -Math.PI / 2, 1/2, 1/Math.sqrt(6))
        .l(Vector.of(0, 10))
        .cSmoothConnector(Vector.of(cornerCurveSize, cornerCurveSize), Math.PI / 2, Math.PI, 1 / Math.SQRT2)
        .l(Vector.of(upperArmLength - cornerCurveSize, 0));
    
    const initialAngle = 0;
    const arcDivisions = 4;
    const rotation = Math.PI / arcDivisions;
    const endcapCircleRadius = thickness / 2;
    pathBuilder.cSmoothConnector(
        Vector.of(
            thickness * 0,
            -thickness * 0
        ), 0, initialAngle + Math.PI, 1/3
    );
    for (let i = 0; i < arcDivisions; i++) {
        pathBuilder.cForCircularArc(
            Vector.of(
                -endcapCircleRadius * Math.sin(initialAngle + i * rotation),
                endcapCircleRadius * Math.cos(initialAngle + i * rotation)
            ),
            rotation
        );
    }
    pathBuilder.cSmoothConnector(
        Vector.of(
            -thickness * 0,
            thickness + (thickness * 0) - 2 * endcapCircleRadius * Math.sin(Math.PI / 2)
        ), undefined, 0, 1/3
    );

    pathBuilder.l(Vector.of(-(upperArmLength - cornerCurveSize), 0))
        .cSmoothConnector(Vector.of(-cornerCurveSize, cornerCurveSize), Math.PI, -Math.PI / 2, 1 / Math.SQRT2)
        .l(Vector.of(0, bottomDropLength + thickness + interArmGap - cornerCurveSize))
        .cForCircularArc(-Math.PI / 2, Vector.of(innerSpacing / 2, innerSpacing / 2))
        .cForCircularArc(-Math.PI / 2, Vector.of(innerSpacing / 2, -innerSpacing / 2))
        .l(Vector.of(0, -(bottomDropLength + thickness / 2)))
        .cForCircularArc(Math.PI / 2, Vector.of(thickness / 2, -thickness / 2))
        .l(Vector.of(lowerArmLength, 0))
        .cForCircularArc(Math.PI / 2, Vector.of(thickness / 2, thickness / 2))
        .cForCircularArc(Math.PI / 2, Vector.of(-thickness / 2, thickness / 2))
        .l(Vector.of(-lowerArmLength, 0))
        .z()
        .m(Vector.of(-(innerSpacing + 2 * cornerCurveSize + 2 * thickness), -(2 * thickness + interArmGap)))
        .cSmoothConnector(Vector.of(cornerCurveSize, -cornerCurveSize), 0, Math.PI / 2, 1 / Math.SQRT2)
        .cSmoothConnector(Vector.of(-50, -(innerSpacing - cornerCurveSize)), undefined, 0, 1/Math.sqrt(6), 1/2)
        .l(Vector.of(-(loopWidth - 50), 0))
        .cForCircularArc(-Math.PI / 2, Vector.of(-innerSpacing / 2, innerSpacing / 2))
        .cForCircularArc(-Math.PI / 2, Vector.of(innerSpacing / 2, innerSpacing / 2))
        .z();

    return pathBuilder.toString();
};