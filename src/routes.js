import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Cardapio from "pages/Cardapio";
import Inicio from "pages/Inicio";
import Menu from "components/Menu";
import PaginaPadrao from "components/PaginaPadrao";
import Sobre from "pages/Sobre";
import NotFound from "pages/NotFound";
import Footer from "pages/Footer";

export default function AppRouter() {
	return (
		<main className="container">
			<Router>
				<Menu />
				<Routes>
					<Route path="/" element={<PaginaPadrao />} >
						<Route index={true} element={<Inicio />} />
						<Route path="cardapio" element={<Cardapio />} />
						<Route path="sobre" element={<Sobre />} />
					</Route>
					<Route path="*" element={<NotFound/>}> 

					</Route>
				</Routes>
				<Footer/>
			</Router>
		</main>
	);
}