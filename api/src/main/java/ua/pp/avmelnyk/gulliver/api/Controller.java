package ua.pp.avmelnyk.gulliver.api;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import ua.pp.avmelnyk.gulliver.api.model.Cart;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;


@RequestMapping("/api")
@RestController
public class Controller {
    Map<UUID, Cart> carts = new HashMap<>();

    @RequestMapping(method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
    public Product index() {
        return new Product(123l, "category", "123456", "Product", 100l);
    }

    @GetMapping("/products")
    public Product[] getAllProducts(){
        Product[] products = new Product[2];
        Product product1 =  new Product(1111L, "food", "123456", "Salo", 10000L);
        Product product2 =  new Product(2222L, "food", "123456", "Bread", 10000L);
        products[0] = product1;
        products[1] = product2;
        return products;
    }

    @GetMapping("/products/{id}")
    public Product getProduct(@PathVariable Long id){
        for (Product product: getAllProducts()) {
            if (product.getProduct_id()==id){
                return product;
            }
        }
        return null;
    }

    @PostMapping("/cart")
    public Cart createCart(@RequestParam("pid") String product_id, @RequestParam("qty") int quantity ){
        Cart cart = new Cart(UUID.randomUUID(), new ArrayList<String>());
        cart.getProducts().add(product_id);
        carts.put(cart.cart_id, cart);
        return cart;
    }

    @PutMapping("/cart/{$cart_id}")
    public  Cart changeCart(@PathVariable String cart_id, @RequestParam("pid") String product_id, @RequestParam("qty") int quantity){
        Cart cart = carts.get(cart_id);
        return cart;
    }


}
