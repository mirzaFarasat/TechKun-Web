'use client';
import { normalize } from "@/lib/svg-utils/math";
import { PathBuilder } from "@/lib/svg-utils/path";
import { Point } from "@/lib/svg-utils/svg";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

interface PathProps {
    thickness: number;
    innerSpacing: number;
    cornerCurveSize: number;
    bottomDropLength: number;

    upperArmLength: number;
    lowerArmLength: number;
    interArmGap: number;
    loopWidth: number;

    orbEntryAngle: number;
};

const orbBaseAngleRatio = 4 * Math.atan(18 / 35) / Math.PI;

function pathData(props: PathProps) {
    const {
        thickness, innerSpacing,
        cornerCurveSize,
        upperArmLength, lowerArmLength,
        interArmGap,
        bottomDropLength, loopWidth,
        orbEntryAngle
    } = props;

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
    
    const arcDivisions = 4;
    const rotation = (Math.PI - orbEntryAngle * 2) / arcDivisions;

    const base = Math.min(
        normalize(Math.abs(orbEntryAngle), 0, 7 / 16, 0, thickness * 7 / 16),
        thickness * 7 / 16
    );
    const height = base * Math.tan(orbEntryAngle * orbBaseAngleRatio);
    const endcapCircleRadius = (thickness / 2 - height) / Math.cos(orbEntryAngle);

    pathBuilder.cSmoothConnector(
        Point.of(base, height), 0, orbEntryAngle + Math.PI, 1/3
    );
    for (let i = 0; i < arcDivisions; i++) {
        pathBuilder.cForCircularArc(
            Point.of(
                -endcapCircleRadius * Math.sin(orbEntryAngle + i * rotation),
                endcapCircleRadius * Math.cos(orbEntryAngle + i * rotation)
            ),
            rotation
        );
    }
    pathBuilder.cSmoothConnector(
        Point.of(-base, height), undefined, 0, 1/3
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
        .l(Point.of(-(lowerArmLength - thickness / 2 - cornerCurveSize), 0))
        .z()
        .m(Point.of(-(innerSpacing + 2 * cornerCurveSize + 2 * thickness), -(2 * thickness + interArmGap)))
        .cSmoothConnector(Point.of(cornerCurveSize, -cornerCurveSize), 0, Math.PI / 2, 1 / Math.SQRT2)
        .cSmoothConnector(Point.of(-50, -(innerSpacing - cornerCurveSize)), undefined, 0, 1/Math.sqrt(6), 1/2)
        .l(Point.of(-(loopWidth - 50), 0))
        .cForCircularArc(-Math.PI / 2, Point.of(-innerSpacing / 2, innerSpacing / 2))
        .cForCircularArc(-Math.PI / 2, Point.of(innerSpacing / 2, innerSpacing / 2))
        .z();

    return pathBuilder.toString();
};

const finalProps: PathProps = {
    thickness: 80,
    innerSpacing: 100,
    cornerCurveSize: 25,
    
    upperArmLength: 315,
    lowerArmLength: 220,
    interArmGap: 85,
    bottomDropLength: 220,
    loopWidth: 235,

    orbEntryAngle: -Math.PI / 4
};

const finalPath = pathData(finalProps);

export default function LogoAnimated() {
    const upperArmLength = useMotionValue(0);
    const orbEntryAngle = useMotionValue(0);
    const path = useTransform<number, string>(
        [upperArmLength, orbEntryAngle],
        value => pathData({
            ...finalProps,
            upperArmLength: value[0],
            orbEntryAngle: value[1]
        })
    );
    async function startAnimation() {
        await animate(upperArmLength, finalProps.upperArmLength, {
            duration: 0.5,
            delay: 1
        });
        await animate(orbEntryAngle, finalProps.orbEntryAngle, {
            duration: 0.5
        });
    };
    async function reverseAnimation() {
        await animate(orbEntryAngle, 0, {
            duration: 0.5
        });
        await animate(upperArmLength, 0, {
            duration: 0.5
        });
        startAnimation();
    };
    useEffect(() => {
        startAnimation();
    }, []);
    // const viewBoxWidth = spiralLength + 4 * breathingRoom + 3 * thickness + startHandLength;
    // const viewBoxHeight = gapBwStartHandAndShaft + 7 * breathingRoom / 2 + 4 * thickness + tailLength;
    return <div onClick={reverseAnimation}>
        <motion.svg width={550} height={500} viewBox={`0 0 1100 1000`}>
            <motion.path
                d={path}
                fill="#5692d8"
            />
        </motion.svg>
    </div>;
};