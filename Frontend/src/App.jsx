import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { PageMenu } from './components/PageMenu';
import { MainPage } from './Pages/MainPage';
import { CategoriesPage } from './Pages/CategoriesPage';
import { ProductsPage } from './Pages/ProductsPage';
import { ContactPage } from './Pages/ContactPage';
import { FormPage } from './Pages/FormPage';
import { BuyPage } from './Pages/BuyPage';

import { CategoryPageProvider } from './hooks/useCategoryPage';
import { SelectProductProvider } from './hooks/useSelectProduct';

import './App.scss';

function App() {
  return (
    <SelectProductProvider>
      <CategoryPageProvider>
        <BrowserRouter >
          <PageMenu />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/categorias" element={<CategoriesPage />} />
            <Route path="/produtos" element={<ProductsPage />} />
            <Route path="/contato" element={<ContactPage />} />
            <Route path="/formulario" element={<FormPage />} />
            <Route path="/comprar" element={<BuyPage />} />
          </Routes>
        </BrowserRouter>
      </CategoryPageProvider>
    </SelectProductProvider>
  );
}

export default App;
