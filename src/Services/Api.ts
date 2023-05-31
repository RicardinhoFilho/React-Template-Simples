import axios from "axios";
import { app_base_url } from "../Utils/Urls";

export const ASSINATURA_DIGITAL_API =  axios.create({
  baseURL: app_base_url,
});