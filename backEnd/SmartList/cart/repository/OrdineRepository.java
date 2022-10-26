package cart.repository;

import org.springframework.data.repository.CrudRepository;

import cart.models.Ordine;

public interface OrdineRepository extends CrudRepository<Ordine, Integer> {

}
