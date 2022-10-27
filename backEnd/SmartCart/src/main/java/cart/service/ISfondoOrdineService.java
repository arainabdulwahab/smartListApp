package cart.service;

import cart.models.SfondoOrdine;

public interface ISfondoOrdineService {
	
	public Iterable<SfondoOrdine> getAllSfondiOrdine();
	public SfondoOrdine getSfondoOrdineById(Integer id);
	public SfondoOrdine addSfondoOrdine(SfondoOrdine sfondoOrdine);
	public SfondoOrdine updateSfondoOrdine(Integer id, SfondoOrdine sfondoOrdine);
	public SfondoOrdine deleteSfondoOrdineById(Integer id);


}
