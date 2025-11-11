'use client';

import { Point } from "../svg-utils/svg";
import { PathBuilder } from "../svg-utils/path";

const origin: Point = Point.of(695, 490);

const stringPath = `
    m ${origin.x} ${origin.y}
    c -11.0457 0 -20 8.9543 -20 20
    l 0 200
    c 0 71.797 -58.203 130 -130 130
    c -71.797 0 -130 -58.203 -130 -130
    l 0 -360
    c 0 -25 0 -25 -25 -25
    l -210 0
    c -71.797 0 -130 -58.203 -130 -130
    c 0 -71.797 58.203 -130 130 -130
    l 215 0
    c 52.3327 0 100 55.8413 100 115
    l 0 40
    c 0 25 0 25 25 25
    l 290 0
    c 15 0 22.249 -1.688 35.1305 -15.7902
    c 21.2237 -20.3863 51.7361 -27.8524 79.9749 -19.569
    c 28.7053 8.4202 50.5578 31.7885 57.0369 60.9932
    c 7.6474 34.4708 -7.6038 69.9702 -37.8716 88.1519
    c -34.7228 20.8578 -79.4692 13.2715 -105.3768 -17.8656
    c -3.8939 -5.9203 -13.8939 -15.9203 -28.8939 -15.9203
    l -290 0
    c -25 0 -25 0 -25 25
    l 0 360
    c 0 27.6142 22.3858 50 50 50
    c 27.6142 0 50 -22.3858 50 -50
    l 0 -260
    c 0 -22.0914 17.9086 -40 40 -40
    l 220 0
    c 22.0914 0 40 17.9086 40 40
    c 0 22.0914 -17.9086 40 -40 40
    z
    m -305 -245
    c 25 0 25 0 25 -25
    l 0 -40
    c 0 -19.33 -22.3858 -35 -50 -35
    l -185 0
    c -27.6142 0 -50 22.3858 -50 50
    c 0 27.6142 22.3858 50 50 50
    z
`;

const pathBuilder = PathBuilder.m(origin)
    .cSmoothConnector(Point.of(-25, 25), Math.PI, -Math.PI / 2, 1 / Math.SQRT2)
    .l(Point.of(0, 195))
    .cForCircularArc(Math.PI / 2, Point.of(-130, 130))
    .cForCircularArc(Math.PI / 2, Point.of(-130, -130))
    .l(Point.of(0, -360))
    .cSmoothConnector(Point.of(-25, -25), -Math.PI / 2, 0, 1 / Math.SQRT2)
    .l(Point.of(-210, 0))
    .cForCircularArc(Math.PI / 2, Point.of(-130, -130))
    .cForCircularArc(Math.PI / 2, Point.of(130, -130))
    .l(Point.of(195, 0))
    // .c(Point.of(52.3327, 0), Point.of(100, 55.8413), Point.of(100, 115))
    .cSmoothConnector(Point.of(120, 145), undefined, -Math.PI / 2, 1/2, 1/Math.sqrt(6))
    .l(Point.of(0, 10))
    .cSmoothConnector(Point.of(25, 25), Math.PI / 2, Math.PI, 1 / Math.SQRT2)
    .l(Point.of(290, 0));

const initialAngle = Math.PI / 4;
const numberOfArcs = 4;
const rotation = 3 * Math.PI / 2 / numberOfArcs;
const radius = 82;
pathBuilder.cSmoothConnector(Point.of(35, -18), undefined, 3 * initialAngle, 1/3);
for (let i = 0; i < numberOfArcs; i++) {
    pathBuilder.cForCircularArc(
        Point.of(
            radius * Math.cos(initialAngle + i * rotation),
            radius * Math.sin(initialAngle + i * rotation)
        ),
        rotation
    );
}
pathBuilder.cSmoothConnector(
    Point.of(-35, 80 + 18 - radius * 2 * Math.sin(Math.PI / 4)), undefined, 0, 1/3
);

pathBuilder.l(Point.of(-290, 0))
    .cSmoothConnector(Point.of(-25, 25), Math.PI, -Math.PI / 2, 1 / Math.SQRT2)
    .l(Point.of(0, 360))
    .cForCircularArc(-Math.PI / 2, Point.of(50, 50))
    .cForCircularArc(-Math.PI / 2, Point.of(50, -50))
    .l(Point.of(0, -260))
    .cForCircularArc(Math.PI / 2, Point.of(40, -40))
    .l(Point.of(220, 0))
    .cForCircularArc(Math.PI / 2, Point.of(40, 40))
    .cForCircularArc(Math.PI / 2, Point.of(-40, 40))
    .z()
    .m(Point.of(-310, -245))
    .cSmoothConnector(Point.of(25, -25), 0, Math.PI / 2, 1 / Math.SQRT2)
    // .l(Point.of(0, -1))
    // .c(Point.of(0, -19.33), Point.of(-22.3858, -35), Point.of(-50, -35))
    .cSmoothConnector(Point.of(-50, -75), undefined, 0, 1/Math.sqrt(6), 1/2)
    .l(Point.of(-185, 0))
    .cForCircularArc(-Math.PI / 2, Point.of(-50, 50))
    .cForCircularArc(-Math.PI / 2, Point.of(50, 50))
    .z();

const path = pathBuilder.toString();

export default function LogoAnimated() {
    return <div>
        <svg width={500} height={500} viewBox="0 0 1200 900">
            <path d={path}
                style={{
                    transition: "d 1000ms"
                }}
                fill="#5692d8"
            />
        </svg>
    </div>;
}