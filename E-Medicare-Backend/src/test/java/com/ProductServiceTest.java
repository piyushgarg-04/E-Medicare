package com;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import com.bean.Product;
import com.repository.ProductRepository;
import com.service.ProductService;

public class ProductServiceTest {

    @Mock
    private ProductRepository productRepository;

    @InjectMocks
    private ProductService productService;

    @BeforeEach
    public void init() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void testStoreProduct() {
        Product product = new Product();
        when(productRepository.save(product)).thenReturn(product);
        String result = productService.storeProduct(product);
        assertEquals("Product details stored", result);
    }

    @Test
    public void testGetAllProducts() {
        List<Product> productList = new ArrayList<>();
        when(productRepository.findAll()).thenReturn(productList);
        List<Product> result = productService.getAllProducts();
        assertEquals(productList, result);
    }

    @Test
    public void testFindProductByIdWhenProductExists() {
        int pid = 1;
        Product product = new Product();
        product.setPid(pid);
        Optional<Product> optionalProduct = Optional.of(product);
        when(productRepository.findById(pid)).thenReturn(optionalProduct);
        String result = productService.findProductById(pid);
        assertEquals(product.toString(), result);
    }

    @Test
    public void testFindProductByIdWhenProductDoesNotExist() {
        int pid = 1;
        Optional<Product> optionalProduct = Optional.empty();
        when(productRepository.findById(pid)).thenReturn(optionalProduct);
        String result = productService.findProductById(pid);
        assertEquals("Product not present", result);
    }

    @Test
    public void testFindProductByPrice() {
        float price = 100.0f;
        List<Product> productList = new ArrayList<>();
        when(productRepository.findProductByPrice(price)).thenReturn(productList);
        List<Product> result = productService.findProductByPrice(price);
        assertEquals(productList, result);
    }

    @Test
    public void testDeleteProductWhenProductExists() {
        int pid = 1;
        Product product = new Product();
        product.setPid(pid);
        Optional<Product> optionalProduct = Optional.of(product);
        when(productRepository.findById(pid)).thenReturn(optionalProduct);
        String result = productService.deleteProduct(pid);
        assertEquals("Product deleted successfully", result);
        verify(productRepository, times(1)).delete(product);
    }

    @Test
    public void testDeleteProductWhenProductDoesNotExist() {
        int pid = 1;
        Optional<Product> optionalProduct = Optional.empty();
        when(productRepository.findById(pid)).thenReturn(optionalProduct);
        String result = productService.deleteProduct(pid);
        assertEquals("Product not present", result);
        verify(productRepository, never()).delete(any(Product.class));
    }

    @Test
    public void testUpdateProductWhenProductExists() {
        int pid = 1;
        Product existingProduct = new Product();
        existingProduct.setPid(pid);
        Optional<Product> optionalProduct = Optional.of(existingProduct);
        Product updatedProduct = new Product();
        updatedProduct.setPid(pid);
        updatedProduct.setPrice(200.0f);
        updatedProduct.setUrl("newUrl");
        updatedProduct.setType("newType");
        updatedProduct.setDescription("newDescription");

        when(productRepository.findById(pid)).thenReturn(optionalProduct);
        when(productRepository.saveAndFlush(existingProduct)).thenReturn(existingProduct);

        String result = productService.updateProduct(updatedProduct);

        assertEquals("Product updated successfully", result);
        assertEquals(200.0f, existingProduct.getPrice());
        assertEquals("newUrl", existingProduct.getUrl());
        assertEquals("newType", existingProduct.getType());
        assertEquals("newDescription", existingProduct.getDescription());
    }

    @Test
    public void testUpdateProductWhenProductDoesNotExist() {
        int pid = 1;
        Optional<Product> optionalProduct = Optional.empty();
        Product updatedProduct = new Product();
        updatedProduct.setPid(pid);
        String result = productService.updateProduct(updatedProduct);
        assertEquals("Product not present", result);
    }
}
