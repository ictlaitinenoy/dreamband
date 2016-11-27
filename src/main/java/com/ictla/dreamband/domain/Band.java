package com.ictla.dreamband.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class Band {

    @SuppressWarnings("unused")
    private Band() {

    }

    public Band(String name) {
	this.name = name;
    }

    private @Id @GeneratedValue Long id;
    private String name;

    public Long getId() {
	return id;
    }

    public void setId(Long id) {
	this.id = id;
    }

    public String getName() {
	return name;
    }

    public void setName(String name) {
	this.name = name;
    }

}
