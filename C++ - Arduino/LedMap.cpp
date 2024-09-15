int ledPin = 9;
int potPin = A5;
int valorpot = 0;
int pwm = 0;

void setup() {
  pinMode(ledPin, OUTPUT);
  pinMode(potPin, INPUT);
  Serial.begin(9600);
}

void loop() {
valorpot = analogRead(potPin);
pwm = map(valorpot, 0, 1023, 0, 255);
Serial.println(pwm);
analogWrite(ledPin, pwm);
delay(0);
}
