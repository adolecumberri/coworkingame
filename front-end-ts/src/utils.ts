import { API_URL } from "./constants";
import { IAccount } from "./interface/IAccount";
import { decode } from "jsonwebtoken";
import { ITokenPayload } from "./interface/ITokenPayLoad";

/* Tipado de entrada de atributos*/
export const myFetch = async ({
  method = "GET",
  path,
  obj,
  token
}: {
  path: string;
  method?: "GET" | "POST";
  obj?: Object;
  token?: string;
}) => {
  const response = await fetch(API_URL + path, {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : ""
    },
    body: obj ? JSON.stringify(obj) : undefined
  });
  try {
    const json = await response.json();
    return json;
  } catch {
    return null;
  }
};

export const generateAccountFromToken = (token: string): IAccount => {
  const { id, name, header, isAdmin } = decode(token) as ITokenPayload;
  return { token, id, name, header, isAdmin };
};
