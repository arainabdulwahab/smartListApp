package cart.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cart.models.Categoria;
import cart.repository.CategoriaRepository;

@Service
public class CategoriaService implements ICategoriaService {
	
	@Autowired 
	private CategoriaRepository repository;

	@Override
	public Iterable<Categoria> getAllCategorie() {
		return repository.findAll();
	}

	@Override
	public Categoria getCategoriaById(Integer id) {
		Optional<Categoria> categoriaOpt = repository.findById(id);
		if (categoriaOpt.isEmpty() == false) {
			return categoriaOpt.get();
		}
		return null;
	}

	@Override
	public Categoria addCategoria(Categoria categoria) {
		return repository.save(categoria);
	}

	@Override
	public Categoria updateCategoria(Integer id, Categoria categoria) {
		Optional<Categoria> categoriaOpt = repository.findById(id);
		if (categoriaOpt.isEmpty() == false) {
			categoriaOpt.get().setNome(categoria.getNome());
			repository.save(categoriaOpt.get());
			return categoriaOpt.get();
		}
		return null;
	}

	@Override
	public Categoria deleteCategoriaById(Integer id) {
		Optional<Categoria> categoriaOpt = repository.findById(id);
		if (categoriaOpt.isEmpty() == false) {
			repository.deleteById(id);
			return categoriaOpt.get();
		}
		return null;
	}

}
