#include <stdio.h>
int linha(int num,char ch){
int i;

for (i=1 ; i<=num ; i++){
putchar(ch);
putchar('\n');
 }
}

int main(){
int i;

/* Escrita do Cabeçalho */
linha(50 , '*');
puts("\nNumeros entre 1 e 5");
linha(50 , '*');
/* Escrita dos Nºs */

for(i=1; i<=5 ; i++){
printf("\n%d\n",i);
    }
linha(3,'+');
linha(5,'+');
linha(7,'-');
linha(5,'*');
linha(3,'*');
linha(50 , '*');
}
