class FilaQ15 {
    private static class No { int dado; No proximo; No(int d) { dado = d; } }
    private No inicio, fim;
    public boolean isEmpty() { return inicio == null; }
    public void enqueue(int dado) {
        No novoNo = new No(dado);
        if (isEmpty()) inicio = novoNo;
        else fim.proximo = novoNo;
        fim = novoNo;
    }
    public int dequeue() {
        int dado = inicio.dado;
        inicio = inicio.proximo;
        if (inicio == null) fim = null;
        return dado;
    }
    public void imprimir() {
        No atual = inicio;
        System.out.print("[ ");
        while (atual != null) { System.out.print(atual.dado + " "); atual = atual.proximo; }
        System.out.println("]");
    }
}