package cart.service;

import cart.models.Utente;

public interface IUtenteService {
	
	public Iterable<Utente> getAllUtenti();
	public Utente getUtenteById(Integer id);
	public Utente addUtente(Utente utente);
	public Utente updateUtente(Integer id, Utente utente);
	public Utente deleteUtenteById(Integer id);

}
