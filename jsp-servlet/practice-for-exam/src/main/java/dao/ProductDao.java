package dao;

import model.Product;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

    public  class ProductDao  {
    Map<Integer, Product> products=new HashMap<>();
    public ProductDao()
    {
        products.put(1,new Product(generateId(),"RandomPro",122345345));
        products.put(2,new Product(generateId(),"RandomPro",205285435));
        products.put(3,new Product(generateId(),"RandomPro",214843565));
    }
    public int generateId()
    {
        int id=products.size()+1;
        return id;
    }
    public void deleteProduct(int id)
    {
        products.remove(id);
    }
    public void addProduct(Product product)
    {
        products.put(generateId(),product);
    }
   public List<Product> getAllProducts()
   {
       return new ArrayList<>(products.values());
   }
}
