# CADENA DE FAVORES
-------------------------------------------------------------------


## Introducción
¿Y si todos hiciesemos un favor a alguien? ¿y si alguien te hiciese un favor a ti sin esperar nada a cambio? En nuestra app podrás elegir a quién vas a ayudar y cuándo, y además recibiras ayuda de alguien altruistamente.
Los usuarios podrán
**1. Ver la lista de favores que solicitan los demás**
**2. Solicitar ayuda**
**3. Ver quién solicita ayuda a su alrededor**
-------------------------------------------------------------------
-------------------------------------------------------------------


## Endpoints

|       Route        | HTTP Verb |          Description          |
|--------------------|-----------|-------------------------------|
| `/inicio/registro` |    GET    | Te lleva al formulario de registro |
| `/inicio/registro` |    POST    | Te registra en la base de datos y te redirige al inicio de sesión |
| `/inicio/iniciar-sesión` |    GET    | Te lleva al formulario de registro |
| `/inicio/iniciar-sesión` |    POST    | Te lleva a la página de inicio |
| `/inicio/cerrar-sesión` |    POST    | Te cierra la sesión y te redirige al inicio |
| `/usuario/perfil` |    GET    | Te lleva al perfil de usuario. Si eres el admin verás las opciones de editar y eliminar usuarios y favores. |
| `/usuario/editar/:id` |    GET    | Te lleva al formulario de edición (o axios para editar perfil directamente) |
| `/usuario/editar/:id` |    POST    | Te modifica el perfil de usuario en la BBDD |
| `/usuario/dar-de-baja/:id` |    POST    | Te dá de baja la cuanta de usuario |
| `/favores` |    GET    | Muestra los favores en lista o en mapa |
| `/favores/detalles/:id` |    GET    | Te lleva a los detalles del favor |
| `/favores/nuevo` |    GET    | Te lleva al formulario de creación de favor |
| `/favores/nuevo` |    POST    | Te crea el favor en la BBDD y redirige a la lista de favores |
| `/favores/editar/:id` |    GET    | Te lleva al formulario de edición de favor (o axios para editar perfil directamente) |
| `/favores/editar/:id` |    POST    | Te modifica el favor en la BBDD |
| `/favores/eliminar/:id` |    POST    | Te elimina el favor en la BBDD |


-------------------------------------------------------------------


## Modelos

El modelo `User` debe de tener:
- `username` - String
- `password` - String
- `description` - String
- `avatar` - String
- `ranking` - String
- `role` - String

El modelo `Favour` debe de tener:


- `title` - String
- `description` - String
- `location` - String
- `status` - String
- `give` - mongoose.Schema.Types.ObjectId
- `receive` - mongoose.Schema.Types.ObjectId
