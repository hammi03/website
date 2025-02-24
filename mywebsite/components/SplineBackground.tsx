import React from "react";
// @ts-ignore
import Spline from "@splinetool/react-spline/next";


export const SplineBackground = () => (
    <div className="absolute inset-0 z-10">
        <Spline
            className="pointer-events-auto"
            scene="https://prod.spline.design/HYBwtfjEOApQmHqf/scene.splinecode"
        />
    </div>
);