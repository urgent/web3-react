import {useState, useEffect} from 'react'
import MetaMaskCard from '../components/connectors/MetaMaskCard'
import ProviderExample from '../components/ProviderExample'
import { NftSwapV4 } from '@traderxyz/nft-swap-sdk'
import { hooks, metaMask } from '../connectors/metaMask'

export default function Home() {
  const [nftSwap, setNftSwap] = useState<boolean | NftSwapV4>(false)
  const { useChainId, useProvider } = hooks
  const chainId = useChainId()
  const provider = useProvider()
  
  useEffect(()  => {
    if(provider) {
      setNftSwap(new NftSwapV4(provider, provider.getSigner(), chainId as number))
    }
  }, [provider, chainId])
  
  return (
    <>
      <ProviderExample />
      <div style={{ display: 'flex', flexFlow: 'wrap', fontFamily: 'sans-serif' }}>
        <MetaMaskCard />
      </div>
      <button onClick={(()=>{ console.log(nftSwap)})}>test</button>
    </>
  )
}
