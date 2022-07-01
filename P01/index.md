# Práctica 1 - Configuración de máquina virtual en el IaaS
## Entorno IaaS
Para comenzar será necesario iniciar sesión en Linux en alguno de los PCs de una sala del Centro de Cálculo o bien
desde otro ordenador. Cabe recordar que es necesario tener iniciada una conexión VPN si trabaja desde
fuera del campus universitario. Una vez tomada la máquina virtual debemos acceder al VSC Browser y confirmar que tiene aqsignada la IP a la interfaz de red de la máquina virtual, en nuestro caso es **10.6.129.78**. Para ello utilizamos el siguiente comando:
```
ifconfig -a
```
<p align="center">
  <img src="https://user-images.githubusercontent.com/52000890/154513246-90f0f573-542c-4bc2-bb23-1d396b07ab7d.png">
</p>

## Conexión SSH
El protocolo SSH proporciona un método seguro para acceder a un recurso privado, mediante el uso de un usuario y una contraseña, de forma remota. A continuación se abrirá una conexión SSH con la máquina usando la dirección IP de la misma que ha
obtenido en el paso anterior. Si esa conexión la realiza desde Linux el comando que
ha de usar para establecerla es:
```
ssh usuario@10.6.129.78
```
<p align="center">
  <img src="https://user-images.githubusercontent.com/52000890/154517196-2abfafce-9d44-4333-af3d-7b767e2cafaa.png">
</p>

## Actualización del hostname
Lo siguiente será cambiar el nombre de acceso a la máquina, en nuestro caso pasará a llamarse **iass-dsi-alu0101327372** como se muestra en la siguiente captura:
<p align="center">
  <img src="https://user-images.githubusercontent.com/52000890/154517506-95528f44-e67c-4053-a2a4-50fd25b29220.png">
</p>


## Actualización del software de la MV
Una vez hecho esto, debemos actualizar el software de la MV y reiniciarla. Para ello, utilizaremos estos tres comandos:
```
sudo apt update
sudo apt upgrade
sudo reboot
```

## Clave SSH pública-privada
La clave SSH consiste en la generación de un par de claves que proporcionan dos largas cadenas de caracteres —una pública y una privada—. La clave pública se instala en cualquier servidor y luego se desbloquea mediante la conexión con un cliente SSH que hace uso de la clave privada. Si las dos claves coinciden, el servidor SSH permite el acceso sin necesidad de utilizar una contraseña. Para generar una clave ssh y copiarla desde la máquina local a la virtual tendremos que escribir los siguientes comando en consola:
```
sssh-keygen
ssh-copy-id usuario@iaas-dsi-alu0101327372
```
<p align="center">
  <img src="https://user-images.githubusercontent.com/52000890/154516668-0340554f-c907-4568-a3d8-da687614ec41.png">
</p>

## Instalación de Git en la máquina virtual del IaaS
Git es un software de control de versiones diseñado por Linus Torvalds, pensando en la eficiencia, la confiabilidad y compatibilidad del mantenimiento de versiones de aplicaciones cuando estas tienen un gran número de archivos de código fuente. Para instalarlo ejectuar el siguiente comando:
```
sudo apt install git
```
El resultado esperado es el siguiente:
<p align="center">
  <img src="https://user-images.githubusercontent.com/52000890/154517911-08e65562-e5c2-4cb6-8b90-c49c023030f3.png">
</p>

Lo primero que deberás hacer cuando instales Git es establecer tu nombre de usuario y dirección de correo electrónico. Esto es importante porque los "commits" de Git usan esta información, y es introducida de manera inmutable en los commits que envías:
```
git config --global user.name "Marco Antonio Cabrera Hernández
git config --globak user.email alu0101327372@ull.edu.es
```
De nuevo, sólo necesitas hacer esto una vez si especificas la opción --global, ya que Git siempre usará esta información para todo lo que hagas en ese sistema.

## Configuración del prompt
Configuremos el prompt de la terminal para que aparezca la rama actual en la que nos encontramos cuando accedemos a algún directorio que resulta estar asociado a un repositorio Git. Los pasos a seguir son, por un lado, la descarga del script y, por el otro, modificar el fichero ~/.bashrc, incluyendo al final del mismo las dos líneas que aparecen a continuación:
```
source ~/.git-prompt.sh
PS1='\[\033]0;\u@\h:\w\007\]\[\033[0;34m\][\[\033[0;31m\]\w\[\033[0;32m\]($(git branch 2>/dev/null | sed -n "s/\* \(.*\)/\1/p"))\[\033[0;34m\]]$'
```
Para finalizar debemos clonar el repositorio de esta práctica, utilizando el comando `git clone`, pero primero debemos añadir una clave ssh en la cuenta de GitHub, se ha de ver de esta forma:
<p align="center">
  <img src="https://user-images.githubusercontent.com/52000890/154520205-8a9812a1-bc89-43a0-8095-912ad0ff4695.png">
</p>

Además, al acceder al directorio asociado al repositorio git, observe como el prompt del sistema indica, entre paréntesis, la rama actual de trabajo (gh-pages).
<p align="center">
  <img src="https://user-images.githubusercontent.com/52000890/154520746-feca3484-2b82-41dc-834b-fda096859e5e.png">
</p>

## Instalación de Node.js en la máquina virtual del IaaS
Para instalar Node.js utilizaremos el gestor de versiones Node Version Manager (NVM), para instalarlo utilizamos la Wget, es decir, la herramienta libre que permite la descarga de contenidos desde servidores web de una forma simple.
```
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
exec bash -l
```
A continuación instalamos Node.js
```
nvm install node
```
Finalmente para comprobar que versión se ha instalado, de Node.js y NPM, usaremos los comandos que se muestran en la siguiente imagen:
<p align="center">
  <img src="https://user-images.githubusercontent.com/52000890/154522636-11ca57da-18d7-4447-8332-6a2ce59a64d7.png">
</p>

## Versiones de Node.js
Si se quisiera instalar una version concreta de Node.js se utilizará el comando siguiente:
```
nvm install [VERSION]
```
Por último, para cambiar entre versiones, podemos ejecutar los siguientes comandos:
```
nvm list
nvm use [VERSION]
```
