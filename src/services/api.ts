import axios from "axios";
import { env } from "../../env.config";

export const api = axios.create({
  baseURL: `${env.API_URL}`,
});