package cart.service;

import cart.models.SfondoUtente;

public interface ISfondoUtenteService {
	
	public Iterable<SfondoUtente> getAllSfondiUtente();
	public SfondoUtente getSfondoUtenteById(Integer id);
	public SfondoUtente addSfondoUtente(SfondoUtente sfondoUtente);
	public SfondoUtente updateSfondoUtente(Integer id, SfondoUtente sfondoUtente);
	public SfondoUtente deleteSfondoUtenteById(Integer id);

}
