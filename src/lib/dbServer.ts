import PocketBase from "pocketbase";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import { APP_DATABASE } from "@/lib/dbNames";
import { ISignUpPayload, UserAuthModel } from "@/types/property";

export const POCKET_BASE_URL = "https://cody-stridy.pockethost.io";

export class DatabaseServer {
  client: PocketBase;

  constructor() {
    this.client = new PocketBase(POCKET_BASE_URL);
    this.client.autoCancellation(false);
  }

  async authenticate(email: string, password: string) {
    try {
      const result = await this.client
        .collection(APP_DATABASE.USERS)
        .authWithPassword(email, password);

      console.log("authenticate result:", result);

      if (!result?.token) {
        throw new Error("Invalid email or password");
      }

      return result;
    } catch (err) {
      console.error(err);
      throw new Error("Invalid email or password");
    }
  }

  async register<T>(payload: ISignUpPayload) {
    const { email, password, type, name } = payload;
    try {
      const result = await this.client
        .collection(APP_DATABASE.USERS)
        .create<T>({
          email,
          password,
          passwordConfirm: password,
          type,
          name,
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
      return undefined;
    }

    this.client.authStore.loadFromCookie(cookie?.value || "");
    return this.client.authStore.model as UserAuthModel;
  }
}

export const db = new DatabaseServer();

export default db;
