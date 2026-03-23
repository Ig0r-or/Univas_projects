public class AppQ15 {
    public void inverterFila(FilaQ15 fila) {
        PilhaQ15 pilhaTemp = new PilhaQ15();
        while (!fila.isEmpty()) pilhaTemp.push(fila.dequeue());
        while (!pilhaTemp.isEmpty()) fila.enqueue(pilhaTemp.pop());
    }

    public static void main(String[] args) {
        FilaQ15 fila = new FilaQ15();
        fila.enqueue(10); fila.enqueue(20); fila.enqueue(30);
        
        System.out.println("Original:");
        fila.imprimir();
        
        new AppQ15().inverterFila(fila);
        
        System.out.println("Invertida:");
        fila.imprimir();
    }
}