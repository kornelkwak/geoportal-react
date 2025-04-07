import { useEffect, useRef } from "react";
import "public/potree/build/potree/potree.css"
import "public/potree/libs/jquery-ui/jquery-ui.min.css";
import "public/potree/libs/openlayers3/ol.css";
import "public/potree/libs/spectrum/spectrum.css";
import "public/potree/libs/jstree/themes/mixed/style.css";
import POINT_CLOUD_CONFIG from "../constants/pointCloudConfig";

/**
 * PotreeViewer component for displaying point clouds using Potree.
 * @returns {JSX.Element} - The rendered component.
 */
const PotreeViewer = () => {
  const viewerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadPotree = async () => {
      if (!window.Potree) {
        const scripts = [
          "public/potree/libs/jquery/jquery-3.1.1.js",
          "public/potree/libs/spectrum/spectrum.js",
          "public/potree/libs/jquery-ui/jquery-ui.min.js",
          "public/potree/libs/other/BinaryHeap.js",
          "public/potree/libs/tween/tween.min.js",
          "public/potree/libs/d3/d3.js",
          "public/potree/libs/proj4/proj4.js",
          "public/potree/libs/openlayers3/ol.js",
          "public/potree/libs/i18next/i18next.js",
          "public/potree/libs/jstree/jstree.js",
          "public/potree/libs/copc/index.js",
          "public/potree/build/potree/potree.js",
          "public/potree/libs/plasio/js/laslaz.js",
        ];

        for (const src of scripts) {
          await new Promise<void>((resolve, reject) => {
            const script = document.createElement("script");
            script.src = src;
            script.async = true;
            script.onload = () => resolve();
            script.onerror = () => reject(new Error(`Failed to load ${src}`));
            document.body.appendChild(script);
          });
        }
      }

      if (window.Potree && viewerRef.current) {
        const viewer = new window.Potree.Viewer(viewerRef.current);
        viewer.setEDLEnabled(true);
        viewer.setFOV(60);
        viewer.setPointBudget(2_000_000);
        viewer.loadSettingsFromURL();

        const path = POINT_CLOUD_CONFIG.path;
        const name = POINT_CLOUD_CONFIG.name;

        window.Potree.loadPointCloud(path, name, (e: any) => {
          viewer.scene.addPointCloud(e.pointcloud);
          let material = e.pointcloud.material;
          material.size = 1;
          material.pointSizeType = window.Potree.PointSizeType.ADAPTIVE;
          viewer.fitToScreen(0.5);
        });
      }
    };

    loadPotree();
  }, []);

  return <div id="potree_render_area" ref={viewerRef} />;

};

export default PotreeViewer;
