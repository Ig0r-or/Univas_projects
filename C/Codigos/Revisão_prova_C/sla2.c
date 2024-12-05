#include <stdio.h>
#include <string.h>


int main(){
    char nome[100];
  while (1){
    puts("Digite seu nome: ");
    gets(nome);
        if(nome[0] == '\0'){
            break;
        }
        else{
            printf("O nome digitado foi: %s\n", nome);
        }
  }
}