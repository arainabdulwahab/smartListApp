package cart.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cart.models.SfondoOrdine;
import cart.repository.SfondoOrdineRepository;

@Service
public class SfondoOrdineService implements ISfondoOrdineService {
	
	@Autowired 
	private SfondoOrdineRepository repository;

	@Override
	public Iterable<SfondoOrdine> getAllSfondiOrdine() {
		return repository.findAll();
	}

	@Override
	public SfondoOrdine getSfondoOrdineById(Integer id) {
		Optional<SfondoOrdine> sfondoOrdineOpt = repository.findById(id);
		if (sfondoOrdineOpt.isEmpty() == false) {
			return sfondoOrdineOpt.get();
		}
		return null;
	}

	@Override
	public SfondoOrdine addSfondoOrdine(SfondoOrdine sfondoOrdine) {
		return repository.save(sfondoOrdine);
	}

	@Override
	public SfondoOrdine updateSfondoOrdine(Integer id, SfondoOrdine sfondoOrdine) {
		Optional<SfondoOrdine> sfondoOrdineOpt = repository.findById(id);
		if (sfondoOrdineOpt.isEmpty() == false) {
			sfondoOrdineOpt.get().setColore(sfondoOrdine.getColore());
			sfondoOrdineOpt.get().setSfondo(sfondoOrdine.getSfondo());
			repository.save(sfondoOrdineOpt.get());
			return sfondoOrdineOpt.get();
		}
		return null;
	}

	@Override
	public SfondoOrdine deleteSfondoOrdineById(Integer id) {
		Optional<SfondoOrdine> sfondoOrdine = repository.findById(id);
		if (sfondoOrdine.isEmpty() == false) {
			repository.deleteById(id);
			return sfondoOrdine.get();
		}
		return null;
	}

}
