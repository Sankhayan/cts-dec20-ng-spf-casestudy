package com.treADMile.caseStudy.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.treADMile.caseStudy.DTO.Contact;
@Repository
public interface ContactRepo extends JpaRepository<Contact, Long>{
	List<Contact> findByUserId(String userId);
}
