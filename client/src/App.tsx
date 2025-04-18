import { BrowserRouter } from 'react-router-dom';
import { RootRouter } from './Router/RootRouter';
import ReactQueryProvider from './providers/RQProvider';
import './App.scss'

function App() {
  return (
    <ReactQueryProvider>
      <BrowserRouter>
        <RootRouter />
      </BrowserRouter>
    </ReactQueryProvider>
  )
}

export default App;
