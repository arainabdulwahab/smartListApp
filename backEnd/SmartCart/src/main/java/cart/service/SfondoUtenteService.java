package cart.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cart.models.SfondoUtente;
import cart.repository.SfondoUtenteRepository;

@Service
public class SfondoUtenteService implements ISfondoUtenteService {
	
	@Autowired 
	private SfondoUtenteRepository repository;

	@Override
	public Iterable<SfondoUtente> getAllSfondiUtente() {
		return repository.findAll();
	}

	@Override
	public SfondoUtente getSfondoUtenteById(Integer id) {
		Optional<SfondoUtente> sfondoUtenteOpt = repository.findById(id);
		if (sfondoUtenteOpt.isEmpty() == false) {
			return sfondoUtenteOpt.get();
		}
		return null;
	}

	@Override
	public SfondoUtente addSfondoUtente(SfondoUtente sfondoUtente) {
		return repository.save(sfondoUtente);
	}

	@Override
	public SfondoUtente updateSfondoUtente(Integer id, SfondoUtente sfondoUtente) {
		Optional<SfondoUtente> sfondoUtenteOpt = repository.findById(id);
		if (sfondoUtenteOpt.isEmpty() == false) {
			sfondoUtenteOpt.get().setDarkMode(sfondoUtente.isDarkMode());
			sfondoUtenteOpt.get().setUri(sfondoUtente.getUri());
			repository.save(sfondoUtenteOpt.get());
			return sfondoUtenteOpt.get();
		}
		return null;
	}

	@Override
	public SfondoUtente deleteSfondoUtenteById(Integer id) {
		Optional<SfondoUtente> sfondoUtenteOpt = repository.findById(id);
		if (sfondoUtenteOpt.isEmpty() == false) {
			repository.deleteById(id);
			return sfondoUtenteOpt.get();
		}
		return null;
	}

}
