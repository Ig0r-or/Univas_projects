import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Digite o valor de a: ");
         double a = scanner.nextDouble();

         if(a == 0) {
             System.out.print("Isso não é uma equação de 2 grau!");
         } else {
             System.out.print("Digite o valor de b: ");
         double b = scanner.nextDouble();
             System.out.print("Digite o valor de c: ");
             double c = scanner.nextDouble();

             double delta = b * b - 4 * a * c;

             if(delta > 0){
                 double r1 = (-b + Math.sqrt(delta)) / (2 * a);
                 double r2 = (-b - Math.sqrt(delta)) / (2 * a);
                 System.out.println("As raízes da equação são reais e distintas: ");
                 System.out.println("r1 = " + r1);
                 System.out.println("r2 = " + r2);
             } else if (delta == 0) {
                 double r = -b / (2 * a);
                 System.out.println("A equação tem uma raiz real dupla: ");
                 System.out.println("r = " + r);
             } else {
                 double realPart = -b / (2 * a);
                 double imaginaryPart = Math.sqrt(-delta) / (2 * a);
                 System.out.println("As raízes são complexas: ");
                 System.out.println("r1 = " + realPart + " + " + imaginaryPart + "i");
                 System.out.println("r2 = " + realPart + " - " + imaginaryPart + "i");
             }
         }

    }
}
