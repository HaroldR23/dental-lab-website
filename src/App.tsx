import './App.css'
import Carousel from './components/molecules/Carousel/Carousel'

function App() {
  const BASE_URL = 'https://i.imgur.com/';

  return (
    <div>
      <Carousel autoplay={false} imgUrls={[`${BASE_URL}oflkwza.png`, `${BASE_URL}LUt2uEP.png`, `${BASE_URL}BBJVCPI.png`]}/>
    </div>
  )
}

export default App
