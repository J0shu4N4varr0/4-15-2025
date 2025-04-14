print("ingrese fecha en formato ddmmaaaa")
fecha = int(input("ingrese la fecha: "))
anio = fecha % 10000
mes = (fecha // 10000) % 100
dia = fecha // 1000000
print("el dia es: ", dia)
print("el mes es: ", mes)
print("el anio es: ", anio)
