import './App.css'
// import AnchorItems from './components/molecules/Anchor/Anchor';
// import AnchorItem from './components/atoms/AnchorItem/AnchorItem';
import Carousel from './components/molecules/Carousel/Carousel'
import NavBar from './components/organisms/NavBar/NavBar';
// import Anchor from './components/organisms/Anchor';

function App() {
  const BASE_URL = 'https://i.imgur.com/';

  return (
    <div>
      <Carousel autoplay={false} imgUrls={[`${BASE_URL}oflkwza.png`, `${BASE_URL}LUt2uEP.png`, `${BASE_URL}BBJVCPI.png`]}/>
      {/* <AnchorItem id='5'/> */}
      {/* <AnchorItems anchorList={[
        { href:"#1", id:"1", title:"Products" }, 
        { href:"#2", id:"2", title:"Contact to us" },
        { href:"#3", id:"3", title:"Services" }
        ]}/> */}
      <NavBar anchorItems={
        [
          { href:"#1", id:"1", title:"Products" }, 
          { href:"#2", id:"2", title:"Contact to us" },
          { href:"#3", id:"3", title:"Services" }
          ]
      } logoUrl='https://i.imgur.com/XQR9LUp.png'/>
    </div>
  )
}

export default App
