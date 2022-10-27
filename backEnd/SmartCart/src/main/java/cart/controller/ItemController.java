package cart.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import cart.models.Item;
import cart.service.ItemService;

@RestController
public class ItemController {
	
	@Autowired
	private ItemService service;
	
	@GetMapping("/api/item")
	public Iterable<Item> getAllItems() {
		return service.getAllItems();
	}

	@GetMapping("/api/item/{id}")
	public Item getById(@PathVariable Integer id) {
		Item item = service.getItemById(id);
		if (item == null) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Item non trovato");
		}
		return item;
	}

	@PostMapping("/admin/api/item/save") 
	public Item save(@RequestBody Item item) {
		System.err.println(item);
		service.addItem(item);
		return item;
	}
	
	@PutMapping("/admin/api/item/update/{id}")
	public Item update(@PathVariable Integer id, @RequestBody Item item) {
		Item it = service.updateItem(id, item);
		if (it == null) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Item non trovato");
		}
		return it;
	}

	@DeleteMapping("/admin/api/item/delete/{id}")
	public Item delete(@PathVariable Integer id) {
		Item item = service.getItemById(id);
		if (item == null) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Item non trovato");
		} else {
			service.deleteItemById(id);
			return item;
		}
	}

}
