import java.util.Scanner;

public class Retangulo {

    public static double adicionarAltura(){
        Scanner scanner = new Scanner(System.in);
        System.out.print("Digite a altura do seu retangulo: ");
        double alt = scanner.nextDouble();

        return alt;
    }
    public static double adicionarLargura(){
        Scanner scanner = new Scanner(System.in);
        System.out.print("Digite a largura do seu retangulo: ");
        double larg = scanner.nextDouble();

        return larg;
    }

    public static void main(String[] args) {
        double largura = adicionarLargura();
        double altura = adicionarAltura();

        double calcularArea = altura * largura;
        System.out.println("O valor da sua área é: " + calcularArea);

        double calcularPerimetro = 2 * (altura + largura);
        System.out.println("O valor do seu perimetro é: "+ calcularPerimetro);

    }
}
