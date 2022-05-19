# Contador de caracteres

texto = input("Digite um texto, uma palavra ou uma frase: ")
caracteres = 0

for char in texto:
    caracteres += 1

print("Esse texto tem", caracteres, "caracteres.")
