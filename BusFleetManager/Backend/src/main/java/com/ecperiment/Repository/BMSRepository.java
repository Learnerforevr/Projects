package com.ecperiment.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Repository;

import com.ecperiment.Model.BMS;

import jakarta.transaction.Transactional;

import java.util.List;


@Repository
public interface BMSRepository extends JpaRepository<BMS, String> {
		
	public BMS findByBusNumber(String busNumber);
	@Transactional
	@Modifying
	public void deleteByBusNumber(String busNumber);
		
}
