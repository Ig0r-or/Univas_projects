import javax.swing.*;
import java.io.*;
import java.util.*;

public class CadastroAmigosIdade extends JFrame {
    private JLabel labelNome, labelIdade, labelCurso;
    private JTextField tfNomeAmigo, tfIdadeAmigo, tfCursoAmigo;
    private JButton btInserir, btListar;
    private File pasta = new File("./meusamigos");
    private File arquivo = new File(pasta, "amigosidade.txt");

    public static void main(String[] args) {
        new CadastroAmigosIdade();
    }

    public CadastroAmigosIdade() {
        setTitle("Cadastro de Amigos");
        setSize(380, 230);
        setLayout(null);
        setDefaultCloseOperation(EXIT_ON_CLOSE);

        labelNome = new JLabel("Nome do amigo:");
        labelIdade = new JLabel("Idade:");
        labelCurso = new JLabel("Curso:");
        tfNomeAmigo = new JTextField();
        tfIdadeAmigo = new JTextField();
        tfCursoAmigo = new JTextField();
        btInserir = new JButton("Inserir");
        btListar = new JButton("Listar Amigos");

        labelNome.setBounds(10, 10, 150, 20);
        tfNomeAmigo.setBounds(10, 30, 300, 20);
        labelIdade.setBounds(10, 55, 150, 20);
        tfIdadeAmigo.setBounds(10, 75, 100, 20);
        labelCurso.setBounds(10, 100, 150, 20);
        tfCursoAmigo.setBounds(10,120,150,20);
        btInserir.setBounds(10, 150, 100, 25);
        btListar.setBounds(120, 150, 150, 25);

        add(labelNome);
        add(tfNomeAmigo);
        add(labelIdade);
        add(tfIdadeAmigo);
        add(labelCurso);
        add(tfCursoAmigo);
        add(btInserir);
        add(btListar);

        btInserir.addActionListener(e -> inserirAmigoIdade());
        btListar.addActionListener(e -> listarAmigoIdade());

        setVisible(true);
    }

    private List<String[]> carregarAmigosIdade(){
        List<String[]> amigos = new ArrayList<>();

        if(arquivo.exists()){
            try(BufferedReader reader = new BufferedReader(new FileReader(arquivo))){
                String linha;
                while ((linha = reader.readLine()) != null) {
                    String[] partes = linha.split(";");

                    if(partes.length == 3){
                        amigos.add(new String[]{partes[0].trim(), partes[1].trim(), partes[2].trim()});
                    }
                }
            } catch(IOException ex){
                JOptionPane.showMessageDialog(this, "Erro ao ler o arquivo: " + ex.getMessage());
            }
        }
        return amigos;
    }

    private void inserirAmigoIdade(){
        String nome = tfNomeAmigo.getText().trim();
        String idadeTexto = tfIdadeAmigo.getText().trim();
        String cursoTexto = tfCursoAmigo.getText().trim();

        if(nome.isEmpty() || idadeTexto.isEmpty() || cursoTexto.isEmpty()){
            JOptionPane.showMessageDialog(this, "Preencha o nome e a idade.");
            return;
        }

        int idade;
        try {
            idade = Integer.parseInt(idadeTexto);
            if(idade <= 0) throw new NumberFormatException();
        } catch (NumberFormatException ex) {
            JOptionPane.showMessageDialog(this, "Idade inválida.");
            return;
        }

        if(pasta.exists()){
            pasta.mkdir();
        }

    List<String[]> amigos = carregarAmigosIdade();

        for(String[] amigo : amigos){
            if(amigo[0].equalsIgnoreCase(nome)){
                JOptionPane.showMessageDialog(this, "Este amigo já está cadastrado.");
                return;
            } 
        }
        try(BufferedWriter writer = new BufferedWriter((new FileWriter(arquivo, true)))){
            writer.write(nome + ";" + idade);
            writer.newLine();
            JOptionPane.showMessageDialog(this, "Amigo inserido com sucesso!");
            tfIdadeAmigo.setText("");
            tfIdadeAmigo.setText("");
        } catch(IOException ex){
            JOptionPane.showMessageDialog(this, "Erro ao escrever no arquivo: " + ex.getMessage());
        }
    }

    private void listarAmigoIdade(){
        List<String[]> amigos = carregarAmigosIdade();
        if(amigos.isEmpty()){
            JOptionPane.showMessageDialog(this, "Nenhum amigo cadastrado.");
        } else{
            String mensagem = "Amigos cadastrados:\n";
            for(String[] amigo : amigos){
                mensagem += "- " + amigo[0] + " (" + amigo[1] + " anos)\n";
            }
            JOptionPane.showMessageDialog(this, mensagem);
        }
    }

}
