import java.util.ArrayList;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        ArrayList<Filme> listaFilmes = new ArrayList<>();
        Scanner s = new Scanner(System.in);
        boolean sair = false;

        while (!sair) {
            System.out.println("[1] Adicionar Filme");
            System.out.println("[2] Sair");
            int i = s.nextInt();
            s.nextLine();

            if (i == 1) {
                System.out.print("Nome: ");
                //s.nextLine();
                String nome = s.nextLine();
                System.out.print("Ano: ");
                int ano = s.nextInt();
                System.out.print("Nota: ");
                double nota = s.nextDouble();
                System.out.print("Duração: ");
                double duracao = s.nextDouble();

                try {
                    Filme filme = new Filme(nome, ano, nota, duracao);
                    listaFilmes.add(filme);
                    System.out.println("Filme adicionado!");
                } catch (Exception e){
                    System.out.println(e.getMessage());
                }
            } else if (i == 2) {
                sair = true;
            } else {
                System.out.println("Opção inválida!");
            }
        }
        listaFilmes.forEach(System.out::println);
    }
}
