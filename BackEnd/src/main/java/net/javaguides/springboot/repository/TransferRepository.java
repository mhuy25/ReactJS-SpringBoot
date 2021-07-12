package net.javaguides.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.javaguides.springboot.model.transfer;
@Repository
public interface TransferRepository extends JpaRepository<transfer, Long> {

}
