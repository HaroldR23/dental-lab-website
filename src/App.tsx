import './App.css'
import AnchorItem from './components/atoms/AnchorItem/AnchorItem';
import Carousel from './components/molecules/Carousel/Carousel'

function App() {
  const BASE_URL = 'https://i.imgur.com/';

  return (
    <div>
      <Carousel autoplay={false} imgUrls={[`${BASE_URL}oflkwza.png`, `${BASE_URL}LUt2uEP.png`, `${BASE_URL}BBJVCPI.png`]}/>
      <AnchorItem id='5'/>
    </div>
  )
}

export default App
