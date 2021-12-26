import { createContext, useState, useContext } from 'react';



export const SelectProductContext = createContext();

export function SelectProductProvider({children}){

    const [selectedProduct, setSelectedProduct] = useState(0);

    function handleSelectProduct(value){
        setSelectedProduct(value);
        console.log(selectedProduct)
    }

    return (
        <SelectProductContext.Provider value={{selectedProduct, handleSelectProduct}}>
            {children}
        </SelectProductContext.Provider>
    )
}

export function useSelectProduct(){
    const context = useContext(SelectProductContext);

    return context;
}