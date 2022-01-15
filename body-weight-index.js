/*Verilen formüle göre vücut kitle indeksi hesaplayan ve hesapladığı değere göre yazı yazan bir program yazalım. Programda yazılmış kısımları okuyup eksik kısımları tamamlayın.

Fonksiyon parametreleri prompt ile kullanıcıdan alınmalı.

Formül: vki = kg/(m * m)

İstenilenler:

Prompt ile kullanıcıdan bilgi almak
Verilen formülü uygun yere yazmak
Formülde metre cinsinden istendiği için diyalog kutucuğuna metre cinsinden örnek 1.66 yazarak kullanıcıya rehberlik etmek
Ek Bilgiler:
18.5 kg/m.'nin altında olanlar: Zayıf
18.5 – 24, 9 kg/m. arasında olanlar: Normal kilolu
25 – 29, 9 kg/m. arasında olanlar: Fazla kilolu
30 – 39, 9 kg/m. arasında olanlar: Obez
40 kg/m.'nin üzerinde olanlar: İleri derecede obez (morbid obez), olarak görülür.
*/
let kg=prompt("Lütfen kilonuzu giriniz")
let m=prompt("Lütfen boyunuzun uzunluğunu giriniz")
let vki=kg/(m*m)
if(vki<18.5)
{console.log(`Vücut kitle indexiniz: ${vki} - ZAYIF`)}

else if(vki>=18.5 && vki<=24.9)
{console.log(`Vücut kitle indexiniz: ${vki} - NORMAL`)}

else if(vki>=25 && vki<=29.9)
{console.log(`Vücut kitle indexiniz: ${vki} - FAZLA KİLOLU`)}

else if(vki>=30 && vki<=39.9)
{console.log(`Vücut kitle indexiniz: ${vki} - OBEZ`)}

else if(vki>40)
{console.log(`Vücut kitle indexiniz: ${vki} - İLERİ DERECE OBEZ`)}