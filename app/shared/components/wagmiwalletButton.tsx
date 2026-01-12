import { ConnectButton } from "@rainbow-me/rainbowkit";

const WalletButton = () => {
    return (
        <ConnectButton.Custom>
            {({account, chain, openAccountModal, openConnectModal, mounted}) => {
                const isReady = mounted;
                const isConnected = account && chain && isReady
                return (<div>
                    { isConnected ? (
                      
                        <button onClick={openAccountModal}>
                            Открыть аккаунт
                        </button>
                      
                    ) : (
                        <div>
                            <button onClick={openConnectModal}>
                                коннект валлет
                            </button>
                        </div>
                    )  
                    }
                    
                    </div>
                )
            }}
        </ConnectButton.Custom>
    )
}

export default WalletButton