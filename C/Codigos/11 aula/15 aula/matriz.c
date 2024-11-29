#include <stdio.h>

void somaDiagonalPrincipal(int mat[3][3]){
    int soma = 0;
    for(int a = 0; a < 3; a++){
        for(int b = 0; b < 3; b++){
            if (a == b){
                soma = soma + mat[a][b];
            }
        }
    }

    printf("A soma da Diagonal principal eh: %d\n", soma);

}

void somaDiagonalSecundaria(int mat[3][3]){
    int soma = 0;
    for(int a = 0; a < 3; a++){
        for(int b = 2; b >= 0; b--){
            if (a == 3 - 1 - b){
                soma = soma + mat[a][b];
            }
        }
    }

    printf("A soma da Diagonal secundaria eh: %d\n", soma);
}

void mostraDiagonaPrincipal(int mat[3][3]){
    for(int a = 0; a < 3; a++){
        for(int b = 0; b < 3; b++){
            if (a == b){
                printf("%d", mat[a][b]);
            }
        }
        printf("\t");
    }
}

void mostraDiagonaSecundaria(int mat[3][3]){
    for(int a = 0; a < 3; a++){
         for(int b = 2; b >= 0; b--){
            if (a == 3 - 1 - b){
                printf("%d", mat[a][b]);
            }
        }
    }
}

int main(){
    int matriz[3][3];

    for(int a = 0; a < 3; a++){
        for(int b = 0; b < 3; b++){
            printf("Digite um numero da linha %d e coluna %d: ", a, b);
            scanf("%d", &matriz[a][b]);
        }
    }
    printf("\n");

    for(int a = 0; a < 3; a++){
        for(int b = 0; b < 3; b++){
            printf("%d", matriz[a][b]);
        }
        printf("\n");
    }
    printf("\n");

    somaDiagonalPrincipal(matriz);
    printf("\n");
    somaDiagonalSecundaria(matriz);
    printf("\n");
    mostraDiagonaPrincipal(matriz);
    printf("\n");
    mostraDiagonaSecundaria(matriz);
}