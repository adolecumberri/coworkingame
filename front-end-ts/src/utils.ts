import { API_URL } from "./constants";
import { IAccount } from "./interface/IAccount";
import { decode } from "jsonwebtoken";
import { ITokenPayload } from "./interface/ITokenPayload";

/* Tipado de entrada de atributos*/
export const myFetch = async ({
  method = "GET",
  path,
  obj,
  token
}: {
  path: string;
  method?: "GET" | "POST" | "PUT" | "DELETE";
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

export const myLocalStorage = (key: string, value: string) => {
  const now = new Date();

  const item = {
    value: value,
    expiry: now.getTime() + 86400000
  };

  localStorage.setItem(key, JSON.stringify(item));
};

export const generateAccountFromToken = (token: string): IAccount => {
  const { id, name, header, isAdmin } = decode(token) as ITokenPayload;
  return { token, id, name, header, isAdmin };
};
