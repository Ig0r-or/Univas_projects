import java.util.Scanner;
import java.util.Stack;

public class Paciente {

    public static String armazenarNome(){
        Scanner scanner = new Scanner(System.in);

        System.out.println("Digite nome do paciente: ");
        String name = scanner.nextLine();

        return name;
    }
    public static int armazenarIdade(){
        Scanner scanner = new Scanner(System.in);

        System.out.println("Digite a idade do paciente: ");
        int years = scanner.nextInt();

        return years;
    }

    public static Stack<String>  armazenarHistorico(){
        Scanner scanner = new Scanner(System.in);

        Stack<String> historico = new Stack<>();

        System.out.println("Digite quantas consultas foram realizadas: ");
        int hist = scanner.nextInt();
        scanner.nextLine();

        for(int i = 0; i < hist; i++){
            System.out.println("Digite a consulta" + (i + 1) + ":");
            String consul = scanner.nextLine();
            historico.push(consul);
        }
        return historico;
    }

    public static void main(String[] args) {
        String Nome = armazenarNome();
        int Idade = armazenarIdade();
        Stack<String> historico = armazenarHistorico();

        System.out.println("\n--- Paciente ---");
        System.out.println("Nome: " + Nome);
        System.out.println("Idade: " + Idade);
        System.out.println("Histórico de consultas:");
        for (String consulta : historico) {
            System.out.println("- " + consulta);
        }


    }
}
