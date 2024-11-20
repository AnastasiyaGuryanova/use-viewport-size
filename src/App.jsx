import { useViewportSize } from './hooks';
import './App.css';

export const App = () => {
	const { height, width } = useViewportSize();

	return (
		<div>
			Width: {width}, height: {height}
		</div>
	);
};
