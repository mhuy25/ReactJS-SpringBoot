package net.javaguides.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import net.javaguides.springboot.model.transfer;
import net.javaguides.springboot.repository.TransferRepository;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/")
public class TransferController {
	@Autowired
	private TransferRepository transferRepository;
	
	@GetMapping("transfers")
	public List<transfer> getTransfers()
	{
		return this.transferRepository.findAll();
	}
}
