package net.javaguides.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.javaguides.springboot.model.cash;
import net.javaguides.springboot.repository.CashRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/")
public class CashController {

	@Autowired
	private CashRepository cashRepsitory;
	
	@GetMapping("cashs")
	public List<cash> getCashs()
	{
		return this.cashRepsitory.findAll();
	}
}
