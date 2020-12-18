package com.treADMile.caseStudy.DTO;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "contact")
public class Contact {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "contactId")
	private long contactId;
	@Column(name = "contactName")
	private String contactName;
	@Column(name = "contactNumber")
	private String contactNumber;
	@Column(name = "userId")
	private long userId;

	public long getContactId() {
		return contactId;
	}

	public long getUserId() {
		return userId;
	}

	public String getContactName() {
		return contactName;
	}

	public void setContactName(String contactName) {
		this.contactName = contactName;
	}

	public String getContactNumber() {
		return contactNumber;
	}

	public void setContactNumber(String contactNumber) {
		this.contactNumber = contactNumber;
	}

	public Contact(String contactName, String contactNumber) {
		super();
		this.contactName = contactName;
		this.contactNumber = contactNumber;
	}

	public Contact() {
		super();
	}

}
