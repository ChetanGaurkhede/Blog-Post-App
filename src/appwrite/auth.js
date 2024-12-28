import config from "../config/config";
import { Client, Account, ID } from "appwrite";

export class AuthServise {
  client = new Client();
  account;
  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId)
    this.Account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(ID.unique(), email, password, name);
      if (userAccount) {
        // return userAccount;
      } else {
        return userAccount;
      }
    } catch (error) {
      console.error(error);
    }

  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      console.error(error);
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.error("session end error:", error);
    }
    return null;
  }

  async logout() {
    try {
      return await this.account.deleteSessions('current');
    } catch (error) {
      console.error("LogOut Errr: ", error);
    }
  }
}
const authServise = new AuthServise();

export default authServise;