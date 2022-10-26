package cart.repository;

import org.springframework.data.repository.CrudRepository;

import cart.models.Ricetta;

public interface RicettaRepository extends CrudRepository<Ricetta, Integer> {

}
