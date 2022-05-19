# Fatorial de números

num = int(input("Digite um número para fatorizar: "))
i = 1
fatorial = num

while i < num :
    fatorial = fatorial * (num - i)
    i += 1
print("O fatorial de ", num, "é:", fatorial)
