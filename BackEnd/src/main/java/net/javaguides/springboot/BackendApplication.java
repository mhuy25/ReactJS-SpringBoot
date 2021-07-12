package net.javaguides.springboot;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import net.javaguides.springboot.model.product;
import net.javaguides.springboot.repository.ProductRepsitory;

import net.javaguides.springboot.model.transfer;
import net.javaguides.springboot.repository.TransferRepository;

import net.javaguides.springboot.model.employee;
import net.javaguides.springboot.repository.EmployeeRepository;

import net.javaguides.springboot.model.cash;
import net.javaguides.springboot.repository.CashRepository;

import net.javaguides.springboot.model.partner;
import net.javaguides.springboot.repository.PartnerRepository;

@SpringBootApplication
public class BackendApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

	@Autowired
	private ProductRepsitory productRepsitory;
	
	@Autowired
	private TransferRepository transferRepository;
	
	@Autowired
	private EmployeeRepository employeeRepository;
	
	@Autowired
	private CashRepository cashRepository;
	
	@Autowired
	private PartnerRepository partnerRepository;
	
	@Override
	public void run(String... args) throws Exception {
		this.productRepsitory.save(new product("xi măng", 100, 400000, 200000));
		this.productRepsitory.save(new product("cát", 100, 300000, 100000));
		this.productRepsitory.save(new product("gạch", 100, 300000, 100000));
		
		this.transferRepository.save(new transfer(1,"30.000.000","25-11-2020","Quận 1"));
		this.transferRepository.save(new transfer(1,"50.000.000","22-04-2021","Quận 1"));
		this.transferRepository.save(new transfer(1,"200.000.000","22-04-2021","Quận 1"));
		this.transferRepository.save(new transfer(1,"500.000.000","23-04-2021","Quận 1"));
		
		this.employeeRepository.save(new employee("Phạm Nguyễn Minh Huy","Nam","CEO","Quận 1"));
		this.employeeRepository.save(new employee("Phạm Đình Khoa","Nam","Thư ký","Quận 1"));
		this.employeeRepository.save(new employee("Lê Độ Quang Huy","Nam","Nhân viên tư vấn","Quận 1"));
		this.employeeRepository.save(new employee("Huỳnh Bá Bảo","Nam","Nhân viên chăm sóc khách hàng","Quận 1"));
	
		this.cashRepository.save(new cash("300.000.000","25-04-2020","Phạm Nguyễn Minh Huy","Quận 1"));
		this.cashRepository.save(new cash("500.000.000","25-07-2020","Phạm Nguyễn Minh Huy","Quận 1"));
		this.cashRepository.save(new cash("700.000.000","25-09-2020","Phạm Nguyễn Minh Huy","Quận 1"));
		this.cashRepository.save(new cash("1.000.000.000","22-04-2021","Phạm Nguyễn Minh Huy","Quận 1"));
	
		this.partnerRepository.save(new partner("Xi măng Hà Tiên","0123456789","Hà Tiên","Confirmed"));
		this.partnerRepository.save(new partner("Cát Vũng Tàu","0912345678","Vũng Tàu","Confirmed"));
		this.partnerRepository.save(new partner("Gạch SGU","0789513687","Hồ Chí Minh","Confirmed"));
		this.partnerRepository.save(new partner("Ngói Nha Trang","08564782145","Nha Trang","Confirmed"));
	}

}
