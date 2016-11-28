package com.ictla.dreamband.repository;

import org.springframework.data.repository.CrudRepository;

import com.ictla.dreamband.domain.Player;

public interface PlayerRepository extends CrudRepository<Player, Long> {

}
