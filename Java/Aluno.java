import java.util.Scanner;

public class Aluno {

    public static String armazenarNome(){
        Scanner scanner = new Scanner(System.in);

        System.out.println("Digite o nome do aluno: ");
        String name = scanner.nextLine();

        return name;
    }
    public static int armazenarMatricula(){
        Scanner scanner = new Scanner(System.in);

        System.out.println("Digite a Matricula do aluno: ");
        int id = scanner.nextInt();

        return id;
    }
    public static double armazenarNotas(){
        Scanner scanner = new Scanner(System.in);

        System.out.println("Digite a primeira nota do aluno: ");
        double n1 = scanner.nextDouble();
        System.out.println("Digite a segunda nota do aluno: ");
        double n2 = scanner.nextDouble();
        System.out.println("Digite a terceira nota do aluno: ");
        double n3 = scanner.nextDouble();

        double media = (n1 + n2 + n3)/3;
            if(media >= 60){
                System.out.println(media + "O aluno foi aprovado!");
            }else{
                System.out.println(media + "O aluno foi reprovado!");
            }

        return media;
    }



    public static void main(String[] args) {
        String nome = armazenarNome();
        double matricula = armazenarMatricula();
        double notas = armazenarNotas();



        System.out.println("Nome do aluno: " + nome);
        System.out.println("Matricula: " + matricula);
        System.out.println("Nota: " + notas);

    }
}
