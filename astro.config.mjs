import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Organización de Centros de Cómputo',
			social: {
				github: 'https://github.com/EloyChavezDev/ManualCC',
			},
			sidebar: [
				{
					label: 'Clases',
					items:[
						{label: 'Introduccion', link: '/Clases/Resumen/' },
						{
							label: 'Primer Parcial',
							collapsed: true,
							autogenerate: { directory: 'Clases/Primer_Parcial' },
						},
						{
							label: 'Segundo Parcial',
							collapsed: true,
							autogenerate: { directory: 'Clases/Segundo_Parcial' },
						},
						{
							label: 'Tercer Parcial',
							collapsed: true,
							autogenerate: { directory: 'Clases/Tercer_Parcial' },
						}
					]
				},
				{
					label: 'Manual',
					items:[
						{label: 'Indice', link: '/Manual/Resumen' },
						{
						label: 'introducción', 
						collapsed: true,
						autogenerate: { directory: 'Manual/01_Introduccion-a_la_orgranizacion_de_centros_de_computo'},
						},
						{
						label: 'Infraestructura física', 
						collapsed: true,
						autogenerate: { directory: 'Manual/02_Infraestructura_física'},
						},
						{
						label: 'Equipamiento de Hardware', 
						collapsed: true,
						autogenerate: { directory: 'Manual/03_Equipamiento_de_Hardware'},
						},
						{
						label: 'Software y S.O.', 
						collapsed: true,
						autogenerate: { directory: 'Manual/04_Software_y_Sistemas_Operativos'},
						},
						{
						label: 'Mantenimiento del CC', 
						collapsed: true,
						autogenerate: { directory: 'Manual/05_Mantenimiento_del_Centro_de_Computo'},
						},
						{
						label: 'Seguridad Informática', 
						collapsed: true,
						autogenerate: { directory: 'Manual/06_Seguridad_Informatica'},
						},
						{
						label: 'Reglamento y Sanciones', 
						collapsed: true,
						autogenerate: { directory: 'Manual/07_Reglamento_y_Sanciones'},
						},
						{
						label: 'Gestión de Recursos Humanos', 
						collapsed: true,
						autogenerate: { directory: 'Manual/08_Gestion_de_Recursos_Humanos'},
						},
						
					]
				},
			],
		}),
	],
});
