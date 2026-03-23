public class ListaQ16 {
    
    private static class No { 
        int dado; 
        No proximo; 
        No(int d) { dado = d; } 
    }
    
    private No inicio;

    public void inserirNoFim(int valor) {
        No novoNo = new No(valor);
        if (inicio == null) {
            inicio = novoNo;
            return;
        }
        No atual = inicio;
        while (atual.proximo != null) {
            atual = atual.proximo;
        }
        atual.proximo = novoNo;
    }

    public void imprimir() {
        No atual = inicio;
        while (atual != null) { System.out.print(atual.dado + " -> "); atual = atual.proximo; }
        System.out.println("null");
    }
}