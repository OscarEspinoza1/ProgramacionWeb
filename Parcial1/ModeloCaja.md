# Modelo Caja  
El modelo de cajas o “box model” es seguramente la característica mas importante del lenguaje de hojas de estilos CSS, ya que condiciona el diseño de todas las paginas web. El modelo de cajas es el comportamiento de CSS que hace todos los elementos de las páginas se representan mediante cajas rectangulares.  

Las cajas de una pagina se crean automáticamente. Cada vez que se inserta una etiqueta HTML, se crea una nueva caja rectangular que encierra los contenidos de ese elemento. La siguiente imagen muestra las tres cajas rectangulares que crean las tres etiquetas HTML que incluye la página:  

<center><img src="https://programacionweb1.files.wordpress.com/2015/04/ima1.jpg"></center>  

Las cajas de las paginas no son visibles a simple vista porque inicialmente no muestran ningún color de fondo ni ningún borde. Los navegadores crean y colocan cajas de forma automática. Cada una de las cajas esta formada por seis partes.  

<ul>
<li>Contenido (content): se trata del contenido HTML del elemento (las palabras de un párrafo, una imagen, listas, etc.).</li>  
<li>Relleno (padding): espacio libre opcional existente entre el contenido y el borde.</li>  
<li>Borde (border): línea que encierra completamente el contenido y su relleno.</li>  
<li>Imagen de fondo (background image): imagen que se muestra por detrás del contenido y el espacio de relleno.</li>  
<li>Color de fondo (background color): color que se muestra por detrás del contenido y el espacio de relleno.</li>  
<li>Margen (margin): separación opcional existente entre la caja y el resto de cajas adyacentes.</li>  
</ul>

La siguiente imagen muestra un diagrama mucho mas grafico de como están conformadas dichas cajas:  
<center><img src="https://programacionweb1.files.wordpress.com/2015/04/im2.gif"></center>  
&nbsp;  

# Propiedad Display  
La propiedad display en CSS nos ayuda a controlar donde se va a ver un elemento HTML dentro de la pantalla para estructurar nuestra pagina web. Esta propiedad se basa en la lógica del modelo de caja en CSS. En resumen, el modelo de caja en CSS dice que cada elemento HTML es realmente un bloque con una serie de características de borde, margen y padding. Como se ven estas características en nuestra página web dependerá de la opción de nuestra propiedad display en CSS que elijamos para el elemento.  

### *Inline vs block*  
La propiedad display no solo determina donde se va a situar cada elemento, también define como se va a comportar a nivel de bloque o de línea, e incluso si se va a ver o no. Para entender este comportamiento primero debemos saber que es el nivel de bloque y de línea.

### *Block*  
Representa un elemento como un bloque y es uno de los tipos de display que hay en CSS. Una forma de entender esto es pensar en los bloques como elementos que van de lado a lado en la pantalla como sería un párrafo. Cuando usamos este valor, el elemento empezara en una nueva línea al lado izquierdo de nuestro viewport y ocupara hacia la derecha, en el eje horizontal, tanto espacio como sea posible.  

### *Inline*  
Representa los elementos que continúan en la misma línea que el resto de contenido y es otro de los tipos de display en CSS. Los elementos inline pueden verse como una letra dentro de la propia línea del flujo del texto en vez de un bloque aparte. Estos elementos no respetan ni márgenes ni paddings top/bottom ni propiedades width y height. Es decir, si les aplicas un relleno o un margen solo afectarán a los lados del elemento.  

### *None*  
Oculta el elemento sin dejar espacio en el sitio que debería ocupar. Cuando agregues esta opción vera la página web sin ningún rastro de elemento. Esta opción permite crear estados en los que el elemento se oculte o se revele.  

## Bibliografia  
<a href="https://programacionweb1.wordpress.com/modelo-de-caja/">Modelo Caja</a>  
<a href="https://keepcoding.io/blog/propiedad-display-en-css/">Propiedad Display</a>
