public class Filme {
    private String nome;
    private int ano;
    private double nota;
    private double duracao;

    public Filme(String nome, int ano, double nota, double duracao) {
        this.nome = nome;
        this.ano = ano;
        this.nota = nota;
        this.duracao = duracao;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public int getAno() {
        return ano;
    }

    public void setAno(int ano) {
        this.ano = ano;
    }

    public double getNota() {
        return nota;
    }

    public void setNota(double nota) {
        this.nota = nota;
    }

    public double getDuracao() {
        return duracao;
    }

    public void setDuracao(double duracao) {
        this.duracao = duracao;
    }

    @Override
    public String toString() {
        return  "Nome: " + nome +
                "\nAno: " + ano +
                "\nNota: " + nota +
                "\nDuracao: " + duracao + " min";
    }
}
