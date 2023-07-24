
import Countries from '../components/Countries'
import WhoWeAre from '../components/WhoWeAre'
import { useEffect, useState } from 'react'
import AutoplayVideo from '../components/AutoplayVideo'
import Loader from '../components/Loader'
import Test from '../components/Test'
import FeatuersSecond from '../components/FeatuersSecond'
import GlobalConnection from '../components/GlobalConnection'
import ThreeDiv from '../components/ThreeDiv'






const Home = () => {

  const [loader, setloader] = useState(true)
  useEffect(() => {
    setloader(false)
  }, []);

  return (
    <>
      {loader ? <Loader /> :
        <>

          <AutoplayVideo />
          <WhoWeAre />
          <Countries />
          <FeatuersSecond />
          <Test />
          <GlobalConnection />
          <ThreeDiv />
        </>
      }
    </>
  )
}

export default Home


