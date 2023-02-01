export default class ShopifyError extends Error {
  constructor(message: string) {
    super(message);
    this.name = `Shopify Error`;
  }
}
