   package univas;
   
import java.util.Scanner;

public class Runner {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		System.out.print("Digite a primeira nota: ");
	     float n1 = scanner.nextFloat();
	    
	    System.out.print("Digite a segunda nota: ");
	     float n2 = scanner.nextFloat();
	     
	    System.out.print("Digite a terceira nota: ");
	     float n3 = scanner.nextFloat();
	    
		float media = (n1+n2+n3)/3;
		
		if(media >= 7) {
			System.out.print("Aprovado");
		}
		else if(media < 6) {
			System.out.print("Reprovado");
		}
		else {
			System.out.print("Digite a nota do exame: ");
			float exam = scanner.nextFloat();
			float totalexam = (n1 + n2 + n3 + exam)/4;
			if(totalexam >=6) {
				System.out.print("Aprovado");
			}
			else {
				System.out.print("Vai dá não");
			}
		}
		
	}
}
