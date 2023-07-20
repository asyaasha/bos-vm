import React, { useContext } from 'react';

export const StProviderContext = React.createContext(null);

export const StConnectButton = (props) => {
  const stProviderContext = useContext(StProviderContext);
  console.log('--- stProviderContext ---- ');
  console.log(stProviderContext);
  console.log('-----');
  const connect = stProviderContext?.arConnect || {};
  const account = stProviderContext?.account || '';
  const disconnect = stProviderContext?.disconnect || {};
  const handleDisconnect = () => {
    disconnect();
    console.log(account);
  };

  return (
    <button
      className={`btn ${props.className} btn-outline-primary`}
      disabled={!disconnect && !connect}
      onClick={() => (account ? handleDisconnect() : connect?.())}
    >
      <img src="https://www.gitbook.com/cdn-cgi/image/width=24,dpr=2,height=24,fit=contain,format=auto/https%3A%2F%2F58253638-files.gitbook.io%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-legacy-files%2Fo%2Fspaces%252F-MCCsloxVgbn9ByBE-nP%252Favatar-1606910015788.png%3Fgeneration%3D1606910016108412%26alt%3Dmedia" />
      {account ? 'Disconnect Argent Wallet' : 'Connect Argent Wallet'}
    </button>
  );
};
