# evoqua-types
Definiciones de los tipos de datos usados por _evoqua_, un visualizador de la
evolución de la calidad de diseño de un software basado en tubos de kiviat.
Incluye:

1) Los modelos de los datos que esperan recibir los componentes del
visualizador y que deben producir los componentes del analizador.

2) La API, o interfaces que deben implementar los componentes del analizador.
Para usar un analizador como SonarQube o PMD se debe desarrollar un adaptador
que implemente estas interfaces. Se provee un adaptador para SonarQube en el
repositorio `@evoqua/sonarqube-api`.
