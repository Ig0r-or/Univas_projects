public class ValidadorQ19 {
    
    public boolean validarExpressao(String expressao) {
        PilhaQ19 pilha = new PilhaQ19();
        
        for (int i = 0; i < expressao.length(); i++) {
            char c = expressao.charAt(i);
            if (c == '(') {
                pilha.push(c);
            } else if (c == ')') {
                if (pilha.isEmpty()) return false;
                pilha.pop();
            }
        }
        return pilha.isEmpty();
    }
}