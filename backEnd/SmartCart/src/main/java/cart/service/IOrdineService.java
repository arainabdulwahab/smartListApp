package cart.service;

import cart.models.Ordine;

public interface IOrdineService {
	
	public Iterable<Ordine> getAllOrdini();
	public Ordine getOrdineById(Integer id);
	public Ordine addOrdine(Ordine ordine);
	public Ordine updateOrdine(Integer id, Ordine ordine);
	public Ordine deleteOrdineById(Integer id);

}
