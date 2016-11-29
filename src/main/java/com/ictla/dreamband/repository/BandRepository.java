package com.ictla.dreamband.repository;

import org.springframework.data.repository.PagingAndSortingRepository;

import com.ictla.dreamband.domain.Band;

public interface BandRepository extends PagingAndSortingRepository<Band, Long> {

}
