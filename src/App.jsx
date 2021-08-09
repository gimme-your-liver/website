import Bum from './components/Help';
import { GeistProvider, CssBaseline } from '@geist-ui/react'

function App() {
  return (
    <GeistProvider>
    <CssBaseline /> 
    <div>
      <Bum>Let's get started!</Bum>
    </div>
    <App /> 
  </GeistProvider>
    
  );
}

export default App;


