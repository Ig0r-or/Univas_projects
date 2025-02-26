public class Main {
    public static void main(String[] args) {

        int[] numeros = {1,2,3,4,5,6,7,8,9,10};

        System.out.println("Iterando com FOR: ");
        for (int i = 0; i < numeros.length; i++) {
            if (numeros[i] % 2 == 0) {
                System.out.println("Numero PAR - FOR: " + numeros[i]);
            } else {
                System.out.println("Numero IMPAR - FOR: " + numeros[i]);
            }
        }
        System.out.println("\nInteração com WHILE: ");
        int i = 0;
        while (i < numeros.length){
            switch (numeros[i] % 2){
                case 0:
                    System.out.println("Numero PAR - WHILE: " + numeros[i]);
                    break;
                case 1:
                    System.out.println("Numero IMPAR - WHILE: " + numeros[i]);
                    break;
            }
            i++;
        }

        System.out.println("\n Interação DO WHILE");
        int j = 0;
        do{
            if(numeros[j] % 2 == 0){
                System.out.println("Numero PAR - DO WHILE: " + numeros[j]);
            } else{
                System.out.println("Numero IMPAR - DO WHILE: "+ numeros[j]);
            }
            j++;
        } while (j < numeros.length);
    }
}
