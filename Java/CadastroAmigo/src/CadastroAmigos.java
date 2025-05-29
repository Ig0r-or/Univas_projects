import javax.swing.*;
import java.io.*;
import java.util.*;


public class CadastroAmigos extends JFrame {

    private JLabel label;
    private JTextField tfNomeAmigo;
    private JButton btInserir, btListar;
    private File pasta = new File("./meusamigos");
    private File arquivo = new File(pasta,"amigos.txt");

    public CadastroAmigos(){
        setTitle("Cadastro de Amigos");
        setSize(320,160);
        setLayout(null);
        setDefaultCloseOperation(EXIT_ON_CLOSE);

        label= new JLabel("Nome do amigo: ");
        tfNomeAmigo = new JTextField();
        btInserir = new JButton("Inserir");
        btListar = new JButton("Listar Amigos");

        label.setBounds(10,10,150,20);
        tfNomeAmigo.setBounds(10,10,280,20);
        btInserir.setBounds(10, 60, 100, 25);
        btListar.setBounds(120,60,150,25);

        add(label);
        add(tfNomeAmigo);
        add(btInserir);
        add(btListar);

        btInserir.addActionListener(e -> inserirAmigo());
        btListar.addActionListener(e -> listarAmigos());

        setVisible(true);
    }
    private void inserirAmigo(){
        String nome = tfNomeAmigo.getText().trim();
        if(nome.isEmpty()){
            JOptionPane.showMessageDialog(this,"Digite o nome do amigo.");
            return;
        }
        if (!pasta.exists()) {
            pasta.mkdirs();
        }

        List<String> nomes = carregarAmigos();

        if (nomes.contains(nome)){
            JOptionPane.showMessageDialog(this, "Este amigo já está cadastrado.");
            return;
        }

        try(BufferedWriter writer = new BufferedWriter(new FileWriter(arquivo,true))){
            writer.write(nome);
            writer.newLine();
            JOptionPane.showMessageDialog(this, "Amigo inserido com sucesso!");
            tfNomeAmigo.setText("");
        } catch(IOException ex){
            JOptionPane.showMessageDialog(this, "Erro ao escrever no arquivo: " + ex.getMessage());
        }
    }

    private List<String> carregarAmigos(){
        List<String> nomes = new ArrayList<>();

        if (arquivo.exists()){
            try(BufferedReader reader = new BufferedReader(new FileReader(arquivo))){
                String linha;
                while ((linha = reader.readLine())!= null){
                    nomes.add(linha.trim());
                }
            }
                catch(IOException ex){
                    JOptionPane.showMessageDialog(this, "Erro ao ler o arquivo: " + ex.getMessage());
                }
            } 
            return nomes;
        }

        private void listarAmigos(){
            List<String> nomes = carregarAmigos();

            if (nomes.isEmpty()) {
                JOptionPane.showMessageDialog(this, "Nenhum amigo cadastrado.");  
            }else{
                StringBuilder sb = new StringBuilder("Amigos cadastrados:\n");
                for(String nome: nomes){
                    sb.append("- ").append(nome).append("\n");
                }
                JOptionPane.showMessageDialog(this, sb.toString());
            }
        }

    public static void main(String[] args) throws Exception {
        new CadastroAmigos();
    }
}
