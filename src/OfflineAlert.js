import React, { useState } from 'react';
import { useTimeout } from 'usehooks-ts';

function OfflineAlert(props) {
  const [isVisible, setIsVisible] = useState(true);

  const hide = () => setIsVisible(false);

  useTimeout(hide, 5000);

  return (
    <>
      {isVisible ?
        (<div className="offlineAlert" >
          <p style={{ color: 'red' }}>You are offline, your data was loaded from the cache</p>
        </div >)
        : (<div className="offlineAlert">
          <p>{""}</p>
        </div>)}
    </>
  );
}

export default OfflineAlert;
