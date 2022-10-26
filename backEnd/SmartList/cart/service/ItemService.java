package cart.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cart.models.Item;
import cart.repository.ItemRepository;

@Service
public class ItemService implements IItemService {
	
	@Autowired 
	private ItemRepository repository;

	@Override
	public Iterable<Item> getAllItems() {
		return repository.findAll();
	}

	@Override
	public Item getItemById(Integer id) {
		Optional<Item> itemOpt = repository.findById(id);
		if (itemOpt.isEmpty() == false) {
			return itemOpt.get();
		}
		return null;
	}

	@Override
	public Item addItem(Item item) {
		return repository.save(item);
	}

	@Override
	public Item updateItem(Integer id, Item item) {
		Optional<Item> itemOpt = repository.findById(id);
		if (itemOpt.isEmpty() == false) {
			itemOpt.get().setPrezzo(item.getPrezzo());
			itemOpt.get().setQuantità(item.getQuantità());
			itemOpt.get().setSpunta(item.isSpunta());
			repository.save(itemOpt.get());
			return itemOpt.get();
		}
		return null;
	}

	@Override
	public Item deleteItemById(Integer id) {
		Optional<Item> itemOpt = repository.findById(id);
		if (itemOpt.isEmpty() == false) {
			repository.deleteById(id);
			return itemOpt.get();
		}
		return null;
	}

}
