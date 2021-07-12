package net.javaguides.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.javaguides.springboot.model.partner;
import net.javaguides.springboot.repository.PartnerRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/")
public class PartnerController {
	@Autowired
	private PartnerRepository partnerRepsitory;
	
	@GetMapping("partners")
	public List<partner> getPartners()
	{
		return this.partnerRepsitory.findAll();
	}
}
