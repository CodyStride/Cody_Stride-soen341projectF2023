import PocketBase from "pocketbase";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";

export const POCKET_BASE_URL = "http://127.0.0.1:8090";

export class DatabaseServer {
  client: PocketBase;
  clientId?: string;

  constructor() {
    this.client = new PocketBase(POCKET_BASE_URL);
  }

  async authenticate(email: string, password: string) {
    try {
      const result = await this.client
        .collection("users")
        .authWithPassword(email, password);
      console.log("authenticate result:", result);
      if (!result?.token) {
        throw new Error("Invalid email or password");
      }
      this.clientId = result.record.id;
      return result;
    } catch (err) {
      console.error(err);
      throw new Error("Invalid email or password");
    }
  }

  async register(email: string, password: string) {
    try {
      const result = await this.client.collection("users").create({
        email,
        password,
        passwordConfirm: password,
      });

      return result;
    } catch (err) {
      console.log(err);
    }
  }

  async isAuthenticated(cookieStore: ReadonlyRequestCookies) {
    const cookie = cookieStore.get("pb_auth");
    if (!cookie) {
      return false;
    }

    this.client.authStore.loadFromCookie(cookie?.value || "");
    return this.client.authStore.isValid || false;
  }

  async getUser(cookieStore: ReadonlyRequestCookies) {
    const cookie = cookieStore.get("pb_auth");
    if (!cookie) {
      return false;
    }

    this.client.authStore.loadFromCookie(cookie?.value || "");
    return this.client.authStore.model;
  }
}

export const db = new DatabaseServer();

export default db;
