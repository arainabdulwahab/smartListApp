package cart.models;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name="utente")
public class Utente implements Serializable{
	
	private static final long serialVersionUID = -965096700762955611L;

	@Id 
	@GeneratedValue(strategy = GenerationType.IDENTITY) 
	@Column(name="ID_utente")
	private Integer idUtente;
	
	@Column(name="nome")
	private String nome;
	
	@Column(name="cognome")
	private String cognome;
	
	@Column(name="email")
	private String email;
	
	@Column(name="password")
	private String password;
	
	@OneToOne(fetch = FetchType.LAZY) 
	@JoinColumn(name = "ID_sfondo_utente") 
	@JsonIgnore 
	private SfondoUtente sfondoUtente; 
	
	@OneToMany(mappedBy = "utente", fetch = FetchType.LAZY, cascade = CascadeType.ALL) 
	@JsonManagedReference 
	private Set<Ordine> ordini = new HashSet<Ordine>(); 
	
	public Utente() {
		
	}

	public Utente(Integer idUtente, String nome, String cognome, String email, String password) {
		this.idUtente = idUtente;
		this.nome = nome;
		this.cognome = cognome;
		this.email = email;
		this.password = password;
	}

	public Integer getIdUtente() {
		return idUtente;
	}

	public String getNome() {
		return nome;
	}

	public String getCognome() {
		return cognome;
	}

	public String getEmail() {
		return email;
	}

	public String getPassword() {
		return password;
	}

	public void setIdUtente(Integer idUtente) {
		this.idUtente = idUtente;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public void setCognome(String cognome) {
		this.cognome = cognome;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "Utente [idUtente=" + idUtente + ", nome=" + nome + ", cognome=" + cognome + ", email=" + email
				+ ", password=" + password + "]";
	}

}
