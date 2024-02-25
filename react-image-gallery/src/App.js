import WSPGallery from './components/WSPGallery';
import './App.css';

function App() {

  const galleryImages = [
    {
      img: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      img: "https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      img: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      img: "https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      img: "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      img: 'https://th.bing.com/th/id/OIP.WSCJmlPib2qzqk0A6jQpCAAAAA?w=270&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7'
    },
  ]

  return (
    <div className="App">
      <h1 className='heading'>Responsive Image Gallery with React JS</h1>

      <WSPGallery
        galleryImages={galleryImages}
      />
    </div >
  );
}

export default App;
