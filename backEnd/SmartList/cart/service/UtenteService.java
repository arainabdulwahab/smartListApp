package cart.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cart.models.Utente;
import cart.repository.UtenteRepository;

@Service
public class UtenteService implements IUtenteService {
	
	@Autowired 
	private UtenteRepository repository;

	@Override
	public Iterable<Utente> getAllUtenti() {
		return repository.findAll();
	}

	@Override
	public Utente getUtenteById(Integer id) {
		Optional<Utente> utenteOpt = repository.findById(id);
		if (utenteOpt.isEmpty() == false) {
			return utenteOpt.get();
		}
		return null;
	}

	@Override
	public Utente addUtente(Utente utente) {
		return repository.save(utente);
	}

	@Override
	public Utente updateUtente(Integer id, Utente utente) {
		Optional<Utente> utenteOpt = repository.findById(id);
		if (utenteOpt.isEmpty() == false) {
			utenteOpt.get().setNome(utente.getNome());
			utenteOpt.get().setCognome(utente.getCognome());
			utenteOpt.get().setEmail(utente.getEmail());
			utenteOpt.get().setPassword(utente.getPassword());
			repository.save(utenteOpt.get());
			return utenteOpt.get();
		}
		return null;
	}

	@Override
	public Utente deleteUtenteById(Integer id) {
		Optional<Utente> utenteOpt = repository.findById(id);
		if (utenteOpt.isEmpty() == false) {
			repository.deleteById(id);
			return utenteOpt.get();
		}
		return null;
	}

}
