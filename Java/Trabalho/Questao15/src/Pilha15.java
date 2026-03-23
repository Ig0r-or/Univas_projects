class PilhaQ15 {
    private static class No { int dado; No proximo; No(int d) { dado = d; } }
    private No topo;
    public boolean isEmpty() { return topo == null; }
    public void push(int dado) {
        No novoNo = new No(dado);
        novoNo.proximo = topo;
        topo = novoNo;
    }
    public int pop() {
        int dado = topo.dado;
        topo = topo.proximo;
        return dado;
    }
}
