public class AppQ19 {
     public static void main(String[] args) {
        ValidadorQ19 validador = new ValidadorQ19();
        String exp1 = "(2 + 2) * (3)";
        String exp2 = "((2 + 2)";
        
        System.out.println(exp1 + " é valida? " + validador.validarExpressao(exp1));
        System.out.println(exp2 + " é valida? " + validador.validarExpressao(exp2));
    }
}
