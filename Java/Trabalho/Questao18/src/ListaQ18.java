public class ListaQ18 {
    private static class No { int dado; No proximo; No(int d) { dado = d; } }
    private No inicio;

    public void inserirNoFim(int valor) {
        No novoNo = new No(valor);
        if (inicio == null) { inicio = novoNo; return; }
        No atual = inicio;
        while (atual.proximo != null) atual = atual.proximo;
        atual.proximo = novoNo;
    }

    public int contarOcorrencias(int valor) {
        int contador = 0;
        No atual = inicio;
        while (atual != null) {
            if (atual.dado == valor) {
                contador++;
            }
            atual = atual.proximo;
        }
        return contador;
    }
}