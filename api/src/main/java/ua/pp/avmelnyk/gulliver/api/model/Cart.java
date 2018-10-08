package ua.pp.avmelnyk.gulliver.api.model;

import java.util.ArrayList;
import java.util.Objects;
import java.util.UUID;

public class Cart {

    public UUID cart_id;
    private ArrayList<String>products;

    public Cart(UUID cart_id, ArrayList<String> products) {
        this.cart_id = cart_id;
        this.products = products;
    }

    public UUID getCart_id() {
        return cart_id;
    }

    public void setCart_id(UUID cart_id) {
        this.cart_id = cart_id;
    }

    public ArrayList<String> getProducts() {
        return products;
    }

    public void setProducts(ArrayList<String> products) {
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
