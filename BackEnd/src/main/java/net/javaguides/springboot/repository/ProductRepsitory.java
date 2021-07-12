package net.javaguides.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.javaguides.springboot.model.product;
@Repository
public interface ProductRepsitory  extends JpaRepository<product, Long> {

}
