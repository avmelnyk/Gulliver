package ua.pp.avmelnyk.gulliver.api;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import ua.pp.avmelnyk.gulliver.api.model.Cart;
import ua.pp.avmelnyk.gulliver.api.model.Product;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@RequestMapping("/api")
@RestController
public class Controller {
    private Map<UUID, Cart> carts = new HashMap<>();

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

    @PostMapping("/carts")
    public Cart createCart(@RequestParam("pid") Long product_id, @RequestParam("qty") int quantity ){
        Cart cart = new Cart(UUID.randomUUID(), new HashMap<>());
        cart.getProducts().put(getProduct(product_id), quantity);
        carts.put(cart.getCart_id(), cart);
        return cart;
    }

    @GetMapping("/carts/{cart_id}")
    public  Cart getCart(@PathVariable UUID cart_id){
        return carts.get(cart_id);
    }

    @PutMapping("/carts/{cart_id}")
    public Cart changeCart(@PathVariable UUID cart_id, @RequestParam("pid") Long product_id, @RequestParam("qty") int quantity){
        Cart cart =  carts.get(cart_id);
        cart.getProducts().put(getProduct(product_id), quantity);
        carts.put(cart_id, cart);
        return cart;
    }

}
