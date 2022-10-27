package cart.service;

import cart.models.Categoria;

public interface ICategoriaService {

	public Iterable<Categoria> getAllCategorie();
	public Categoria getCategoriaById(Integer id);
	public Categoria addCategoria(Categoria categoria);
	public Categoria updateCategoria(Integer id, Categoria categoria);
	public Categoria deleteCategoriaById(Integer id);
	
}
