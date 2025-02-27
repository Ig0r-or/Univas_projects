import java.util.Scanner;
public class Triangulo {
     private double ladoA;
     private double ladoB;
     private double ladoC;

    public Triangulo(double ladoA, double ladoB, double ladoC) {
        this.ladoA = ladoA;
        this.ladoB = ladoB;
        this.ladoC = ladoC;
    }

    public boolean ehTrianguloValido() {
        return (ladoA + ladoB > ladoC) &&
                (ladoA + ladoC > ladoB) &&
                (ladoB + ladoC > ladoA);
    }
    public double CalcularArea(){
        if (!ehTrianguloValido()) {
            System.out.println("Os valores do triangulo sõa inválidos!");
        }
        double p = (ladoA + ladoB + ladoC) / 2;
        return Math.sqrt(p * (p - ladoA) * (p - ladoB) * (p - ladoC));
    }


    public void Exibir() {
        System.out.println("\n-- Resumo --");
        System.out.println("Lado A: " + ladoA);
        System.out.println("Lado B: " + ladoB);
        System.out.println("Lado C: " + ladoC);
            if(ehTrianguloValido()){
                System.out.println("O triangulo é valido!");
                System.out.println("Área: " + CalcularArea());
            }else{
                System.out.println("Os lados informados não formam um triangulo");
            }
    }

    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);

        // Entrada dos lados do triângulo
        System.out.println("Digite o valor do lado A: ");
        double ladoA = scanner.nextDouble();
        System.out.println("Digite o valor do lado B: ");
        double ladoB = scanner.nextDouble();
        System.out.println("Digite o valor do lado C: ");
        double ladoC = scanner.nextDouble();

        // Criando um objeto Triangulo
        Triangulo triangulo = new Triangulo(ladoA, ladoB, ladoC);

        // Exibindo informações
        triangulo.Exibir();
    }
}
