import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  organizadores: any[] = [
    {
      name: "Milton Medina",
      image: "profeMilton.jpg",
      descripcion:
        " Ph.D. En Física, Investigador Junior de Minciencias, docente de la Universidad Tecnológica de Pereira, director del grupo de Investigación en Electrofisiología reconocido en categoría b, co-director del Grupo de Investigación en propiedades Magnéticas y Magneto-ópticas de nuevos materiales (GIMM) reconocido en categoría b.",
    },
    {
      name: "Jenniffer Bustamante",
      image: "profe_jennifer.png",
      descripcion:
        "Estudiante de Doctorado en Ciencias, Magister en Ingeniería Eléctrica, docente de la Universidad Tecnológica de Pereira, integrante del grupo de Investigación en Electrofisiología reconocido en categoría b.",
    },
    {
      name: "Milton Medina",
      image: "profeMilton.jpg",
      descripcion:
        " Ph.D. En Física, Investigador Junior de Minciencias, docente de la Universidad Tecnológica de Pereira, director del grupo de Investigación en Electrofisiología reconocido en categoría b, co-director del Grupo de Investigación en propiedades Magnéticas y Magneto-ópticas de nuevos materiales (GIMM) reconocido en categoría b.",
    },
    {
      name: "Milton Medina",
      image: "profeMilton.jpg",
      descripcion:
        " Ph.D. En Física, Investigador Junior de Minciencias, docente de la Universidad Tecnológica de Pereira, director del grupo de Investigación en Electrofisiología reconocido en categoría b, co-director del Grupo de Investigación en propiedades Magnéticas y Magneto-ópticas de nuevos materiales (GIMM) reconocido en categoría b.",
    },
    {
      name: "Milton Medina",
      image: "profeMilton.jpg",
      descripcion:
        " Ph.D. En Física, Investigador Junior de Minciencias, docente de la Universidad Tecnológica de Pereira, director del grupo de Investigación en Electrofisiología reconocido en categoría b, co-director del Grupo de Investigación en propiedades Magnéticas y Magneto-ópticas de nuevos materiales (GIMM) reconocido en categoría b.",
    },
    {
      name: "Milton Medina",
      image: "profeMilton.jpg",
      descripcion:
        " Ph.D. En Física, Investigador Junior de Minciencias, docente de la Universidad Tecnológica de Pereira, director del grupo de Investigación en Electrofisiología reconocido en categoría b, co-director del Grupo de Investigación en propiedades Magnéticas y Magneto-ópticas de nuevos materiales (GIMM) reconocido en categoría b.",
    },
    
    
  ];


  Tematicas: any[] = [
    {
      name: "Materiales",
      image: "termografia.jpg"
    },
    {
      name: "Termografia medica",
      image: "termografia.jpg"
    },
    {
      name: "Termografia de materiales",
      image: "termografia.jpg"
    },
    {
      name: "Milton Humberto",
      image: "termografia.jpg"
    },
  ];
}
