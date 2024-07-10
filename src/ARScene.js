import React, { useEffect, useState } from 'react';

const ARScene = ({ image, model }) => {
  const [markerFound, setMarkerFound] = useState(false);

  useEffect(() => {
    const onMarkerFound = () => {
      setMarkerFound(true);
    };

    const onMarkerLost = () => {
      setMarkerFound(false);
    };

    window.addEventListener('markerFound', onMarkerFound);
    window.addEventListener('markerLost', onMarkerLost);

    return () => {
      window.removeEventListener('markerFound', onMarkerFound);
      window.removeEventListener('markerLost', onMarkerLost);
    };
  }, []);

  return (
    <>
      {!markerFound && (
        <div style={{ color: 'white', textAlign: 'center', padding: '10px' }}>
          Searching for marker...
        </div>
      )}
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <div className="arjs-loader">
          <div>Loading, please wait...</div>
        </div>
        <a-scene
          vr-mode-ui="enabled: false;"
          renderer="logarithmicDepthBuffer: true;"
          embedded
          arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;"
        >
          <a-nft
            type="nft"
            url={image}
            smooth="true"
            smoothCount="10"
            smoothTolerance=".01"
            smoothThreshold="5"
          >
            <a-entity
              gltf-model={model}
              scale="5 5 5"
              position="50 150 0"
            >
            </a-entity>
          </a-nft>
          <a-entity camera></a-entity>
        </a-scene>
      </div>
    </>
  );
};

export default ARScene;
