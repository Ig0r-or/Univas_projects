public class SpoolerImpressaoQ17 {
    private FilaQ17 fila = new FilaQ17();

    // Métodos solicitados
    public void adicionarTrabalho(String nomeArquivo) {
        fila.enqueue(nomeArquivo);
        System.out.println("Adicionado: " + nomeArquivo);
    }

    public void imprimirProximo() {
        if (fila.isEmpty()) {
            System.out.println("Fila vazia. Nada para imprimir.");
            return;
        }
        System.out.println("Imprimindo: " + fila.dequeue());
    }
}