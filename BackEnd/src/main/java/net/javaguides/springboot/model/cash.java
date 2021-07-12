package net.javaguides.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name = "cash")
public class cash {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name ="total")
	private String total;
	
	@Column(name ="time")
	private String time;

	@Column(name ="recieve")
	private String recieve;
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTotal() {
		return total;
	}

	public void setTotal(String total) {
		this.total = total;
	}

	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}

	public String getRecieve() {
		return recieve;
	}

	public void setRecieve(String recieve) {
		this.recieve = recieve;
	}

	public String getBranch() {
		return branch;
	}

	public void setBranch(String branch) {
		this.branch = branch;
	}

	@Column(name ="branch")
	private String branch;

	public cash() {
		
	}
	
	public cash(String total, String time, String recieve, String branch) {
		super();
		this.total = total;
		this.time = time;
		this.recieve = recieve;
		this.branch = branch;
	}
	
	
}
