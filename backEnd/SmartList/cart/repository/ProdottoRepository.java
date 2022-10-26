package cart.repository;

import org.springframework.data.repository.CrudRepository;

import cart.models.Prodotto;

public interface ProdottoRepository extends CrudRepository<Prodotto, Integer> {

}
