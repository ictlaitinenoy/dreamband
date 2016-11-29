package com.ictla.dreamband.repository;

import org.springframework.data.repository.PagingAndSortingRepository;

import com.ictla.dreamband.domain.Player;

public interface PlayerRepository extends PagingAndSortingRepository<Player, Long> {

}
