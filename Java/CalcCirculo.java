public class Circulo {
    double raio;

    public Circulo(double raio) {
        this.raio = raio;
    }

    public double calcularArea() {
        double pi = 3.14159;
        return pi * raio * raio;
    }

    public double calcularPerimetro() {
        double pi = 3.14;
        return 2 * pi * raio;
    }

    public static void main(String[] args) {
        Circulo circulo = new Circulo(5.0);

        System.out.println("Área: " + circulo.calcularArea());
        System.out.println("Perímetro: " + circulo.calcularPerimetro());
    }
}
