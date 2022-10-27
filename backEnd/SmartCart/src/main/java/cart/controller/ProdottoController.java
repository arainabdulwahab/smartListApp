package cart.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import cart.models.Prodotto;
import cart.service.ProdottoService;

@RestController
public class ProdottoController {
	
	@Autowired
	private ProdottoService service;
	
	@GetMapping("/api/prodotti")
	public Iterable<Prodotto> getAllProdotti() {
		return service.getAllProdotti();
	}

	@GetMapping("/api/prodotti/{id}")
	public Prodotto getById(@PathVariable Integer id) {
		Prodotto prodotto = service.getProdottoById(id);
		if (prodotto == null) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Prodotto non trovato");
		}
		return prodotto;
	}

	@PostMapping("/admin/api/prodotto/save") 
	public Prodotto save(@RequestBody Prodotto prodotto) {
		System.err.println(prodotto);
		service.addProdotto(prodotto);
		return prodotto;
	}
	
	@PutMapping("/admin/api/prodotto/update/{id}")
	public Prodotto update(@PathVariable Integer id, @RequestBody Prodotto prodotto) {
		Prodotto pr = service.updateProdotto(id, prodotto);
		if (pr == null) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Prodotto non trovato");
		}
		return pr;
	}

	@DeleteMapping("/admin/api/prodotto/delete/{id}")
	public Prodotto delete(@PathVariable Integer id) {
		Prodotto prodotto = service.getProdottoById(id);
		if (prodotto == null) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Prodotto non trovato");
		} else {
			service.deleteProdottoById(id);
			return prodotto;
		}
	}

}
