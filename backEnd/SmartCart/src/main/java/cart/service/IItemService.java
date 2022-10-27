package cart.service;

import cart.models.Item;

public interface IItemService {
	
	public Iterable<Item> getAllItems();
	public Item getItemById(Integer id);
	public Item addItem(Item item);
	public Item updateItem(Integer id, Item item);
	public Item deleteItemById(Integer id);

}
