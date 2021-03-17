# CADENA DE FAVORES
-------------------------------------------------------------------


Basándonos en la película `Cadena de favores`, hemos desarrollado este sitio web en el que todos los usuarios pueden pedir ayuda y además ayudar a otros, creando así una serie de actos altruistas para hacer del mundo un lugar mejor.

-------------------------------------------------------------------


![](cadenadefavores.gif)


-------------------------------------------------------------------


## Endpoints

|       Route        | HTTP Verb |          Description          |
|--------------------|-----------|-------------------------------|
| `/inicio/registro` |    GET    | Ir al formulario de registro |
| `/inicio/registro` |    POST    | Registrar en la base de datos y te redirige al inicio de sesión |
| `/inicio/iniciar-sesión` |    GET    | Ir al formulario de inicio de sesión |
| `/inicio/iniciar-sesión` |    POST    | Ir a tu perfil |
| `/inicio/cerrar-sesión` |    POST    | Cerrar la sesión y redirigir al inicio |
| `/usuario/perfil` |    GET    | Ir al perfil de usuario|
| `/usuario/editar/:id` |    GET    |  Ir al formulario de edición (o axios para editar perfil directamente) |
| `/usuario/editar/:id` |    POST    | Modificar el perfil de usuario en la BBDD |
| `/usuario/dar-de-baja/:id` |    POST    | Dar de baja la cuenta de usuario |
| `/favores` |    GET    | Mostrar los favores en lista o en mapa |
| `/favores/detalles/:id` |    GET    | Ir a los detalles del favor |
| `/favores/nuevo` |    GET    | Ir al formulario de creación de favor |
| `/favores/nuevo` |    POST    | Crear el favor en la BBDD y redirigir a la lista de favores |
| `/favores/editar/:id` |    GET    | Ir al formulario de edición de favor (o axios para editar perfil directamente) |
| `/favores/editar/:id` |    POST    | Modificar el favor en la BBDD |
| `/favores/eliminar/:id` |    POST    | Eliminar el favor en la BBDD |


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
