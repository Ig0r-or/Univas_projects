#include <stdio.h>
#include <string.h>
void stringContrario(char str[]){
    int i;
    for(i= strlen(str) - 1; i >= 0; i--){
        printf("%c", str[i]);
    }
    printf("\n");
}

int main(){
    char nome[100];

        printf("Digite seu nome: ");
        fgets(nome, sizeof(nome), stdin);
        nome[strcspn(nome, "\n")] = 0;

            printf("O nome digitado foi: %s\n",nome);
            printf("O nome invertido eh: ");
            stringContrario(nome);

}