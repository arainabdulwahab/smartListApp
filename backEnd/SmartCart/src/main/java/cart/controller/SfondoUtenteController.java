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

import cart.models.SfondoUtente;
import cart.service.SfondoUtenteService;

@RestController
public class SfondoUtenteController {
	
	@Autowired
	private SfondoUtenteService service;
	
	@GetMapping("/api/sfondo_utenti")
	public Iterable<SfondoUtente> getAllSfondiUtente() {
		return service.getAllSfondiUtente();
	}

	@GetMapping("/api/sfondo_utenti/{id}")
	public SfondoUtente getById(@PathVariable Integer id) {
		SfondoUtente sfondoUtente = service.getSfondoUtenteById(id);
		if (sfondoUtente == null) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Sfondo utente non trovato");
		}
		return sfondoUtente;
	}

	@PostMapping("/admin/api/sfondo_utente/save") 
	public SfondoUtente save(@RequestBody SfondoUtente sfondoUtente) {
		System.err.println(sfondoUtente);
		service.addSfondoUtente(sfondoUtente);
		return sfondoUtente;
	}
	
	@PutMapping("/admin/api/sfondo_utente/update/{id}")
	public SfondoUtente update(@PathVariable Integer id, @RequestBody SfondoUtente sfondoUtente) {
		SfondoUtente sfut = service.updateSfondoUtente(id, sfondoUtente);
		if (sfut == null) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Sfondo utente non trovato");
		}
		return sfut;
	}

	@DeleteMapping("/admin/api/sfondo_utente/delete/{id}")
	public SfondoUtente delete(@PathVariable Integer id) {
		SfondoUtente sfondoUtente = service.getSfondoUtenteById(id);
		if (sfondoUtente == null) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Sfondo utente non trovato");
		} else {
			service.deleteSfondoUtenteById(id);
			return sfondoUtente;
		}
	}

}
