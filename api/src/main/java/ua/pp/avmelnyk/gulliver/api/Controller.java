package ua.pp.avmelnyk.gulliver.api;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/api")
@RestController
public class Controller {

    @RequestMapping(method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
    public ua.pp.avmelnyk.gulliver.api.Product index() {
        return new ua.pp.avmelnyk.gulliver.api.Product(123l, "category", "123456", "Product", 100l);
    }

}
