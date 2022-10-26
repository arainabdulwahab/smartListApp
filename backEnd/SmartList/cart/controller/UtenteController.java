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

import cart.models.Utente;
import cart.service.UtenteService;

@RestController
public class UtenteController {
	
	@Autowired
	private UtenteService service;
	
	@GetMapping("/api/utenti")
	public Iterable<Utente> getAllUtenti() {
		return service.getAllUtenti();
	}

	@GetMapping("/api/utenti/{id}")
	public Utente getById(@PathVariable Integer id) {
		Utente utente = service.getUtenteById(id);
		if (utente == null) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Utente non trovato");
		}
		return utente;
	}

	@PostMapping("/admin/api/utente/save") 
	public Utente save(@RequestBody Utente utente) {
		System.err.println(utente);
		service.addUtente(utente);
		return utente;
	}
	
	@PutMapping("/admin/api/utente/update/{id}")
	public Utente update(@PathVariable Integer id, @RequestBody Utente utente) {
		Utente ut = service.updateUtente(id, utente);
		if (ut == null) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Utente non trovato");
		}
		return ut;
	}

	@DeleteMapping("/admin/api/utente/delete/{id}")
	public Utente delete(@PathVariable Integer id) {
		Utente utente = service.getUtenteById(id);
		if (utente == null) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Utente non trovato");
		} else {
			service.deleteUtenteById(id);
			return utente;
		}
	}
	
	

}
