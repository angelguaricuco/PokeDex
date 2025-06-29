import { BrowserRouter } from 'react-router';
import { createRoot } from 'react-dom/client';
import NameProvider from './providers/NameProvider.jsx';
import App from './routes/App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
	<NameProvider>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</NameProvider>,
);
