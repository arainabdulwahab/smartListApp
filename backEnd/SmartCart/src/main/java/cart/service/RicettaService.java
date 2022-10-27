package cart.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cart.models.Ricetta;
import cart.repository.RicettaRepository;

@Service
public class RicettaService implements IRicettaService {
	
	@Autowired 
	private RicettaRepository repository;

	@Override
	public Iterable<Ricetta> getAllRicette() {
		return repository.findAll();
	}

	@Override
	public Ricetta getRicettaById(Integer id) {
		Optional<Ricetta> ricettaOpt = repository.findById(id);
		if (ricettaOpt.isEmpty() == false) {
			return ricettaOpt.get();
		}
		return null;
	}

	@Override
	public Ricetta addRicetta(Ricetta ricetta) {
		return repository.save(ricetta);
	}

	@Override
	public Ricetta updateRicetta(Integer id, Ricetta ricetta) {
		Optional<Ricetta> ricettaOpt = repository.findById(id);
		if (ricettaOpt.isEmpty() == false) {
			ricettaOpt.get().setImporto(ricetta.getImporto());
			ricettaOpt.get().setNome(ricetta.getNome());
			ricettaOpt.get().setImmagine(ricetta.getImmagine());
			ricettaOpt.get().setTipo(ricetta.getTipo());
			ricettaOpt.get().setDescrizione(ricetta.getDescrizione());
			ricettaOpt.get().setProcedimento(ricetta.getProcedimento());
			repository.save(ricettaOpt.get());
			return ricettaOpt.get();
		}
		return null;
	}

	@Override
	public Ricetta deleteRicettaById(Integer id) {
		Optional<Ricetta> ricettaOpt = repository.findById(id);
		if (ricettaOpt.isEmpty() == false) {
			repository.deleteById(id);
			return ricettaOpt.get();
		}
		return null;
	}

}
