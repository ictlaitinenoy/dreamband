package com.ictla.dreamband.preload;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.ictla.dreamband.domain.Band;
import com.ictla.dreamband.repository.BandRepository;

@Component
public class DatabaseLoader implements CommandLineRunner {

    private final BandRepository bandRepository;

    @Autowired
    public DatabaseLoader(BandRepository repository) {
	this.bandRepository = repository;
    }

    @Override
    public void run(String... strings) throws Exception {
	this.bandRepository.save(new Band("Iron Maiden"));
	this.bandRepository.save(new Band("Dio"));
    }
}