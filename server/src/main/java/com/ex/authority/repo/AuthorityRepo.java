package com.ex.authority.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ex.authority.domain.Authority;

public interface AuthorityRepo extends JpaRepository<Authority, Long>{

}
