import React, {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
  } from "react";
 
 
  interface IEntidadeContextData {
    entidade: IEntidade;
    token:boolean | string;
   
  }
  
  interface IEntidadeProviderProps {
    children: ReactNode;
  }
  export interface IEntidade{
    id:number,

  }
  const EntidadeContext = createContext({} as IEntidadeContextData);
  
  function EntidadeProvider({ children }: IEntidadeProviderProps) {
    const[entidade,setEntidade] = useState({} as IEntidade);
    const[token,setToken] = useState(false as boolean | string);

    async function login(usuario:string,senha:string) {
            try {
                
            } catch (error) {
                
            }finally{
                
            }
    }

    return (
      <EntidadeContext.Provider
        value={{
            entidade,
            token
        }}
      >
        <>
          {children}
          
        </>
      </EntidadeContext.Provider>
    );
  }
  
  function useEntidade() {
    const context = useContext(EntidadeContext);
  
    return context;
  }
  
  export { EntidadeProvider, useEntidade };