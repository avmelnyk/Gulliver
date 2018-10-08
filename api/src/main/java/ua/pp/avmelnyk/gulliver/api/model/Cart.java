package ua.pp.avmelnyk.gulliver.api.model;

import java.util.HashMap;

import java.util.Objects;
import java.util.UUID;

public class Cart {
    private UUID cart_id;
    private HashMap<Product, Integer>products;

    public Cart(UUID cart_id, HashMap<Product, Integer> products) {
        this.cart_id = cart_id;
        this.products = products;
    }

    public UUID getCart_id() {
        return cart_id;
    }

    public void setCart_id(UUID cart_id) {
        this.cart_id = cart_id;
    }

    public HashMap<Product, Integer> getProducts() {
        return products;
    }

    public void setProducts(HashMap<Product, Integer> products) {
        this.products = products;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Cart cart = (Cart) o;
        return Objects.equals(cart_id, cart.cart_id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(cart_id);
    }

    @Override
    public String toString() {
        return "Cart{" +
                "cart_id=" + cart_id +
                ", products=" + products +
                '}';
    }
}
