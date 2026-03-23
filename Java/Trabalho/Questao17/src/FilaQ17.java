class FilaQ17 {
    private static class No { String dado; No proximo; No(String d) { dado = d; } }
    private No inicio, fim;
    
    public boolean isEmpty() { return inicio == null; }
    public void enqueue(String dado) {
        No novoNo = new No(dado);
        if (isEmpty()) inicio = novoNo;
        else fim.proximo = novoNo;
        fim = novoNo;
    }
    public String dequeue() {
        if (isEmpty()) return null;
        String dado = inicio.dado;
        inicio = inicio.proximo;
        if (inicio == null) fim = null;
        return dado;
    }
}
