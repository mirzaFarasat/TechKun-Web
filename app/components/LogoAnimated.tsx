'use client';
import { cubicBezierBetween } from "@/lib/svg-utils/cubic-bezier-curve";
import { clampedNormalize, round } from "@/lib/svg-utils/math";
import { PathBuilder } from "@/lib/svg-utils/path";
import { Point, Vector } from "@/lib/svg-utils/svg";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

interface PathAnimations {
    shaftEmerging?: {
        value: number;
    };
    loopForming?: {
        value: number;
        stages: [
            loopTopBendAppears: number,
            loopTopWidthAppears: number,
            loopTopCurveAppears: number,
            loopBottomCurveAppears: number,
            loopBottomWidthAppears: number,
            loopCloses: number
        ];
    };
    upperArmEmerging?: {
        value: number;
        stages: [
            upperArmAppears: number,
            upperArmElongates: number,
            orbAppears: number
        ];
    };
};

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
const SQRT1_6 = 1 / Math.sqrt(6);

function pathData(animations: PathAnimations, props: PathProps = finalProps) {
    const {
        thickness, innerSpacing,
        cornerCurveSize,
        lowerArmLength,
        interArmGap,
        bottomDropLength, loopWidth
    } = props;
    const {
        upperArmEmerging = {
            value: 1,
            stages: [0.3, 0.6, 1]
        },
        loopForming = {
            value: 1,
            stages: [0.2, 0.35, 0.5, 0.65, 0.8, 1]
        },
        shaftEmerging = {
            value: 1
        }
    } = animations;
    const shaftLength = clampedNormalize(
        shaftEmerging.value,
        0, 1,
        0, (bottomDropLength + thickness + interArmGap - cornerCurveSize)
    );
    const upperArmLength = clampedNormalize(
        upperArmEmerging.value,
        upperArmEmerging.stages[0], upperArmEmerging.stages[1],
        cornerCurveSize, props.upperArmLength
    );
    let orbEntryAngle = clampedNormalize(
        upperArmEmerging.value,
        0, upperArmEmerging.stages[0],
        Math.PI / 2, 0
    );
    orbEntryAngle = clampedNormalize(
        upperArmEmerging.value,
        upperArmEmerging.stages[1], upperArmEmerging.stages[2],
        orbEntryAngle, props.orbEntryAngle
    );

    const origin: Vector = Vector.of(
        loopWidth + 5 * innerSpacing / 2 + 3 * thickness + cornerCurveSize,
        interArmGap + 2 * innerSpacing + 3 * thickness
    );
    
    const pathBuilder = PathBuilder.m(origin)
        .cSmoothConnector(Vector.of(-cornerCurveSize, cornerCurveSize), Math.PI, -Math.PI / 2, Math.SQRT1_2)
        .l(Vector.of(0, bottomDropLength - cornerCurveSize))
        .cForCircularArc(Math.PI / 2, Vector.of(-(thickness + innerSpacing / 2), (thickness + innerSpacing / 2)))
        .cForCircularArc(Math.PI / 2, Vector.of(-(thickness + innerSpacing / 2), -(thickness + innerSpacing / 2)))
        .l(Vector.of(0, -shaftLength));
    {
        const loopTopWidth = clampedNormalize(
            loopForming.value,
            loopForming.stages[0], loopForming.stages[1],
            0, loopWidth - 50
        );
        const loopTopCurveAngle = clampedNormalize(
            loopForming.value,
            loopForming.stages[1], loopForming.stages[2],
            0, Math.PI / 2
        );

        const loopBottomCurveAngle = clampedNormalize(
            loopForming.value,
            loopForming.stages[2], loopForming.stages[3],
            0, Math.PI / 2
        );
        
        const loopLinecapAngle = clampedNormalize(
            loopForming.value,
            loopForming.stages[4], loopForming.stages[5],
            Math.PI / 2, 0
        );
        const linecapAngleVector = Vector.of(Math.cos(loopLinecapAngle), Math.sin(loopLinecapAngle));
        linecapAngleVector.scale(thickness / 2);

        const cornerCurvature = clampedNormalize(
            loopForming.value,
            loopForming.stages[4], loopForming.stages[5],
            0, Math.SQRT1_2
        );

        const cornerCurveClamped = Math.max(0, cornerCurveSize - linecapAngleVector.y);
        const loopBottomWidth = clampedNormalize(
            loopForming.value,
            loopForming.stages[3], loopForming.stages[4],
            0, loopWidth - Math.max(cornerCurveSize, linecapAngleVector.y)
        );

        pathBuilder
            .cSmoothConnector(
                Vector.of(-cornerCurveClamped, -(cornerCurveSize + thickness / 2 * (1 - Math.cos(loopLinecapAngle)))),
                -Math.PI / 2, -loopLinecapAngle, cornerCurvature
            )
            .l(Vector.of(0, -2 * linecapAngleVector.x))
            .cSmoothConnector(
                Vector.of(cornerCurveClamped, -(cornerCurveSize + thickness / 2 * (1 - Math.cos(loopLinecapAngle)))),
                loopLinecapAngle, Math.PI / 2, cornerCurvature
            );

        const elbowOuterOffset = clampedNormalize(
            loopForming.value,
            loopForming.stages[0], loopForming.stages[1],
            0, 10
        );
        let loopElbowInner = cubicBezierBetween(
            Point.of(0, 0), Point.of(-50, -(innerSpacing - cornerCurveSize)),
            Vector.ofAngle(-Math.PI / 2), Vector.ofAngle(0),
            SQRT1_6, 1/2
        );
        // let loopElbowOuter = cubicBezierBetween(
        //     Point.of(0, 0), Point.of(50 - 10 + thickness, innerSpacing - cornerCurveSize + thickness - 10),
        //     Vector.ofAngle(0), Vector.ofAngle(-Math.PI / 2),
        //     1/2, SQRT1_6
        // );
        const t = clampedNormalize(
            loopForming.value,
            0, loopForming.stages[0]
        );
        loopElbowInner = loopElbowInner.splitAt(t);
        let elbowInnerAngle = Math.atan(
            Vector.from(
                loopElbowInner.endingPoint,
                loopElbowInner.secondControlPoint
            ).slope
        );
        elbowInnerAngle = Number.isNaN(elbowInnerAngle) ? Math.PI / 2: elbowInnerAngle;

        const elbowInnerStartPosition = pathBuilder.currentPosition;
        const elbowInnerEndingPointVector = loopElbowInner.endingPoint.toVector();
        pathBuilder
            .c(
                loopElbowInner.firstControlPoint.toVector(),
                loopElbowInner.secondControlPoint.toVector(),
                elbowInnerEndingPointVector
            )
            .l(Vector.of(-loopTopWidth, 0))
            .cForCircularArc(Vector.of(0, innerSpacing / 2), -loopTopCurveAngle)
            .cForCircularArc(Vector.of(innerSpacing / 2, 0), -loopBottomCurveAngle)
            .l(Vector.of(loopBottomWidth, 0));

        const linecapCenterFromInnerEdge = Vector.of(0, thickness / 2);
        linecapCenterFromInnerEdge.rotate(Math.PI / 2 - loopBottomCurveAngle);
        linecapCenterFromInnerEdge.rotate(Math.PI / 2 - loopTopCurveAngle);
        linecapCenterFromInnerEdge.rotate(elbowInnerAngle);
        const linecapCenterFromOuterEdge = Vector.of(0, -thickness / 2);
        linecapCenterFromOuterEdge.rotate(-loopLinecapAngle);
        linecapCenterFromOuterEdge.rotate(Math.PI / 2 - loopBottomCurveAngle);
        linecapCenterFromOuterEdge.rotate(Math.PI / 2 - loopTopCurveAngle);
        linecapCenterFromOuterEdge.rotate(elbowInnerAngle);
        pathBuilder
            .cForCircularArc(linecapCenterFromInnerEdge, loopLinecapAngle)
            .l(Vector.of(0, 2 * linecapAngleVector.x))
            .cForCircularArc(linecapCenterFromOuterEdge, loopLinecapAngle);
        const bottomCurveCenterFromOuterEdge = Vector.of(0, -(thickness + innerSpacing / 2));
        bottomCurveCenterFromOuterEdge.rotate(Math.PI / 2 - loopBottomCurveAngle);
        const topCurveCenterFromOuterEdge = Vector.of(thickness + innerSpacing / 2, 0);
        topCurveCenterFromOuterEdge.rotate(Math.PI / 2 - loopTopCurveAngle);
        pathBuilder
            .l(Vector.of(-loopBottomWidth, 0))
            .cForCircularArc(bottomCurveCenterFromOuterEdge, loopBottomCurveAngle)
            .cForCircularArc(topCurveCenterFromOuterEdge, loopTopCurveAngle);

        pathBuilder
            .l(Vector.of(loopTopWidth + elbowOuterOffset, 0));
        const innerLoopStartToOuterLoopEnd = Vector.of(thickness, -elbowOuterOffset);
        pathBuilder
            .CSmoothConnector(
                elbowInnerStartPosition.add(innerLoopStartToOuterLoopEnd),
                elbowInnerAngle, -Math.PI / 2,
                Vector.from(loopElbowInner.endingPoint, loopElbowInner.secondControlPoint).magnitude /
                    elbowInnerEndingPointVector.magnitude,
                loopElbowInner.firstControlPoint.toVector().magnitude / elbowInnerEndingPointVector.magnitude
            )
            .l(Vector.of(0, elbowOuterOffset));
    }

    {
        const cornerAngle = clampedNormalize(
            upperArmEmerging.value,
            upperArmEmerging.stages[0], upperArmEmerging.stages[1],
            orbEntryAngle + Math.PI, Math.PI
        );
        const cornerXDistance = clampedNormalize(
            upperArmEmerging.value,
            0, upperArmEmerging.stages[0],
            0, cornerCurveSize
        );
        const cornerYDistance = clampedNormalize(
            upperArmEmerging.value,
            upperArmEmerging.stages[0], upperArmEmerging.stages[1],
            cornerCurveSize + thickness / 2 * (1 - Math.cos(orbEntryAngle)), cornerCurveSize
        );
        const cornerCurvature = clampedNormalize(
            upperArmEmerging.value,
            0, upperArmEmerging.stages[0],
            0, Math.SQRT1_2
        );

        pathBuilder.cSmoothConnector(Vector.of(cornerXDistance, cornerYDistance), Math.PI / 2, cornerAngle, cornerCurvature)
            .l(Vector.of(upperArmLength - cornerCurveSize, 0));
        
        const arcDivisions = 4;
        const rotation = (Math.PI - orbEntryAngle * 2) / arcDivisions;

        const base = clampedNormalize(
            upperArmEmerging.value,
            upperArmEmerging.stages[0], upperArmEmerging.stages[1],
            0, thickness * 7 / 16
        );
        const height = base * Math.tan(orbEntryAngle * orbBaseAngleRatio);
        const cosine = Math.cos(orbEntryAngle);
        const endcapCircleRadius = clampedNormalize(
            upperArmEmerging.value,
            upperArmEmerging.stages[0], upperArmEmerging.stages[1],
            thickness / 2, cosine !== 0 ? (thickness / 2 - height) / cosine: 0
        );

        pathBuilder.cSmoothConnector(
            Vector.of(base, height), 0, orbEntryAngle + Math.PI, 1/3
        );
        for (let i = 0; i < arcDivisions; i++) {
            pathBuilder.cForCircularArc(
                Vector.of(
                    -endcapCircleRadius * Math.sin(orbEntryAngle + i * rotation),
                    endcapCircleRadius * Math.cos(orbEntryAngle + i * rotation)
                ),
                rotation
            );
        }
        pathBuilder.cSmoothConnector(
            Vector.of(-base, height), undefined, 0, 1/3
        );

        pathBuilder.l(Vector.of(-(upperArmLength - cornerCurveSize), 0))
            .cSmoothConnector(Vector.of(-cornerXDistance, cornerYDistance), -cornerAngle, -Math.PI / 2, cornerCurvature);
    }

    pathBuilder.l(Vector.of(0, shaftLength))
        .cForCircularArc(-Math.PI / 2, Vector.of(innerSpacing / 2, innerSpacing / 2))
        .cForCircularArc(-Math.PI / 2, Vector.of(innerSpacing / 2, -innerSpacing / 2))
        .l(Vector.of(0, -(bottomDropLength + thickness / 2)))
        .cForCircularArc(Math.PI / 2, Vector.of(thickness / 2, -thickness / 2))
        .l(Vector.of(lowerArmLength, 0))
        .cForCircularArc(Math.PI / 2, Vector.of(thickness / 2, thickness / 2))
        .cForCircularArc(Math.PI / 2, Vector.of(-thickness / 2, thickness / 2))
        .l(Vector.of(-(lowerArmLength - thickness / 2 - cornerCurveSize), 0))
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

const finalAnimationState: PathAnimations = {
    shaftEmerging: {
        value: 1
    },
    loopForming: {
        value: 1,
        stages: [0.25, 0.4, 0.55, 0.7, 0.85, 1]
    },
    upperArmEmerging: {
        value: 1,
        stages: [0.3, 0.6, 1]
    }
};

export default function LogoAnimated() {
    const shaftEmerging = useMotionValue(1)
    const loopForming = useMotionValue(0);
    const upperArmEmerging = useMotionValue(0);
    const path = useTransform<number, string>(
        [shaftEmerging, loopForming, upperArmEmerging],
        value => pathData({
            shaftEmerging: {
                value: value[0]
            },
            loopForming: {
                ...finalAnimationState.loopForming!,
                value: value[1]
            },
            upperArmEmerging: {
                ...finalAnimationState.upperArmEmerging!,
                value: value[2]
            }
        })
    );
    async function startAnimation() {
        await animate(shaftEmerging, 1, {
            duration: 1,
            // delay: 1
        })
        await animate(loopForming, 1, {
            duration: 5
        });
        await animate(upperArmEmerging, 1, {
            duration: 1
        });
    };
    async function reverseAnimation() {
        await animate(upperArmEmerging, 0, {
            duration: 1
        });
        await animate(loopForming, 0, {
            duration: 5
        });
        await animate(shaftEmerging, 0, {
            duration: 1
        })
    }
    function toggleLoop() {
        // animate(upperArmEmerging, 1, {
        //     duration: 5
        // });
        animate(loopForming, (loopForming.get() === 0 ? 0.5 : 0), {
            duration: 5
        });
    };
    // useEffect(() => {
    //     startAnimation();
    // }, []);
    // const viewBoxWidth = spiralLength + 4 * breathingRoom + 3 * thickness + startHandLength;
    // const viewBoxHeight = gapBwStartHandAndShaft + 7 * breathingRoom / 2 + 4 * thickness + tailLength;
    return <div onClick={toggleLoop}>
        <motion.svg width={550} height={500} viewBox={`0 0 1100 1000`}>
            <motion.path
                d={path}
                fill="#5692d8"
            />
        </motion.svg>
    </div>;
};