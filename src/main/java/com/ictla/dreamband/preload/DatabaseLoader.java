package com.ictla.dreamband.preload;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.ictla.dreamband.domain.Band;
import com.ictla.dreamband.domain.Player;
import com.ictla.dreamband.repository.BandRepository;
import com.ictla.dreamband.repository.PlayerRepository;

@Component
public class DatabaseLoader implements CommandLineRunner {

    private final BandRepository bandRepository;
    private final PlayerRepository playerRepository;

    @Autowired
    public DatabaseLoader(BandRepository bandRepository, PlayerRepository playerRepository) {
	this.bandRepository = bandRepository;
	this.playerRepository = playerRepository;
    }

    @Override
    public void run(String... strings) throws Exception {
	this.bandRepository.save(new Band("Iron Maiden"));
	this.bandRepository.save(new Band("Dio"));

	this.playerRepository.save(new Player("Adrian Smith"));
	this.playerRepository.save(new Player("Nicko McBrain"));
	this.playerRepository.save(new Player("Steve Harris"));
	this.playerRepository.save(new Player("Dave Murray"));
	this.playerRepository.save(new Player("Bruce Dickinson"));
	this.playerRepository.save(new Player("Vivian Campbell"));
	this.playerRepository.save(new Player("Vinny Appice"));
	this.playerRepository.save(new Player("Ronnie James Dio"));
	this.playerRepository.save(new Player("Jimmy Bain"));
    }
}