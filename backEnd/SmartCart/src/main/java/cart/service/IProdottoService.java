package cart.service;

import cart.models.Prodotto;

public interface IProdottoService {

	public Iterable<Prodotto> getAllProdotti();
	public Prodotto getProdottoById(Integer id);
	public Prodotto addProdotto(Prodotto prodotto);
	public Prodotto updateProdotto(Integer id, Prodotto prodotto);
	public Prodotto deleteProdottoById(Integer id);
	
}
