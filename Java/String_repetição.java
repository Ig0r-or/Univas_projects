public class Main {
    public static void main(String[] args) {
        String texto = "Neymar";

        int guarda = 0;
        System.out.println("\n\nIterando com FOR:");
        for (int v = 0; v < texto.length(); v++){
            if(texto.charAt(v) == 'E' || texto.charAt(v) == 'e'){
                guarda++;
            }
        }
        System.out.print("quantidade de 'e' no FOR: " + guarda);

    }
}
