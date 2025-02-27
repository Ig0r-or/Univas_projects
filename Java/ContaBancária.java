import java.util.Scanner;

public class ContaBancária {
    public static double adicionarNumero(){
        Scanner scanner = new Scanner(System.in);

        System.out.println("Digite o numero da conta: ");
        double numb = scanner.nextDouble();

        return numb;
    }
    public static String adicionarNome(){
        Scanner scanner = new Scanner(System.in);

        System.out.println("Digite o nome do usuário: ");
        String name = scanner.nextLine();

        return name;
    }
    public static double visualizarSaldo(){
        Scanner scanner = new Scanner(System.in);

        System.out.println("Digite o saldo da conta: ");
        double rest = scanner.nextDouble();

        System.out.println("Quer realizar alguma ação?(1 para sim; 2 para não):  ");
        int escolha = scanner.nextInt();
            if(escolha == 1){
                System.out.println("Saque ou depósito?(1 para Saque; 2 para depósito)");
                int escolhafilho = scanner.nextByte();
                    if(escolhafilho == 1){
                        System.out.println("Qual o valor do saque: ");
                        double saque = scanner.nextDouble();
                        rest -= saque;
                    }else if(escolhafilho == 2){
                        System.out.println("Qual o valor do depósito: ");
                        double deposito = scanner.nextDouble();
                        rest += deposito;
                    }

            }else if(escolha == 2){
                System.out.println("Fim da operação");
            }

        return rest;
    }



    public static void main(String[] args){
        double numero = adicionarNumero();
        String nome = adicionarNome();
        double saldo = visualizarSaldo();

       System.out.println("Numero da conta: " + numero);
       System.out.println("Nome do usuário: " + nome );
       System.out.println("O saldo atual é: " + saldo);



   }

}
