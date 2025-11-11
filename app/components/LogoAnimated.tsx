'use client';

import { Point } from "../../lib/svg-utils/svg";
import { PathBuilder } from "../../lib/svg-utils/path";
import { useEffect, useState } from "react";

const stringPath = `
    m 695 490
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

export default function LogoAnimated() {
    const [path, setPath] = useState('');
    useEffect(() => {
        const worker = new Worker(new URL("../../lib/techkun-logo-path.ts", import.meta.url));
        worker.postMessage(null);
        worker.onmessage = e => setPath(e.data);
        return () => worker.terminate();
    }, []);
    // const viewBoxWidth = spiralLength + 4 * breathingRoom + 3 * thickness + startHandLength;
    // const viewBoxHeight = gapBwStartHandAndShaft + 7 * breathingRoom / 2 + 4 * thickness + tailLength;
    return <div>
        <svg width={550} height={500} viewBox={`0 0 1100 1000`}>
            <path d={path}
                style={{
                    transition: "d 1000ms"
                }}
                fill="#5692d8"
            />
        </svg>
    </div>;
};