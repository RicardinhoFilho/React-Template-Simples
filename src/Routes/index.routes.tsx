import React from "react";
import { useEntidade } from "../Hooks/EntidadeHook";



  import { app_base_url } from "../Utils/Urls";
import { AuthRoutes } from "./auth.routes";
export const Routes = () => {
    const{entidade,token} = useEntidade();
  return (
    <>
     {entidade.id? "" :  <AuthRoutes/>}
     
    </>
  );
};