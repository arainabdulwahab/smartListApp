package cart.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cart.models.Ordine;
import cart.repository.OrdineRepository;

@Service
public class OrdineService implements IOrdineService {
	
	@Autowired 
	private OrdineRepository repository;

	@Override
	public Iterable<Ordine> getAllOrdini() {
		return repository.findAll();
	}

	@Override
	public Ordine getOrdineById(Integer id) {
		Optional<Ordine> ordineOpt = repository.findById(id);
		if (ordineOpt.isEmpty() == false) {
			return ordineOpt.get();
		}
		return null;
	}

	@Override
	public Ordine addOrdine(Ordine ordine) {
		return repository.save(ordine);
	}

	@Override
	public Ordine updateOrdine(Integer id, Ordine ordine) {
		Optional<Ordine> ordineOpt = repository.findById(id);
		if (ordineOpt.isEmpty() == false) {
			ordineOpt.get().setImporto(ordine.getImporto());
			ordineOpt.get().setBudget(ordine.getBudget());
			ordineOpt.get().setData(ordine.getData());
			ordineOpt.get().setPriceView(ordine.isPriceView());
			ordineOpt.get().setQuantitàView(ordine.isQuantitàView());
			ordineOpt.get().setTitolo(ordine.getTitolo());
			repository.save(ordineOpt.get());
			return ordineOpt.get();
		}
		return null;
	}

	@Override
	public Ordine deleteOrdineById(Integer id) {
		Optional<Ordine> ordineOpt = repository.findById(id);
		if (ordineOpt.isEmpty() == false) {
			repository.deleteById(id);
			return ordineOpt.get();
		}
		return null;
	}

}
