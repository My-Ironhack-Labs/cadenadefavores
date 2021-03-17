# CADENA DE FAVORES
-------------------------------------------------------------------

![](cadenadefavores.gif)


-------------------------------------------------------------------


## Endpoints

|       Route        | HTTP Verb |          Description          |
|--------------------|-----------|-------------------------------|
| `/inicio/registro` |    GET    | Ir al formulario de registro |
| `/inicio/registro` |    POST    | Registrar en la base de datos y te redirige al inicio de sesión |
| `/inicio/iniciar-sesión` |    GET    | Al formulario de inicio de sesión |
| `/inicio/iniciar-sesión` |    POST    | Te lleva a tu perfil |
| `/inicio/cerrar-sesión` |    POST    | Cerrar la sesión y redirigir al inicio |
| `/usuario/perfil` |    GET    | Al perfil de usuario. |
| `/usuario/editar/:id` |    GET    |  Al formulario de edición (o axios para editar perfil directamente) |
| `/usuario/editar/:id` |    POST    | Modificar el perfil de usuario en la BBDD |
| `/usuario/dar-de-baja/:id` |    POST    | Dar de baja la cuenta de usuario |
| `/favores` |    GET    | Mostrar los favores en lista o en mapa |
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
