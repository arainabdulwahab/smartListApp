package cart.repository;

import org.springframework.data.repository.CrudRepository;

import cart.models.Item;

public interface ItemRepository extends CrudRepository<Item, Integer> {

}
