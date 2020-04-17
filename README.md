# APLICATIVO WEB SIMULADOR BOOKMARKS

 Api para Registro de Links de Internet
 Podras guardar links de videos de youtube, imágenes o páginas

 En este aplicativo usted podrá insertar,consultar, eliminar y modificar un marcador
 de sitios de interes para internet.

 Los datos que se pueden ingresar son url(obligatorio), nombre(obligatorio), descripción(opcional)

 Este proyecto posee un Api de los marcadores y una base de datos

 # MARCADOR
 - id
 - nombre
 - descripcion
 - url

# Scrip Tabla Marcador en Postgres
CREATE TABLE public.marcador
(
    id bigint NOT NULL DEFAULT nextval('marcador_id_seq'::regclass),
    url text COLLATE pg_catalog."default" NOT NULL,
    nombre text COLLATE pg_catalog."default" NOT NULL,
    descripcion text COLLATE pg_catalog."default",
    CONSTRAINT marcador_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE public.marcador
    OWNER to postgres;

