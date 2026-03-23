class PilhaQ19 {
    private static class No { char dado; No proximo; No(char d) { dado = d; } }
    private No topo;
    
    public boolean isEmpty() { return topo == null; }
    public void push(char dado) {
        No novoNo = new No(dado);
        novoNo.proximo = topo;
        topo = novoNo;
    }
    public char pop() {
        char dado = topo.dado;
        topo = topo.proximo;
        return dado;
    }
}