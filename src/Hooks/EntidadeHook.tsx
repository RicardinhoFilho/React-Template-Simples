import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Loader } from "../Components/Loader";
import { Alert } from "../Components/Modal/Alert";

interface IEntidadeContextData {
  entidade: IEntidade;
  token: boolean | string;
  login: (usuario: string, senha: string) => Promise<void>;
}

interface IEntidadeProviderProps {
  children: ReactNode;
}
export interface IEntidade {
  id: number;
}
const EntidadeContext = createContext({} as IEntidadeContextData);

function EntidadeProvider({ children }: IEntidadeProviderProps) {
  const [entidade, setEntidade] = useState({} as IEntidade);
  const [token, setToken] = useState(false as boolean | string);
  const [alert, setAlert] = useState({ titulo: "", mensagem: "" });
  const [loading, setLoading] = useState(false);

  async function login(usuario: string, senha: string) {
    try {
      setLoading(true);
    } catch (error) {
      setAlert({ titulo: "Ops", mensagem: "Não foi possível efeturar login!" });
    } finally {
      setLoading(false);
    }
  }

  return (
    <EntidadeContext.Provider
      value={{
        entidade,
        token,
        login,
      }}
    >
      <>
        {children}

        <Loader loading={loading} />
        <Alert
          alert={alert}
          onClose={() => setAlert({ titulo: "", mensagem: "" })}
          open={alert.mensagem.length > 0}
        />
      </>
    </EntidadeContext.Provider>
  );
}

function useEntidade() {
  const context = useContext(EntidadeContext);

  return context;
}

export { EntidadeProvider, useEntidade };
