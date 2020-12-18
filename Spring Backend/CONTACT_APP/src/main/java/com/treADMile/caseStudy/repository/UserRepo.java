package com.treADMile.caseStudy.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.treADMile.caseStudy.DTO.User;
@Repository
public interface UserRepo extends JpaRepository<User, Long>{
	 public User findByUserIdAndUserPassword(long userId, String userPassword);
}
