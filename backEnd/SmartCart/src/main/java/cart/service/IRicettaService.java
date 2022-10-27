package cart.service;

import cart.models.Ricetta;

public interface IRicettaService {
	
	public Iterable<Ricetta> getAllRicette();
	public Ricetta getRicettaById(Integer id);
	public Ricetta addRicetta(Ricetta ricetta);
	public Ricetta updateRicetta(Integer id, Ricetta ricetta);
	public Ricetta deleteRicettaById(Integer id);

}
