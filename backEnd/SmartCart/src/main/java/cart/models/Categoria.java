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
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name="categoria")
public class Categoria implements Serializable {
	
	private static final long serialVersionUID = 1L;

	@Id 
	@GeneratedValue(strategy = GenerationType.IDENTITY) 
	@Column(name="ID_categoria")
	private Integer idCategoria;
	
	@Column(name="nome")
	private String nome;
	
	@OneToMany(mappedBy = "categorie", fetch = FetchType.LAZY, cascade = CascadeType.ALL) 
	@JsonManagedReference 
	private Set<Ricetta> ricette = new HashSet<Ricetta>(); 
	
	public Categoria(Integer idCategoria, String nome) {
		this.idCategoria = idCategoria;
		this.nome = nome;
	}

	public Integer getIdCategoria() {
		return idCategoria;
	}

	public String getNome() {
		return nome;
	}

	public void setIdCategoria(Integer idCategoria) {
		this.idCategoria = idCategoria;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	@Override
	public String toString() {
		return "Categoria [idCategoria=" + idCategoria + ", nome=" + nome + "]";
	}

}
