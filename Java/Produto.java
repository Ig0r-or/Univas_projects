import java.util.Scanner;
public class Produto {

    public static String armazenarNome(){
        Scanner scanner = new Scanner(System.in);

        System.out.println("Digite o nome do produto: ");
        String id = scanner.nextLine();

      return id;
    }
    public static int armazenarQuantidade(){
        Scanner scanner = new Scanner(System.in);

        System.out.println("Digite a quantidade do produto: ");
        int id = scanner.nextInt();

        return id;
    }
    public static double armazenarPreço(){
        Scanner scanner = new Scanner(System.in);

        System.out.println("Digite o preço do poduto: ");
        double id = scanner.nextDouble();

        return id;
    }
    public static boolean verificarDor(int quantidade){
        return quantidade > 0;
    }

    public static void main(String[] args) {
    String nome = armazenarNome();
    int quantidade = armazenarQuantidade();
    double preço = armazenarPreço();

    System.out.println("Produto: " + nome);
    System.out.println("Quantidade: " + quantidade);
    System.out.println("Preço: " + preço+"$");
    System.out.println("Disponibilidade: " + (verificarDor(quantidade) ? "Disponivel":"Indisponivel"));


    }
}
