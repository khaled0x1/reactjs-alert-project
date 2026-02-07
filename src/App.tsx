import { Ban } from 'lucide-react';
import './App.css'
import Alert from './components/ui/Alert'

function App() {
  return (
    <div style={{margin:"2rem"}}>

      <Alert 
        type={"alert-success"} 
        title={'something'} 
        icon={<Ban size={20} />}>
        <p>
            asfjsa klfjsamfoilkjsaf mksalfmsafm
            asfjsak asfjsaklfjsamfoilk 
            asfjsaklfjsamfoilkjs<a href="/">LINKKKK</a> afmksalfmsafm jsafmksalfmsafm lfjsamfoilkjsa fmksalfmsafm
        </p>
      </Alert>
      

      <Alert type={"alert-error"} title={'something'} icon={<Ban size={20} />} description={'meow'}  />
    </div>
  )
}

export default App;
