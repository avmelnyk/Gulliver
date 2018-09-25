package ua.pp.avmelnyk.gulliver.api;

public class Product {

    private long product_id;
    private String category;
    private String code;
    private String name;
    private double price;

    public Product(long product_id, String category, String code, String name, Long price) {
        this.product_id = product_id;
        this.category = category;
        this.code = code;
        this.name = name;
        this.price = price;
    }

    public long getProduct_id() {
        return product_id;
    }

    public void setProduct_id(long product_id) {
        this.product_id = product_id;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public boolean equals(Object object) {
        if (this == object) return true;
        if (object == null || getClass() != object.getClass()) return false;
        if (!super.equals(object)) return false;

        Product product = (Product) object;

        if (product_id != product.product_id) return false;
        if (Double.compare(product.price, price) != 0) return false;
        if (category != null ? !category.equals(product.category) : product.category != null) return false;
        if (code != null ? !code.equals(product.code) : product.code != null) return false;
        if (name != null ? !name.equals(product.name) : product.name != null) return false;

        return true;
    }

    public int hashCode() {
        int result = super.hashCode();
        long temp;
        result = 31 * result + (int) (product_id ^ (product_id >>> 32));
        result = 31 * result + (category != null ? category.hashCode() : 0);
        result = 31 * result + (code != null ? code.hashCode() : 0);
        result = 31 * result + (name != null ? name.hashCode() : 0);
        temp = Double.doubleToLongBits(price);
        result = 31 * result + (int) (temp ^ (temp >>> 32));
        return result;
    }

    @java.lang.Override
    public java.lang.String toString() {
        return "Product{" +
                "product_id=" + product_id +
                ", category='" + category + '\'' +
                ", code='" + code + '\'' +
                ", name='" + name + '\'' +
                ", price=" + price +
                '}';
    }
}
