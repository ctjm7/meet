import React, { useState } from 'react';
import { useTimeout } from 'usehooks-ts';

function OfflineAlert() {
  const [isVisible, setIsVisible] = useState(true);

  const hide = () => setIsVisible(false);

  useTimeout(hide, 5000);

  return (
    <>
      {!navigator.onLine ?

        (isVisible ?
          (<div className="offlineAlert" >
          <p style={{ color: 'red' }}>You are currently offline</p>
          </div >)
          : (<div><p style={{ color: 'green' }}>You are online</p></div>))

      : <div></div>
      }
    </>
  );
}

export default OfflineAlert;
