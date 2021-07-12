package net.javaguides.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import net.javaguides.springboot.model.product;
import net.javaguides.springboot.repository.ProductRepsitory;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/")
public class ProductController {

	@Autowired
	private ProductRepsitory productRepsitory;
	
	@GetMapping("products")
	public List<product> getProducts()
	{
		return this.productRepsitory.findAll();
	}
}
