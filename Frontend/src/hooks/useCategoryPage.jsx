import { createContext, useState, useContext } from 'react';



export const CategoryPageContext = createContext();

export function CategoryPageProvider({children}){

    const [pageValue, setPageValue] = useState(0);

    function selectPage(value){
        setPageValue(value);
    }

    return (
        <CategoryPageContext.Provider value={{pageValue, selectPage}}>
            {children}
        </CategoryPageContext.Provider>
    )
}

export function useCategoryPage(){
    const context = useContext(CategoryPageContext);

    return context;
}