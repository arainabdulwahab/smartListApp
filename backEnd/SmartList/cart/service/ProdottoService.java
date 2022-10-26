package cart.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cart.models.Prodotto;
import cart.repository.ProdottoRepository;

@Service
public class ProdottoService implements IProdottoService {
	
	@Autowired 
	private ProdottoRepository repository;

	@Override
	public Iterable<Prodotto> getAllProdotti() {
		return repository.findAll();
	}

	@Override
	public Prodotto getProdottoById(Integer id) {
		Optional<Prodotto> prodottoOpt = repository.findById(id);
		if (prodottoOpt.isEmpty() == false) {
			return prodottoOpt.get();
		}
		return null;
	}

	@Override
	public Prodotto addProdotto(Prodotto prodotto) {
		return repository.save(prodotto);
	}

	@Override
	public Prodotto updateProdotto(Integer id, Prodotto prodotto) {
		Optional<Prodotto> prodottoOpt = repository.findById(id);
		if (prodottoOpt.isEmpty() == false) {
			prodottoOpt.get().setGenere(prodotto.getGenere());
			prodottoOpt.get().setImmagine(prodotto.getImmagine());
			repository.save(prodottoOpt.get());
			return prodottoOpt.get();
		}
		return null;
	}

	@Override
	public Prodotto deleteProdottoById(Integer id) {
		Optional<Prodotto> prodottoOpt = repository.findById(id);
		if (prodottoOpt.isEmpty() == false) {
			repository.deleteById(id);
			return prodottoOpt.get();
		}
		return null;
	}

}
