import java.util.Scanner;
public class Funcionario {

    public static String armazenarNome(){
        Scanner scanner = new Scanner(System.in);

        System.out.println("Digite o nome do funcionario: ");
        String name = scanner.nextLine();

        return name;
    }
    public static String armazenarSetor(){
        Scanner scanner = new Scanner(System.in);

        System.out.println("Digite o setor do funcionário: ");
        String sector = scanner.nextLine();

        return sector;
    }
    public static double armazenarSalario(){
        Scanner scanner = new Scanner(System.in);

        System.out.println("Digite o salário: ");
        double money = scanner.nextDouble();

        System.out.println("O funcionário recebe algum auxilio?(1 para sim/ 2 para não): ");
        int escolha = scanner.nextInt();
        if(escolha == 1){
            System.out.println("De quanto?: ");
            double aux = scanner.nextDouble();
            money+= aux;
        }else if(escolha == 2){
            System.out.println("Ok.");
        }else{
            System.out.println("Valor invalido!");
        }
        if(money>3000){
            double imposto = 0.15;
            imposto = imposto * money;
            money-= imposto;
        }
        return money;
    }


    public static void main(String[] args) {
        String Nome = armazenarNome();
        String Setor = armazenarSetor();
        double salario = armazenarSalario();



        System.out.println("Nome do funcionário: " + Nome);
        System.out.println("Setor do funcionário: " + Setor);
        System.out.println("Salário do funcionário: " + salario);


    }
}
