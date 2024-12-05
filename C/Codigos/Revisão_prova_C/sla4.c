#include <stdio.h>
#include <string.h>

#define DM 20
int main(){
    char nome[DM+1],sobrenome[DM+1], nomeCompleto[DM+20];

    while(1){
        printf("Digite o seu nome: ");
        fgets(nome, DM, stdin);
        nome[strcspn(nome, "\n")] = 0;

        printf("Digite o seu sobrenome: ");
        fgets(sobrenome, DM, stdin);
        sobrenome[strcspn(sobrenome, "\n")] = 0;

        if(strlen(nome)==0 && strlen(sobrenome)==0){
            break;
        }
    
        strcpy(nomeCompleto, nome);
        strcat(nomeCompleto, " ");
        strcat(nomeCompleto, sobrenome);
        printf("Nome completo: %s\n", nomeCompleto);
    }
}