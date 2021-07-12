package net.javaguides.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.javaguides.springboot.model.partner;
@Repository
public interface PartnerRepository extends JpaRepository<partner, Long> {

}
