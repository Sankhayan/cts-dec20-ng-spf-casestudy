package com.treADMile.caseStudy.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.treADMile.caseStudy.DTO.Contact;
import com.treADMile.caseStudy.DTO.User;
import com.treADMile.caseStudy.repository.ContactRepo;
import com.treADMile.caseStudy.repository.UserRepo;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/contactApp/*")
public class ContactAppController {

//	@Autowired
//	private User user;

	@Autowired
	private UserRepo userRepo;

	@Autowired
	private ContactRepo contactRepo;
	
	@PostMapping("/register")
	public long register(@RequestBody User newUser) {
		User newuser = userRepo.save(newUser);
		return newuser.getUserId();
	}

	@PostMapping("/login")
	public long login(@RequestParam long userId, @RequestParam String userPassword) {
		User loggedInUser = null;
		if (userId != 0 && userPassword != null) {
			loggedInUser = userRepo.findByUserIdAndUserPassword(userId, userPassword);
			if (loggedInUser != null) {
				return loggedInUser.getUserId();
			}
		}
		return 0;
	}

	@PutMapping("/editProfile")
	public User editProfile(@RequestBody User newUser) {
		userRepo.save(newUser);
		return userRepo.save(newUser);
	}

	@PostMapping("/addContacts")
	public Contact addContacts(@RequestBody Contact newContact) {
		return contactRepo.save(newContact);
	}

	@PostMapping("/viewAllContacts")
	public List<Contact> viewAllContacts(@RequestParam String userId) {
		return contactRepo.findByUserId(userId);
	}
	
	@PostMapping("/editContacts")
	public List<Contact> editContacts(@RequestParam String userId) {
		return contactRepo.findByUserId(userId);
	}

	@DeleteMapping("/deleteContacts")
	public long deleteContacts(@RequestParam long contactId) {
		contactRepo.deleteById(contactId);
		return contactId;
	}

	@DeleteMapping("/deleteProfile")
	public long deleteProfile(@RequestParam long userId) {
		userRepo.deleteById(userId);
		return userId;
	}
}
