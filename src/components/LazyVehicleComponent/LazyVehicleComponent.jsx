// LazyVehicleComponent.js
import React, { lazy, Suspense } from "react";
import style from "./LazyVehicleComponent.module.css";
import AdSkeleton from "../AdSkeleton/AdSkeleton";

const VehicleComponent = lazy(() => import("../VehicleComponent/VehicleComponent"));

function LazyVehicleComponent({ visibleItems, skeletonCount }) {
  return (
    <Suspense
      fallback={
        <div className={style.skeleton}>
          {Array.from({ length: skeletonCount }).map((_, index) => (
            <AdSkeleton key={index} />
          ))}
        </div>
      }
    >
      <VehicleComponent visibleItems={visibleItems} />
    </Suspense>
  );
}

export default LazyVehicleComponent;
