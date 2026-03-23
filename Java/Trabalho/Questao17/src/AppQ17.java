public class AppQ17 {
    public static void main(String[] args) {
        SpoolerImpressaoQ17 spooler = new SpoolerImpressaoQ17();
        spooler.adicionarTrabalho("Trabalho_Faculdade.pdf");
        spooler.adicionarTrabalho("Boleto.pdf");
        spooler.imprimirProximo();
        spooler.imprimirProximo();
        spooler.imprimirProximo(); 
    }
}
