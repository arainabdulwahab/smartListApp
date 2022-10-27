package cart.models;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name="sfondo_utente")
public class SfondoUtente implements Serializable{
	
	private static final long serialVersionUID = 9084724461660626954L;

	@Id 
	@GeneratedValue(strategy = GenerationType.IDENTITY) 
	@Column(name="ID_sfondo_utente")
	private Integer idSfondoUtente;
	
	@Column(name="darkmode")
	private boolean darkMode;
	
	@Column(name="uri")
	private String uri;
	
	@OneToOne(mappedBy = "sfondoUtente", fetch = FetchType.LAZY, cascade = CascadeType.ALL) 
	@JsonBackReference
	private Utente utente;

	public SfondoUtente(Integer idSfondoUtente, boolean darkMode, String uri) {
		this.idSfondoUtente = idSfondoUtente;
		this.darkMode = darkMode;
		this.uri = uri;
	}

	public Integer getIdSfondoUtente() {
		return idSfondoUtente;
	}

	public boolean isDarkMode() {
		return darkMode;
	}

	public String getUri() {
		return uri;
	}

	public void setIdSfondoUtente(Integer idSfondoUtente) {
		this.idSfondoUtente = idSfondoUtente;
	}

	public void setDarkMode(boolean darkMode) {
		this.darkMode = darkMode;
	}

	public void setUri(String uri) {
		this.uri = uri;
	}

	@Override
	public String toString() {
		return "SfondoUtente [idSfondoUtente=" + idSfondoUtente + ", darkMode=" + darkMode + ", uri=" + uri + "]";
	}

}
