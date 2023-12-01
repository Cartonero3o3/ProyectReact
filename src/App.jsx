import './App.css';
import Cards from './componentes/cards';
import MiProvider from './context/MiProvider';
import Nadvar from "./componentes/nadvariño"

function App() {
	return (
		<MiProvider>
			<Nadvar/>
			<Cards />
		</MiProvider>
	);
}

export default App;
