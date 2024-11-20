#Nome: Igor Gabriel Silva Prado

#1 - Verifique se o estado "Paraná" existe no dicionário.

estados = {
    "São Paulo": "SP",
    "Rio de Janeiro": "RJ",
    "Minas Gerais": "MG",
    "Bahia": "BA"
}
for keys in estados.keys():
    print(keys)
    if keys == "Paraná":
        break
    else:
        print("O estado do Paraná não existe no dicionário.")
        break
    
#-----------------------------------------------------------------------------------------
#2 - Altere os preços de alguns produtos, diminuindo em 15%
produtos = {
    "Camiseta": 45.0,
    "Calça": 89.90,
    "Tênis": 120.0,
    "Jaqueta": 250.0
}
for Camiseta in produtos.items():
    if Camiseta == ("Camiseta", 45.0):
        produtos["Camiseta"] = produtos["Camiseta"] * 0.85
        print("O preço da Camisa foi alterado para: ",produtos["Camiseta"])
for Jaqueta in produtos.items():
    if Jaqueta == ("Jaqueta", 250.0):
        produtos["Jaqueta"] = produtos["Jaqueta"] * 0.85
        print("O preço da Jaqueta foi alterado para: ",produtos["Jaqueta"])
#-----------------------------------------------------------------------------------------
#3 - Verifique se o produto "Tênis" existe no dicionário de produtos.
produtos = {
    "Camiseta": 45.0,
    "Calça": 89.90,
    "Tênis": 120.0,
    "Jaqueta": 250.0
}
for keys in produtos.keys():
    if keys == "Tênis":
        print("O produto Tênis existe no dicionário.")
        break
#-----------------------------------------------------------------------------------------
#4 - Encontrar o maior valor dos produtos em um dicionário. (pode usar "max")
produtos = {
    "Camiseta": 45.0,
    "Calça": 89.90,
    "Tênis": 120.0,
    "Jaqueta": 250.0
}
maior_valor = max(produtos.values())
print("O maior valor é: ", maior_valor)
#-----------------------------------------------------------------------------------------
#5 - Faça um dicionário com as 5 pessoas mais perto de você, tendo o nome 
# como chave e a cor da camisa que está usando como valor.
dicionario = {"Luis": "Azul", 
              "Maria": "Branca", 
              "João": "Preta", 
              "Ana": "Vermelha", 
              "Pedro": "Verde"}
print(dicionario)
#-----------------------------------------------------------------------------------------
#6 - Faça um discionario com uma descrição de valor de 5 produtos de 
# latícinio do supermercado depois de pronto inclua mas 3 produtos da padaria
# com seus respectivos preços.
dicionario = {"Leite": 3.50,
              "Queijo": 5.00,
              "Iogurte": 2.00,
              "Manteiga": 4.00,
              "Requeijão": 3.00}
print(dicionario)
dicionario["Pão francês"] = 0.50
dicionario["Pão de queijo"] = 1.00
dicionario["Rosquinha"] = 2.00
print(dicionario)
#-----------------------------------------------------------------------------------------
#7 - Faça um dicionário com 5 modelos de carros com seus respectivos valores,
# depois remova os dois mais caros.
dicionario = {"Fiat": 30.000, 
              "Ford": 40.000, 
              "Chevrolet": 50.000, 
              "Volkswagen": 60.000, 
              "Toyota": 70.000}
print(dicionario)
dicionario.pop("Toyota")
dicionario.pop("Volkswagen")
print(dicionario)
#-----------------------------------------------------------------------------------------
#8 - Faça um dicionário com 5 sabores de bolo e depois remova o que vc menos gosta.
dicionario = {"Chocolate": 1.00,
              "Chocolate": 1.50,
              "Morango": 2.00,
              "Abacaxi": 2.50,
                "Laranja": 3.00}
print(dicionario)
dicionario.pop("Chocolate")
print(dicionario)