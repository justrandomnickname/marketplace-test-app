import { EXPIRE_SESSION_MINUTES, ONE_MINUTE_IN_MS } from "./constants";

class ShoppingCartSessionService {
  getIds() {
    const expireTime = sessionStorage.getItem("cart_expire");

    if (!expireTime || new Date() > new Date(expireTime)) {
      sessionStorage.removeItem("cart_expire");
      sessionStorage.removeItem("cart");

      return null;
    }

    return sessionStorage.getItem("cart")?.split(",");
  }

  setNewItem(id: number) {
    const items = sessionStorage.getItem("cart");
    const newItems = `${items ? items : ""},${id}`;

    const newExpireTime = new Date(
      new Date().getTime() + ONE_MINUTE_IN_MS * EXPIRE_SESSION_MINUTES
    );

    sessionStorage.setItem("cart_expire", newExpireTime.toISOString());
    sessionStorage.setItem("cart", newItems);
  }
}

export default new ShoppingCartSessionService();
