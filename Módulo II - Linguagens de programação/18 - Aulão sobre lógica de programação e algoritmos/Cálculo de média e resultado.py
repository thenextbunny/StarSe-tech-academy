# Calculo da média de três notas e resultado se foi aprovado ou reprovado

notaA = int(input("Nota da prova A: "))
notaB = int(input("Nota da prova B: "))
notaC = int(input("Nota da prova C: "))
media = (notaA + notaB + notaC) / 3

if media >= 5 and media <= 10 :
    print("Aprovado.")

elif media >= 0 and media < 5 :
    print("Reprovado.")

else :
    print("Nota com erro.")