import java.util.Scanner;
public class Carro {

    public static String armazenarMarca(){
        Scanner scanner = new Scanner(System.in);

        System.out.println("Digite a marca do carro: ");
        String marca = scanner.nextLine();

        return marca;
    }
    public static String armazenarModelo(){
        Scanner scanner = new Scanner(System.in);

        System.out.println("Digite o modelo do carro: ");
        String molde = scanner.nextLine();

        return molde;
    }
    public static double armazenarVelocidade(){
        Scanner scanner = new Scanner(System.in);

        System.out.println("Digite a velocidade do carro: ");
        double vel = scanner.nextDouble();
        System.out.println("Escolha entre 1 para acelerar e 2 para freiar: ");
        double escolha = scanner.nextDouble();
                if(escolha == 1){
                    System.out.println("Quanto de velociade: ");
                    double accel = scanner.nextDouble();
                    vel+=accel;
                }else if(escolha == 2){
                    System.out.println("Quanto de velociade: ");
                    double accel = scanner.nextDouble();
                    vel-=accel;
                }else{
                    System.out.println("Escolha um valor válido!");
                }
        return vel;
    }


    public static void main(String[] args) {
    String Marca = armazenarMarca();
    String Modelo = armazenarModelo();
    double Velocidade = armazenarVelocidade();

    System.out.println("\n-- Veiculo --");
    System.out.println("Marca: " + Marca);
    System.out.println("Modelo: " + Modelo);
    System.out.println("Velocidade atual: " + Velocidade + "Km/h");
    }
}
