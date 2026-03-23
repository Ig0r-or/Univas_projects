public class AppQ18 {
       public static void main(String[] args) {
        ListaQ18 lista = new ListaQ18();
        lista.inserirNoFim(7);
        lista.inserirNoFim(2);
        lista.inserirNoFim(7);
        lista.inserirNoFim(7);
        
        System.out.println("Ocorrencias do 7: " + lista.contarOcorrencias(7));
        System.out.println("Ocorrencias do 2: " + lista.contarOcorrencias(2));
    }
}
