package com.ictla.dreamband.repository;

import org.springframework.data.repository.CrudRepository;

import com.ictla.dreamband.domain.Band;

public interface BandRepository extends CrudRepository<Band, Long> {

}
